import React, { useMemo, useState } from "react";
import { useAuth, useCategories, useCustomers, useOrders, useProducts } from "../../../../context/AppProviders";
import { formatCurrency } from "../../../../utils/formatters";
import AdminLayout from "./AdminLayout";
import "./OperationsPage.css";

const emptyProduct = { name: "", category: "Electrical", price: "", stock: "", status: "Active", description: "" };
const emptyCustomer = { name: "", email: "", phone: "", status: "Active", orders: "0" };
const emptyOrder = { title: "", client: "", price: "", status: "pending", date: "" };

const OperationsPage = () => {
  const { authUser } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { categories, addCategory, deleteCategory } = useCategories();
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useCustomers();
  const { addOrder } = useOrders();

  const [productForm, setProductForm] = useState(emptyProduct);
  const [editingProductId, setEditingProductId] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [customerForm, setCustomerForm] = useState(emptyCustomer);
  const [orderForm, setOrderForm] = useState(emptyOrder);
  const [search, setSearch] = useState("");
  const [productFilter, setProductFilter] = useState("All");
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase();
    return products.filter((product) => {
      const matchesText = `${product.name} ${product.category}`.toLowerCase().includes(q);
      const matchesFilter = productFilter === "All" || product.category === productFilter;
      return matchesText && matchesFilter;
    });
  }, [products, productFilter, search]);

  const handleProductSubmit = (event) => {
    event.preventDefault();
    if (!productForm.name.trim()) {
      setNotice("Product name is required.");
      return;
    }
    const payload = {
      ...productForm,
      price: Number(productForm.price) || 0,
      stock: Number(productForm.stock) || 0,
    };

    if (editingProductId) {
      updateProduct(editingProductId, payload);
      setNotice("Product updated locally.");
    } else {
      addProduct(payload);
      setNotice("Product created locally.");
    }

    setProductForm(emptyProduct);
    setEditingProductId(null);
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
      description: product.description,
    });
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    setNotice("Product removed.");
  };

  const handleAddCategory = (event) => {
    event.preventDefault();
    const name = addCategory(categoryName);
    if (name) {
      setCategoryName("");
      setNotice(`Category ${name} added.`);
    }
  };

  const handleDeleteCategory = (name) => {
    deleteCategory(name);
    setNotice(`Category ${name} removed.`);
  };

  const handleCustomerSubmit = (event) => {
    event.preventDefault();
    if (!customerForm.name.trim() || !customerForm.email.trim()) {
      setNotice("Customer name and email are required.");
      return;
    }
    addCustomer({ ...customerForm, orders: Number(customerForm.orders) || 0 });
    setCustomerForm(emptyCustomer);
    setNotice("Customer added locally.");
  };

  const handleCustomerDelete = (id) => {
    deleteCustomer(id);
    setNotice("Customer removed.");
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    if (!orderForm.title.trim()) {
      setNotice("Order title is required.");
      return;
    }
    addOrder({
      ...orderForm,
      price: Number(orderForm.price) || 0,
      client: orderForm.client || authUser?.fullName || "Guest",
      date: orderForm.date || new Date().toISOString().slice(0, 10),
    });
    setOrderForm(emptyOrder);
    setNotice("Order created locally.");
  };

  return (
    <AdminLayout>
      <main className="operations-page">
        <section className="hero-panel compact">
          <div>
            <p className="eyebrow">Operations Hub</p>
            <h1>Run product, category, customer, and order flows from one screen.</h1>
            <p>Every action updates local storage and keeps the mock MVP realistic.</p>
          </div>
        </section>

        {notice ? <div className="notice-banner">{notice}</div> : null}

        <section className="operations-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Product Management</p>
                <h2>{editingProductId ? "Edit Product" : "Create Product"}</h2>
              </div>
            </div>
            <form className="stack-form" onSubmit={handleProductSubmit}>
              <input value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} placeholder="Product name" />
              <select value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
              <input type="number" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} placeholder="Price" />
              <input type="number" value={productForm.stock} onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })} placeholder="Stock" />
              <select value={productForm.status} onChange={(e) => setProductForm({ ...productForm, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Hot">Hot</option>
                <option value="Archived">Archived</option>
              </select>
              <textarea value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} placeholder="Description" />
              <button type="submit" className="primary-btn">{editingProductId ? "Save changes" : "Add product"}</button>
            </form>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Categories</p>
                <h2>Manage categories</h2>
              </div>
            </div>
            <form className="stack-form" onSubmit={handleAddCategory}>
              <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="New category" />
              <button type="submit" className="primary-btn">Add category</button>
            </form>
            <div className="bubble-list">
              {categories.map((category) => (
                <div key={category} className="bubble-item">
                  <span>{category}</span>
                  <button type="button" className="ghost-btn" onClick={() => handleDeleteCategory(category)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="operations-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Inventory</p>
                <h2>Products list</h2>
              </div>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" />
              <select value={productFilter} onChange={(e) => setProductFilter(e.target.value)}>
                <option value="All">All categories</option>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{formatCurrency(product.price)}</td>
                      <td>{product.stock}</td>
                      <td>{product.status}</td>
                      <td>
                        <button type="button" className="table-action" onClick={() => handleEditProduct(product)}>Edit</button>
                        <button type="button" className="table-action danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Customers</p>
                <h2>Add customers</h2>
              </div>
            </div>
            <form className="stack-form" onSubmit={handleCustomerSubmit}>
              <input value={customerForm.name} onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })} placeholder="Customer name" />
              <input value={customerForm.email} onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })} placeholder="Email" />
              <input value={customerForm.phone} onChange={(e) => setCustomerForm({ ...customerForm, phone: e.target.value })} placeholder="Phone" />
              <input value={customerForm.orders} onChange={(e) => setCustomerForm({ ...customerForm, orders: e.target.value })} placeholder="Orders" />
              <select value={customerForm.status} onChange={(e) => setCustomerForm({ ...customerForm, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Blocked">Blocked</option>
              </select>
              <button type="submit" className="primary-btn">Add customer</button>
            </form>
            <div className="bubble-list">
              {customers.map((customer) => (
                <div key={customer.id} className="bubble-item">
                  <span>{customer.name} • {customer.status}</span>
                  <button type="button" className="ghost-btn" onClick={() => handleCustomerDelete(customer.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="operations-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Orders</p>
                <h2>Create order</h2>
              </div>
            </div>
            <form className="stack-form" onSubmit={handleOrderSubmit}>
              <input value={orderForm.title} onChange={(e) => setOrderForm({ ...orderForm, title: e.target.value })} placeholder="Order title" />
              <input value={orderForm.client} onChange={(e) => setOrderForm({ ...orderForm, client: e.target.value })} placeholder="Client" />
              <input type="number" value={orderForm.price} onChange={(e) => setOrderForm({ ...orderForm, price: e.target.value })} placeholder="Price" />
              <input type="date" value={orderForm.date} onChange={(e) => setOrderForm({ ...orderForm, date: e.target.value })} />
              <select value={orderForm.status} onChange={(e) => setOrderForm({ ...orderForm, status: e.target.value })}>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
              <button type="submit" className="primary-btn">Create order</button>
            </form>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
};

export default OperationsPage;