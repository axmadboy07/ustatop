import "./Market2.css";

const ustas = [
  {
    id: 1,
    initials: "JK",
    avatarBg: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    name: "Javlon Karimov",
    role: "Premium elektrik",
    verified: true,
    passportVerified: true,
    desc: "Kvartira va ofis elektr tizimlari, avtomat, rozetka va yoritish ishlari.",
    rating: 4.9,
    reviews: 182,
    narx: "180 000 so'm",
    tajriba: "8 yil",
    javob: "12 min",
    services: [
      { nima: "Rozetka va avtomat almashtirish", narx: "180 000 so'm / ish",   vaqt: "Bugun 18:00"    },
      { nima: "Elektr liniya tortish",           narx: "35 000 so'm / metr",   vaqt: "Ertaga 11:00"   },
    ],
    tags: ["Rozetka", "Avtomat", "Yoritish", "Diagnostika"],
  },
  {
    id: 2,
    initials: "AB",
    avatarBg: "linear-gradient(135deg, #db2777 0%, #ec4899 100%)",
    name: "Aziz Bekmurodov",
    role: "Ta'mirlash brigadasi",
    verified: true,
    passportVerified: true,
    desc: "Uy, ofis va do'kon ta'miri. Smeta, brigada va material nazorati bilan.",
    rating: 4.9,
    reviews: 97,
    narx: "350 000 so'm",
    tajriba: "11 yil",
    javob: "18 min",
    services: [
      { nima: "Remont smetasi",   narx: "350 000 so'm / m2", vaqt: "Dushanba 10:00" },
      { nima: "Plitka yotqizish", narx: "180 000 so'm / m2", vaqt: "Seshanba 12:00" },
    ],
    tags: ["Smeta", "Gipsokarton", "Plitka", "Bo'yoq"],
  },
  {
    id: 3,
    initials: "MT",
    avatarBg: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    name: "Madina Tursunova",
    role: "Klinning jamoasi",
    verified: true,
    passportVerified: true,
    desc: "Kvartira, ofis va ko'chib kirishdan oldingi chuqur tozalash.",
    rating: 4.9,
    reviews: 205,
    narx: "90 000 so'm",
    tajriba: "4 yil",
    javob: "7 min",
    services: [
      { nima: "Uy tozalash",    narx: "90 000 so'm / m2",  vaqt: "Ertaga 11:00" },
      { nima: "Chuqur klinning", narx: "130 000 so'm / m2", vaqt: "Ertaga 15:00" },
    ],
    tags: ["Klinning", "Oshxona", "Oyna", "Gilam"],
  },
  {
    id: 4,
    initials: "SK",
    avatarBg: "linear-gradient(135deg, #16df9f 0%, #63b298 100%)",
    name: "Sardor Komilov",
    role: "Santexnik usta",
    verified: true,
    passportVerified: true,
    desc: "Suv quvurlari, vannaxona o'rnatish, gaz va qizitish tizimlari bo'yicha mutaxassis.",
    rating: 4.8,
    reviews: 134,
    narx: "120 000 so'm",
    tajriba: "6 yil",
    javob: "9 min",
    services: [
      { nima: "Kran almashtirish", narx: "120 000 so'm / ish",  vaqt: "Bugun 17:00"  },
      { nima: "Quvur ta'miri",     narx: "80 000 so'm / metr",  vaqt: "Ertaga 09:00" },
    ],
    tags: ["Santexnik", "Quvur", "Vannaxona", "Gaz"],
  },
  {
    id: 5,
    initials: "DY",
    avatarBg: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    name: "Dilnoza Yusupova",
    role: "Dizayner & dekorator",
    verified: true,
    passportVerified: false,
    desc: "Interyer dizayn, mebel joylashtirish va xona bezash xizmatlari.",
    rating: 4.7,
    reviews: 68,
    narx: "250 000 so'm",
    tajriba: "5 yil",
    javob: "22 min",
    services: [
      { nima: "Interyer dizayn", narx: "250 000 so'm / xona", vaqt: "Seshanba 14:00"  },
      { nima: "3D loyiha",       narx: "400 000 so'm / ish",  vaqt: "Chorshanba 10:00"},
    ],
    tags: ["Dizayn", "Dekor", "3D", "Mebel"],
  },
  {
    id: 6,
    initials: "RN",
    avatarBg: "linear-gradient(135deg, #be185d 0%, #e11d48 100%)",
    name: "Rustam Nazarov",
    role: "Konditsioner usta",
    verified: true,
    passportVerified: true,
    desc: "Konditsioner o'rnatish, ta'mirlash va texnik xizmat ko'rsatish. Tez va kafolatli.",
    rating: 4.9,
    reviews: 311,
    narx: "150 000 so'm",
    tajriba: "9 yil",
    javob: "5 min",
    services: [
      { nima: "Konditsioner o'rnatish", narx: "150 000 so'm / ish", vaqt: "Bugun 15:00"  },
      { nima: "Gaz to'ldirish",         narx: "90 000 so'm / ish",  vaqt: "Ertaga 12:00" },
    ],
    tags: ["Konditsioner", "Sovutish", "Isitish", "Texnik"],
  },
];

/* ── Star SVG ── */
function Star({ filled }) {
  return (
    <svg className="m2-star" viewBox="0 0 20 20">
      <path
        d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z"
        fill={filled ? "#00c2ff" : "#1e3040"}
      />
    </svg>
  );
}

/* ── Single Usta Card ── */
function UstaCard({ u }) {
  const fullStars = Math.round(u.rating);

  return (
    <div className="m2-card">
      {/* Header */}
      <div className="m2-header">
        <div className="m2-header-left">
          <div className="m2-avatar" style={{ background: u.avatarBg }}>
            {u.initials}
          </div>
          <div className="m2-name-block">
            <p className="m2-name">{u.name}</p>
            <p className="m2-role">{u.role}</p>
          </div>
        </div>

        <div className="m2-badges">
          {u.verified && <span className="m2-badge-verified">Verified</span>}
          {u.passportVerified && (
            <span className="m2-badge-passport">Passport<br />verified</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="m2-desc">{u.desc}</p>

      {/* Stars */}
      <div className="m2-stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} filled={n <= fullStars} />
        ))}
        <span className="m2-rating-val">{u.rating}</span>
        <span className="m2-rating-count">{u.reviews} sharh</span>
      </div>

      {/* Stats */}
      <div className="m2-stats">
        <div className="m2-stat">
          <div className="m2-stat-label">Narx</div>
          <div className="m2-stat-val">{u.narx}</div>
        </div>
        <div className="m2-stat">
          <div className="m2-stat-label">Tajriba</div>
          <div className="m2-stat-val">{u.tajriba}</div>
        </div>
        <div className="m2-stat">
          <div className="m2-stat-label">Javob</div>
          <div className="m2-stat-val">{u.javob}</div>
        </div>
      </div>

      {/* Services Table */}
      <div className="m2-table">
        <div className="m2-table-head">
          <span>NIMA QILADI</span>
          <span>QANCHADA</span>
          <span>QACHON</span>
        </div>
        {u.services.map((svc, i) => (
          <div className="m2-table-row" key={i}>
            <span className="m2-svc-name">{svc.nima}</span>
            <span className="m2-svc-price">{svc.narx}</span>
            <span className="m2-svc-time">{svc.vaqt}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="m2-tags">
        {u.tags.map((t) => (
          <span className="m2-tag" key={t}>{t}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="m2-btns">
        <button className="m2-btn-buy">Buyurtma</button>
        <button className="m2-btn-chat">Chat</button>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function Market2() {
  return (
    <div className="m2-page">
      <div className="m2-grid">
        {ustas.map((u) => (
          <UstaCard key={u.id} u={u} />
        ))}
      </div>
    </div>
  );
}
