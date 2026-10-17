# Proje Özeti — Claude Code ile Design Thinking

🇬🇧 [English version](SUMMARY.en.md)

> **Not:** Bu projedeki tüm kullanıcı kanıtları (görüşmeler, gözlemler,
> testler) bir eğitim alıştırması için **yapay zekâ tarafından simüle
> edilmiştir** ve bu şekilde etiketlenmiştir.

Her adım için **ne yaptık** ve **neden yaptık** kısaca anlatılıyor.

## Bu repo ne öğretiyor?

Design Thinking'i ürün keşfi için kullanmayı ve Claude Code'u bir **AI Project
Manager** olarak yönlendirmeyi. Çıktıları Claude üretir; kanıt ve kararlar
insanın sorumluluğundadır.

| Modül | Konu |
|---|---|
| 01 | Tasarım süreçleri; Design Thinking, Double Diamond ve design sprint farkı |
| 02 | Kanıtla empati: kanıt kaydı, persona, kullanıcı yolculuk haritası |
| 03 | Tanımla ve fikir üret: problem tanımı, POV, How Might We, fikir seçimi |
| 04 | Prototiple, test et, iterasyon yap |
| 05 | Claude Code Skill'leri ve subagent'lar |
| 06 | Workshop rehberi: tam bir döngü, zorunlu çıktılar, isteğe bağlı uzantılar |

---

## A. Kursu öğrenmek

### 1. Repoyu inceledik
- **Ne:** Bütün dosyaları okuyup projenin amacını çıkardık.
- **Neden:** İlk beklenti bir veri bilimi projesiydi; aslında bunun bir Design
  Thinking ve Claude Code dersi olduğunu görmek, doğru işe başlamak için şarttı.

### 2. Tekrar sorularını cevapladık (Modül 01–05)
- **Ne:** Her modülün "Check Your Understanding" sorularını tek tek
  cevapladık ve düzelttik.
- **Neden:** Proje adımlarında kullanacağımız kavramları (kanıt ve varsayım
  farkı, persona, HMW, prototip detay düzeyi, Skill ve subagent) önce
  oturtmak için.

### 3. Alıştırma yolculuk haritası çizdik
- **Ne:** Yeni şehre taşınmış müzik severlerin akşamını 5 aşamada haritaladık
  → `practice-journey-map.md`
- **Neden:** Modül 02'nin alıştırması. Her satırın **varsayım** olduğunu
  görmek, gerçek kanıt toplamanın neden gerekli olduğunu gösterdi.

---

## B. Ana proje: Design Thinking döngüsü

### 4. Problemi seçtik ve çerçeveledik
- **Ne:** Odak: yeni gelenlerin **müzik hakkında konuşabileceği birini
  bulması**; tek bir yolculuk ve bir prototip kapsamı.
- **Neden:** Handout, küçük ve test edilebilir tek bir yolculuk istiyor. Geniş
  bir problem tek bir prototiple öğrenilemez.

### 5. Kanıtı kaydettik
- **Ne:** 8 görüşme notu ve 2 gözlem → `discovery.md`. Kanıtın **simüle**
  edilmesine karar verildi ve her yerde etiketlendi.
- **Neden:** Modül 02'nin kuralı: sentezden önce ham kanıt. Gerçek kişilere
  ulaşma süresi olmadığı için simülasyon seçildi; etiket, bunun gerçek
  araştırma sanılmasını önlüyor.

### 6. Claude Code'u yapılandırdık (Skill ve 2 subagent)
- **Ne:** `design-thinking` Skill'i, `evidence-auditor` ve
  `prototype-reviewer` subagent'ları → `.claude/`
- **Neden:** Skill, yöntemi (kanıt kuralları, onay kapıları) her seferinde
  aynı uygulatır. Subagent'lar, işi yazan sohbetten **bağımsız** bir gözle
  denetler — tıpkı bir dış denetçi gibi.

### 7. Sentez yaptık ve denetlettik
- **Ne:** Kanıt kümeleri, persona, yolculuk haritası, POV ve HMW yazıldı;
  kanıt denetçisi 8 bulgu verdi, AI PM her birini kabul etti, düzenledi ya
  da reddetti.
- **Neden:** Kanıt, ilk varsayımı değiştirdi (asıl sorun eşlikçi bulmak
  değil, sohbetin başlamaması). Denetim, Claude'un yanlış atıflarını ve
  HMW'deki gizli çözümü ("ortak zevk") yakaladı.

### 8. Fikir ürettik ve seçtik
- **Ne:** 8 fikir kullanıcı değeri, öğrenme değeri, uygulanabilirlik ve
  riske göre puanlandı; AI PM kendi fikrini (jam doğaçlama kartları) ekledi
  ve **Jam Prompt Cards**'ı seçti → `decision-log.md`
- **Neden:** Modül 03: önce çok fikir, sonra açık kriterlerle seçim. Uygulama
  fikri, öğrenme değeri düşük olduğu için reddedildi.

### 9. Prototip yaptık
- **Ne:** Soluk klasik iskambil kartları üzerinde el yazısıyla rastgele jam
  yönlendirmeleri; arka yüzde sohbet sorusu; her 8 kartta bir Break jokeri
  → `prototype/index.html`
- **Neden:** Öğrenme sorusu şuydu: *"Arka yüzdeki soru, çaldıktan sonra
  sohbeti başlatıyor mu?"* Prototip bu soruyu test edecek kadar basit
  tutuldu.

### 10. İnceledik ve test ettik
- **Ne:** Prototip iki kez incelendi; ardından kartsız bir karşılaştırma
  setiyle simüle bir jam testi yapıldı → `test-notes.md`
- **Neden:** Handout, testten önce inceleme istiyor. Karşılaştırma seti,
  sohbetin kartlar sayesinde mi başladığını anlamayı sağlıyor.

### 11. Kanıta dayalı iterasyon yaptık
- **Ne:** Müzik soruları kartlara, kişisel sorular Break kartına taşındı;
  zor türler daha seyrek geliyor.
- **Neden:** Testte müzik soruları daha uzun sohbet açtı, zor türler ise
  atlandı. Her değişiklik bir gözleme bağlandı.

---

## C. İsteğe bağlı uzantılar (8/8) → `extensions.md`

| # | Ne yaptık | Neden |
|---|---|---|
| 1 | Skill'e iki kural ekledik | Claude yanlış atıf yapmış ve gözlem tablosuna yorum yazmıştı |
| 2 | Denetçinin kapsamını genişlettik | Test notlarındaki hatayı hiçbir subagent görmemişti |
| 3 | İkinci test | İlk iterasyonun işe yarayıp yaramadığını görmek |
| 4 | Akran incelemesi (yapay zekâ, tek kişiye uyarlanmış) | Taze bir göz, oturum kaydının sohbeti ölçmediğini fark etti |
| 5 | Alternatif fikir (ev sahibi tanıştırması) | Reddedilen fikrin kanıtı aslında daha güçlüydü |
| 6 | Erişilebilirlik | Loş ışıkta okunurluk, küçük telefonlar, ekran okuyucu |
| 7 | İnternetsiz kurtarma | Mekânda internet yoksa kartlar yine okunabilsin |
| 8 | Karar özeti | Ürün incelemesi için; kanıttan fazla emin iki cümle düzeltildi |

---

## D. Kapanış

### 12. Final denetim ve değerlendirme
- **Ne:** Dosyalar, kanıt, varsayımlar, riskler ve 5 reflection sorusu
  → `ai-collaboration-log.md`
- **Neden:** Handout'un "Done Means" listesi bunu istiyor; AI PM'in Claude'u
  düzelttiği 5 örnek de burada kayıtlı.

### 13. Özet sayfaları ve GitHub
- **Ne:** Türkçe ve İngilizce özetler; git ile add → commit → push.
- **Neden:** Projeyi teslim edilebilir ve başkalarının anlayabileceği hâle
  getirmek.

---

## E. Kurstan sonra yapılanlar

### 14. Toolkit reposu
- **Ne:** Skill ve subagent'ların kopyası ve açıklamalı bir plugin, Skill ve
  subagent kaynak listesi → ayrı repo `claude-skills-subagents-plugins`
- **Neden:** Bu araçları başka projelerde de kullanabilmek.

### 15. Prototip v12
- **Ne:** 24 tonun hepsi (kolay tonlar daha sık), müzik teorisine uygun akor
  yazımı, Roma rakamları, Break'te "Let your fingers down."
- **Neden:** Daha fazla çeşitlilik ve müzisyenler için daha doğru bilgi.

### 16. Card Session uygulaması → `app/`
- **Ne:** Telefona kurulabilen, internetsiz çalışan bir uygulama: Group Jam
  (kodla katılım, simüle sunucu, müzisyen sayısı), Single Play, metronom,
  aksak ritimler (9/8, 7/8, 5/8), 5/4 blues, retro görünüm, geri düğmesi;
  adı **Card Session — jam prompts for musicians**.
- **Neden:** Gerçek bir jam akşamında test edebilmek için telefonda
  kullanılabilir bir sürüm gerekiyordu.
- **Dikkat:** Bu özellikler **gerçek kullanıcıyla doğrulanmadan** eklendi;
  Group Jam henüz farklı telefonları bağlamıyor.

### 17. Mağaza notları → `app/STORE-NOTES.md`
- **Ne:** App Store ve Google Play adımları, ücretler, gizlilik, isim
  kontrolü, gelir seçenekleri.
- **Neden:** Mağazaya çıkmadan önce neyin gerektiğini ve önce gerçek
  kullanıcı testi yapılması gerektiğini kayda geçirmek.

---

## Sınırlamalar

Tüm kanıtlar simüle; dinleyiciler test edilmedi; sohbetin etkinlikten sonra
sürüp sürmediği bilinmiyor; kurstan sonra eklenen özellikler doğrulanmadı.

## Sonraki adım

Gerçek kişilerle iki jam akşamı: ev sahibi Break kartını dağıtır ve bu sırada
bir tanıştırma yapar; sonuç yalnızca kartların kullanıldığı durumla
karşılaştırılır.

## Dosya haritası

| Dosya | İçerik |
|---|---|
| `discovery.md` | Kanıt, persona, yolculuk haritası, POV, HMW, denetim kararları |
| `decision-log.md` | Fikirler, seçim, prototip ve uygulama sürümleri, inceleme kararları |
| `test-notes.md` | İki simüle test, yorumlar, iterasyon |
| `extensions.md` | 8 isteğe bağlı uzantı ve karar özeti |
| `ai-collaboration-log.md` | Final denetim, iş birliği kaydı, değerlendirme |
| `prototype/index.html` | Kurs prototipi |
| `app/` | Card Session uygulaması ve mağaza notları |
| `.claude/` | Design Thinking Skill'i ve iki subagent |
