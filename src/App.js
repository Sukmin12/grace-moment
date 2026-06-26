import { useState } from "react";

// ── 색상 토큰 ──────────────────────────────────────────────────────────
const C = {
  bg: "#FFFBF5",
  surface: "#FFFFFF",
  warm: "#FDF6EC",
  gold: "#D4901A",
  goldLight: "#FEF3DC",
  goldSoft: "#F5C842",
  amber: "#E8A020",
  ink: "#1C1208",
  muted: "#7A6A52",
  border: "#EDE3D4",
  soft: "#F9F3EA",
  green: "#4A7C59",
  red: "#C0392B",
};

// ── 공통 스타일 ────────────────────────────────────────────────────────
const S = {
  page: { minHeight: "100vh", backgroundColor: C.bg, fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif", color: C.ink },
  card: { backgroundColor: C.surface, borderRadius: 16, border: `1px solid ${C.border}`, padding: "28px" },
  label: { display: "block", fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 6, letterSpacing: "0.02em" },
  input: { width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 15, color: C.ink, backgroundColor: C.surface, outline: "none", fontFamily: "inherit" },
  textarea: { width: "100%", boxSizing: "border-box", border: `1.5px solid ${C.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 15, color: C.ink, backgroundColor: C.surface, resize: "vertical", outline: "none", fontFamily: "inherit" },
  btn: { backgroundColor: C.gold, color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  btnOutline: { backgroundColor: "transparent", color: C.gold, border: `2px solid ${C.gold}`, borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  btnGhost: { backgroundColor: "transparent", color: C.muted, border: `1.5px solid ${C.border}`, borderRadius: 10, padding: "10px 18px", fontSize: 13, cursor: "pointer", fontFamily: "inherit" },
};

// ── 네비게이션 ─────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home", label: "홈" },
    { id: "about", label: "소개" },
    { id: "download", label: "사진 받기" },
    { id: "request", label: "촬영 신청" },
  ];
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 200, backgroundColor: "rgba(255,251,245,0.95)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${C.border}`, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
      <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `radial-gradient(circle, ${C.goldSoft}, ${C.gold})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✦</div>
        <span style={{ fontWeight: 800, fontSize: 18, color: C.ink, letterSpacing: "-0.03em" }}>Grace<span style={{ color: C.gold }}>Moment</span></span>
      </div>
      {/* 데스크탑 메뉴 */}
      <div style={{ display: "flex", gap: 4 }}>
        {links.map(l => (
          <button key={l.id} onClick={() => setPage(l.id)} style={{ border: "none", background: page === l.id ? C.goldLight : "transparent", color: page === l.id ? C.gold : C.muted, borderRadius: 8, padding: "8px 16px", fontSize: 14, fontWeight: page === l.id ? 700 : 500, cursor: "pointer", fontFamily: "inherit" }}>
            {l.label}
          </button>
        ))}
      </div>
      <button onClick={() => setPage("request")} style={{ ...S.btn, padding: "9px 20px", fontSize: 13 }}>촬영 신청하기</button>
    </nav>
  );
}

// ── 홈 페이지 ──────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <div>
      {/* 히어로 */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 24px 80px", textAlign: "center" }}>
        {/* 빛 번짐 배경 */}
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: `radial-gradient(ellipse, rgba(212,144,26,0.15) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", left: "20%", width: 300, height: 300, background: `radial-gradient(circle, rgba(245,200,66,0.1) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", backgroundColor: C.goldLight, color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", padding: "5px 16px", borderRadius: 20, marginBottom: 24, textTransform: "uppercase" }}>
            교회 행사 전문 사진 서비스
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            은혜로운 순간을<br />
            <span style={{ color: C.gold }}>영원히 간직하세요</span>
          </h1>
          <p style={{ fontSize: 18, color: C.muted, maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.8 }}>
            예배, 수련회, 부활절, 성탄절 — 교회의 모든 특별한 순간을 전문적으로 담아드립니다.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ ...S.btn, padding: "14px 36px", fontSize: 16 }} onClick={() => setPage("request")}>촬영 신청하기 →</button>
            <button style={{ ...S.btnOutline, padding: "13px 32px", fontSize: 16 }} onClick={() => setPage("download")}>사진 받기</button>
          </div>
        </div>
      </section>

      {/* 3가지 서비스 카드 */}
      <section style={{ padding: "60px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Services</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, margin: 0, letterSpacing: "-0.03em" }}>무엇을 도와드릴까요?</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { icon: "📸", title: "행사 촬영", desc: "예배, 수련회, 특별 행사 등 교회의 모든 순간을 전문 장비로 촬영해드립니다.", action: "촬영 신청", page: "request" },
            { icon: "🖼", title: "사진 다운로드", desc: "촬영 완료 후 행사별 앨범에서 원하는 사진을 바로 다운로드 받으세요.", action: "사진 받기", page: "download" },
            { icon: "🔍", title: "얼굴 인식 검색", desc: "사진이 너무 많아서 찾기 힘드신가요? 내 얼굴로 내가 나온 사진만 골라드립니다.", action: "얼굴로 찾기", page: "face" },
          ].map(s => (
            <div key={s.title} style={{ ...S.card, textAlign: "center", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(212,144,26,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{s.title}</div>
              <p style={{ color: C.muted, lineHeight: 1.7, fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
              <button style={{ ...S.btnOutline, fontSize: 13, padding: "9px 20px" }} onClick={() => setPage(s.page)}>{s.action} →</button>
            </div>
          ))}
        </div>
      </section>

      {/* 촬영 가능 행사 */}
      <section style={{ backgroundColor: C.warm, padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Events</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 40px", letterSpacing: "-0.03em" }}>이런 행사를 촬영해드려요</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["주일 예배", "부활절", "성탄절", "수련회", "청년부 행사", "어린이부 행사", "찬양 집회", "세례식", "결혼 예배", "임직식", "교회 창립 기념일", "선교 행사"].map(tag => (
              <span key={tag} style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: "8px 18px", fontSize: 14, fontWeight: 600, color: C.ink }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>✦</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.03em" }}>다음 행사를 함께 준비해요</h2>
          <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: 32 }}>촬영 문의부터 사진 전달까지, 교회 행사의 소중한 기억을 안전하게 보관해드립니다.</p>
          <button style={{ ...S.btn, padding: "14px 40px", fontSize: 16 }} onClick={() => setPage("request")}>무료 견적 문의하기</button>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "32px 24px", textAlign: "center", color: C.muted, fontSize: 13 }}>
        © 2025 GraceMoment. 교회 행사 전문 사진 서비스
      </footer>
    </div>
  );
}

// ── 소개 페이지 ────────────────────────────────────────────────────────
function AboutPage({ setPage }) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>About</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, margin: "0 0 16px", letterSpacing: "-0.03em" }}>GraceMoment 소개</h1>
        <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
          교회 공동체의 소중한 순간들을 사랑으로 담아드리는 전문 사진 서비스입니다.
        </p>
      </div>

      {/* 미션 */}
      <div style={{ ...S.card, background: `linear-gradient(135deg, ${C.goldLight}, ${C.warm})`, marginBottom: 24, textAlign: "center", padding: "48px" }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>✦</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 16px" }}>우리의 미션</h2>
        <p style={{ color: C.muted, lineHeight: 1.9, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
          "은혜로운 순간은 사라지지 않습니다."<br />
          교회의 모든 예배와 행사 속 하나님의 역사하심을 사진으로 기록하여, 성도 한 분 한 분의 마음 속에 영원히 남을 수 있도록 합니다.
        </p>
      </div>

      {/* 특징 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
        {[
          { icon: "📷", title: "전문 장비", desc: "풀프레임 미러리스 카메라와 전문 조명 장비로 어떤 환경에서도 선명하고 아름다운 사진을 촬영합니다." },
          { icon: "⛪", title: "교회 전문", desc: "수백 회의 교회 행사 촬영 경험으로 예배 흐름을 방해하지 않으면서 소중한 순간을 포착합니다." },
          { icon: "🚀", title: "빠른 전달", desc: "행사 종료 후 72시간 이내에 보정 완료된 사진을 앨범으로 전달해드립니다." },
          { icon: "🔒", title: "안전한 보관", desc: "촬영된 모든 사진은 클라우드에 안전하게 보관되며 1년간 재다운로드가 가능합니다." },
        ].map(f => (
          <div key={f.title} style={S.card}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</div>
            <p style={{ color: C.muted, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* 요금 안내 */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>요금 안내</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { plan: "Basic", price: "150,000", hours: "2시간", photos: "사진 100장+", color: C.border },
            { plan: "Standard", price: "280,000", hours: "4시간", photos: "사진 250장+", color: C.gold },
            { plan: "Premium", price: "480,000", hours: "종일 (8시간)", photos: "사진 무제한", color: C.ink },
          ].map(p => (
            <div key={p.plan} style={{ ...S.card, textAlign: "center", border: p.plan === "Standard" ? `2px solid ${C.gold}` : `1px solid ${C.border}`, position: "relative" }}>
              {p.plan === "Standard" && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: C.gold, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 10 }}>인기</div>}
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{p.plan}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: C.gold, margin: "8px 0" }}>{p.price}<span style={{ fontSize: 14, fontWeight: 500, color: C.muted }}>원~</span></div>
              <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>{p.hours}<br />{p.photos}<br />보정 포함</div>
            </div>
          ))}
        </div>
        <p style={{ color: C.muted, fontSize: 13, marginTop: 12, textAlign: "center" }}>※ 이동 거리, 참석 인원, 행사 특성에 따라 요금이 달라질 수 있습니다. 정확한 견적은 문의해주세요.</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <button style={{ ...S.btn, padding: "14px 40px", fontSize: 16 }} onClick={() => setPage("request")}>촬영 신청하기 →</button>
      </div>
    </div>
  );
}

// ── 사진 다운로드 페이지 ───────────────────────────────────────────────
function DownloadPage({ setPage }) {
  const [tab, setTab] = useState("album");
  const [search, setSearch] = useState("");

  const albums = [
    { id: 1, title: "2025 부활절 예배", church: "○○교회", date: "2025.04.20", count: 342, cover: "🌸" },
    { id: 2, title: "청년부 수련회", church: "△△교회", date: "2025.03.15", count: 218, cover: "⛺" },
    { id: 3, title: "성탄절 행사", church: "□□교회", date: "2024.12.25", count: 189, cover: "🎄" },
    { id: 4, title: "임직식 예배", church: "○○교회", date: "2024.11.10", count: 156, cover: "🙏" },
  ];

  const filtered = albums.filter(a => a.title.includes(search) || a.church.includes(search));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Gallery</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 12px", letterSpacing: "-0.03em" }}>사진 다운로드</h1>
        <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>행사명 또는 교회명으로 앨범을 찾아보세요</p>
      </div>

      {/* 탭 */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32, backgroundColor: C.soft, borderRadius: 12, padding: 6, width: "fit-content", margin: "0 auto 32px" }}>
        {[{ id: "album", label: "📁 앨범으로 찾기" }, { id: "face", label: "🔍 얼굴로 찾기" }].map(t => (
          <button key={t.id} onClick={() => t.id === "face" ? setPage("face") : setTab(t.id)}
            style={{ border: "none", backgroundColor: tab === t.id ? C.surface : "transparent", color: tab === t.id ? C.gold : C.muted, borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: tab === t.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* 검색 */}
      <div style={{ position: "relative", marginBottom: 32 }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.muted }}>🔎</span>
        <input style={{ ...S.input, paddingLeft: 40 }} placeholder="교회명 또는 행사명으로 검색" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* 앨범 목록 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {filtered.map(a => (
          <div key={a.id} style={{ ...S.card, cursor: "pointer", padding: "20px" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,144,26,0.15)"; e.currentTarget.style.borderColor = C.gold; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = C.border; }}>
            <div style={{ fontSize: 40, textAlign: "center", marginBottom: 12, backgroundColor: C.warm, borderRadius: 10, padding: "16px" }}>{a.cover}</div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{a.title}</div>
            <div style={{ color: C.muted, fontSize: 12, marginBottom: 8 }}>{a.church} · {a.date}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ backgroundColor: C.goldLight, color: C.gold, fontSize: 12, fontWeight: 600, padding: "3px 8px", borderRadius: 6 }}>📷 {a.count}장</span>
              <button style={{ ...S.btn, padding: "6px 14px", fontSize: 12 }}>열기</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px", color: C.muted }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>검색 결과가 없습니다</div>
          <div style={{ fontSize: 13 }}>교회명 또는 행사명을 다시 확인해주세요</div>
        </div>
      )}

      <div style={{ marginTop: 40, ...S.card, backgroundColor: C.warm, textAlign: "center" }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>앨범을 찾지 못하셨나요?</div>
        <p style={{ color: C.muted, fontSize: 14, marginBottom: 16 }}>촬영 후 72시간 이내에 앨범이 업로드됩니다. 아직 업로드 전이거나 교회명이 다를 수 있어요.</p>
        <button style={S.btnOutline} onClick={() => setPage("request")}>문의하기</button>
      </div>
    </div>
  );
}

// ── 얼굴 인식 페이지 ───────────────────────────────────────────────────
function FacePage() {
  const [step, setStep] = useState("intro"); // intro | consent | upload | result
  const [agreed, setAgreed] = useState(false);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSearch = () => {
    if (!preview) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("result"); }, 2000);
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Face Search</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 12px", letterSpacing: "-0.03em" }}>얼굴로 사진 찾기</h1>
        <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>내 얼굴이 나온 사진만 골라드려요</p>
      </div>

      {step === "intro" && (
        <div>
          <div style={{ ...S.card, marginBottom: 20 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 17 }}>🔍 이런 분께 유용해요</h3>
            {["사진이 너무 많아서 내가 나온 사진 찾기가 힘드신 분", "가족이 나온 사진만 따로 모아서 저장하고 싶은 분", "단체 행사에서 특정 인물의 사진을 빠르게 찾고 싶은 분"].map(t => (
              <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ color: C.gold, flexShrink: 0 }}>✦</span>
                <span style={{ color: C.muted, fontSize: 14, lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>

          <div style={{ ...S.card, backgroundColor: "#FFF8F0", border: `1px solid #FDDCAA`, marginBottom: 32 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, color: "#B45309" }}>⚠️ 개인정보 안내</h3>
            <p style={{ color: "#92400E", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
              얼굴 이미지는 사진 검색 목적으로만 사용되며, 검색 완료 후 즉시 삭제됩니다. 제3자에게 제공되거나 별도 저장되지 않습니다. 서비스 이용 시 본 내용에 동의한 것으로 간주됩니다.
            </p>
          </div>

          <button style={{ ...S.btn, width: "100%", padding: "14px" }} onClick={() => setStep("upload")}>
            동의하고 사진 업로드하기
          </button>
        </div>
      )}

      {step === "upload" && (
        <div>
          <div style={{ ...S.card, textAlign: "center", marginBottom: 20 }}>
            {!preview ? (
              <label style={{ cursor: "pointer", display: "block" }}>
                <div style={{ border: `2px dashed ${C.border}`, borderRadius: 12, padding: "48px 24px", backgroundColor: C.warm }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🤳</div>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>얼굴 사진 업로드</div>
                  <div style={{ color: C.muted, fontSize: 13 }}>본인 얼굴이 잘 보이는 사진을 올려주세요<br />JPG, PNG 형식 지원</div>
                </div>
                <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
              </label>
            ) : (
              <div>
                <img src={preview} alt="업로드된 얼굴" style={{ width: 160, height: 160, objectFit: "cover", borderRadius: "50%", border: `4px solid ${C.gold}`, marginBottom: 16 }} />
                <div style={{ fontWeight: 600, marginBottom: 16 }}>사진이 업로드되었어요</div>
                <label style={{ ...S.btnGhost, cursor: "pointer", display: "inline-block" }}>
                  다시 선택
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />
                </label>
              </div>
            )}
          </div>

          {preview && (
            <button style={{ ...S.btn, width: "100%", padding: "14px" }} onClick={handleSearch} disabled={loading}>
              {loading ? "🔍 사진 검색 중..." : "내 사진 찾기"}
            </button>
          )}
        </div>
      )}

      {step === "result" && (
        <div>
          <div style={{ ...S.card, textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🎉</div>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>내가 나온 사진을 찾았어요!</div>
            <div style={{ color: C.muted, fontSize: 14 }}>총 <strong style={{ color: C.gold }}>23장</strong>의 사진에서 발견되었습니다</div>
          </div>

          {/* 샘플 결과 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 24 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ aspectRatio: "1", backgroundColor: C.warm, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, border: `1px solid ${C.border}` }}>📷</div>
            ))}
          </div>

          <button style={{ ...S.btn, width: "100%", padding: "14px", marginBottom: 12 }}>전체 23장 다운로드</button>
          <button style={{ ...S.btnGhost, width: "100%", padding: "14px" }} onClick={() => setStep("upload")}>다시 검색하기</button>
        </div>
      )}
    </div>
  );
}

// ── 촬영 신청 페이지 ───────────────────────────────────────────────────
function RequestPage() {
  const [form, setForm] = useState({
    church: "", name: "", phone: "", email: "",
    event: "", eventDate: "", attendees: "", location: "",
    duration: "", details: "", budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const setF = (f, v) => setForm(p => ({ ...p, [f]: v }));

  const handleSubmit = () => {
    if (!form.church || !form.name || !form.phone || !form.event) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>🙏</div>
        <h2 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 16px", letterSpacing: "-0.03em" }}>신청이 완료되었습니다</h2>
        <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: 8 }}>
          <strong>{form.church}</strong> <strong>{form.name}</strong>님, 촬영 신청해주셔서 감사합니다.
        </p>
        <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: 32 }}>
          영업일 기준 1~2일 이내에 <strong>{form.phone}</strong>으로 연락드리겠습니다.
        </p>
        <button style={S.btn} onClick={() => setSubmitted(false)}>새 신청서 작성</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Request</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 12px", letterSpacing: "-0.03em" }}>촬영 신청</h1>
        <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>아래 내용을 작성해주시면 빠르게 연락드리겠습니다</p>
      </div>

      <div style={{ ...S.card }}>
        {/* 교회/담당자 정보 */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.ink, marginBottom: 20, paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ backgroundColor: C.goldLight, color: C.gold, borderRadius: "50%", width: 26, height: 26, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800 }}>1</span>
            교회 및 담당자 정보
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={S.label}>교회 이름 *</label>
              <input style={S.input} value={form.church} onChange={e => setF("church", e.target.value)} placeholder="○○교회" />
            </div>
            <div>
              <label style={S.label}>담당자 이름 *</label>
              <input style={S.input} value={form.name} onChange={e => setF("name", e.target.value)} placeholder="홍길동" />
            </div>
            <div>
              <label style={S.label}>연락처 *</label>
              <input style={S.input} value={form.phone} onChange={e => setF("phone", e.target.value)} placeholder="010-0000-0000" />
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={S.label}>이메일</label>
              <input style={S.input} value={form.email} onChange={e => setF("email", e.target.value)} placeholder="email@church.com" />
            </div>
          </div>
        </div>

        {/* 행사 정보 */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.ink, marginBottom: 20, paddingBottom: 12, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ backgroundColor: C.goldLight, color: C.gold, borderRadius: "50%", width: 26, height: 26, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800 }}>2</span>
            행사 정보
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={S.label}>행사명 *</label>
              <input style={S.input} value={form.event} onChange={e => setF("event", e.target.value)} placeholder="예) 2025 부활절 예배" />
            </div>
            <div>
              <label style={S.label}>행사 날짜</label>
              <input style={S.input} type="date" value={form.eventDate} onChange={e => setF("eventDate", e.target.value)} />
            </div>
            <div>
              <label style={S.label}>예상 참석 인원</label>
              <input style={S.input} value={form.attendees} onChange={e => setF("attendees", e.target.value)} placeholder="예) 약 150명" />
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={S.label}>행사 장소</label>
              <input style={S.input} value={form.location} onChange={e => setF("location", e.target.value)} placeholder="교회 주소 또는 장소명" />
            </div>
            <div>
              <label style={S.label}>촬영 시간</label>
              <select style={{ ...S.input, cursor: "pointer" }} value={form.duration} onChange={e => setF("duration", e.target.value)}>
                <option value="">선택해주세요</option>
                <option>2시간 이내</option>
                <option>2~4시간</option>
                <option>4~6시간</option>
                <option>종일 (6시간+)</option>
              </select>
            </div>
            <div>
              <label style={S.label}>예산 범위</label>
              <select style={{ ...S.input, cursor: "pointer" }} value={form.budget} onChange={e => setF("budget", e.target.value)}>
                <option value="">선택해주세요</option>
                <option>15만원 이하</option>
                <option>15~30만원</option>
                <option>30~50만원</option>
                <option>50만원 이상</option>
                <option>협의 가능</option>
              </select>
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={S.label}>추가 요청 사항</label>
              <textarea style={{ ...S.textarea, minHeight: 100 }} value={form.details} onChange={e => setF("details", e.target.value)} placeholder="특별히 촬영을 원하시는 순간, 주의사항, 기타 문의 사항을 자유롭게 적어주세요." />
            </div>
          </div>
        </div>

        <button style={{ ...S.btn, width: "100%", padding: "15px", fontSize: 16 }} onClick={handleSubmit}>
          촬영 신청서 제출하기 🙏
        </button>
        <p style={{ color: C.muted, fontSize: 12, textAlign: "center", marginTop: 12 }}>
          * 표시 항목은 필수입니다. 영업일 1~2일 내 연락드립니다.
        </p>
      </div>
    </div>
  );
}

// ── 앱 루트 ────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "about": return <AboutPage setPage={setPage} />;
      case "download": return <DownloadPage setPage={setPage} />;
      case "face": return <FacePage />;
      case "request": return <RequestPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={S.page}>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
}
