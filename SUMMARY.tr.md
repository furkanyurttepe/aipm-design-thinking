# Proje Özeti — Claude Code ile Design Thinking

🇬🇧 [English version](SUMMARY.en.md)

> **Not:** Bu projedeki tüm kullanıcı kanıtları (görüşmeler, gözlemler,
> testler) bir eğitim alıştırması için **yapay zekâ tarafından simüle
> edilmiştir** ve bu şekilde etiketlenmiştir.

## 1. Bu repo ne öğretiyor?

Design Thinking'i ürün keşfi için kullanmayı ve Claude Code'u bir **AI Project
Manager** olarak yönlendirmeyi anlatan Markdown tabanlı bir öğrenme yolu:
çıktıları Claude üretir; kanıt ve kararlar insanın sorumluluğundadır.

| Modül | Konu |
|---|---|
| 01 | Tasarım süreçleri neden var; Design Thinking, Double Diamond ve design sprint farkı |
| 02 | Kanıtla empati: kanıt kaydı, persona, kullanıcı yolculuk haritası |
| 03 | Tanımla ve fikir üret: problem tanımı, POV, How Might We, fikir seçimi |
| 04 | Prototiple, test et, iterasyon yap: detay düzeyi, tarafsız test görevi, kanıta dayalı değişiklik |
| 05 | Claude Code Skill'leri (yeniden kullanılabilir yöntem) ve subagent'lar (bağımsız denetçiler) |
| 06 | Workshop rehberi: tam bir döngü, zorunlu çıktılar, isteğe bağlı uzantılar |

## 2. Seçilen problem

**Yeni bir şehre taşınmış müzik severler, müzik hakkında konuşabilecekleri
insanlarla tanışmak istiyor.** Odak: bir müzik etkinliğinde ya da hemen
sonrasında, müzik üzerine bir sohbeti başlatmalarına — ve sürdürmelerine —
yardım etmek.

## 3. Adım adım ne yaptık?

1. **Tekrar soruları (01–05. modüller)** tek tek cevaplandı; ayrıca bir
   alıştırma yolculuk haritası çizildi → `practice-journey-map.md`.
2. **Çerçeveleme:** problem seçildi ve odak daraltıldı.
3. **Kanıt:** 8 simüle görüşme ve 2 simüle gözlem → `discovery.md`.
4. **Claude Code'un yapılandırılması:** bir Design Thinking Skill'i ve iki
   salt okunur subagent (kanıt denetçisi, prototip inceleyici) → `.claude/`.
5. **Sentez:** kanıt kümeleri, persona, yolculuk haritası, POV ve HMW; kanıt
   denetçisi yanlış atıfları ve çözüm sızıntısını buldu; AI PM her bulguyu
   kabul etti, düzenledi ya da reddetti.
6. **Fikir üretme:** 8 fikir kullanıcı değeri, öğrenme değeri,
   uygulanabilirlik ve risk açısından puanlandı; AI PM kendi fikrini ekledi
   ve **Jam Prompt Cards**'ı seçti → `decision-log.md`.
7. **Prototip:** jam kartlarından oluşan bir web destesi — soluk klasik
   iskambil kartları üzerinde rastgele tür, ton, akorlar, gitar strumming'iyle
   ritim, tema ve açılış satırı; arka yüzde bir soru; her 8 kartta bir Break
   jokeri.
8. **İnceleme ve test:** iki prototip incelemesi, ardından kartsız bir
   karşılaştırma setiyle simüle bir jam testi → `test-notes.md`.
9. **İterasyon:** kartlarda müzik soruları, Break'te kişisel sorular; zor
   türler daha seyrek dağıtılıyor.

## 4. İsteğe bağlı uzantılar (8'in tamamı)

Gerçek hatalardan sonra Skill ve denetçi iyileştirildi · ikinci test yapıldı ·
gruplar arası inceleme (tek kişiye uyarlanmış, yapay zekâ akranıyla) · ev
sahibi tanıştırması alternatifi incelendi · erişilebilirlik düzeltmeleri ·
çevrimdışı yedek görünüm · karar özeti → `extensions.md`.

## 5. Prototip

`prototype/index.html` dosyasını tarayıcıda açın. Yeni kart için **♫ Jam**'e
basın, kartı çevirmek için üzerine dokunun, oturumdan sonra **Export session
log** ile kaydı indirin. Kart görselleri ve el yazısı fontu internetten
yüklenir.

## 6. AI PM'in önemli kararları ve düzeltmeleri

- HMW, "ortak müzik zevki" varsayımından uzaklaştırılarak yeniden yazıldı.
- Claude'un eklediği görsel ipuçları (kıvrık köşe, ↻ simgesi) ve Undo düğmesi
  kaldırıldı.
- Karar özetinde kanıttan daha emin konuşan iki cümle yeniden yazıldı.
- Bilinen ödünleşimler: kartın çevrilebildiğine dair ipucu yok; geri alma
  yok; internet gerekiyor.

## 7. Sınırlamalar

Tüm kanıtlar simüle; dinleyiciler test edilmedi; sohbetlerin etkinlikten
sonra sürüp sürmediği bilinmiyor.

## 8. Dosya haritası

| Dosya | İçerik |
|---|---|
| `discovery.md` | Kanıt, persona, yolculuk haritası, POV, HMW, denetim kararları |
| `decision-log.md` | Fikirler, kriterler, seçim, prototip sürümleri, inceleme kararları, test planı |
| `test-notes.md` | İki simüle test, yorumlar, onaylanan iterasyon |
| `extensions.md` | 8 isteğe bağlı uzantı ve karar özeti |
| `ai-collaboration-log.md` | Final denetimi, iş birliği kaydı, değerlendirme (reflection) |
| `prototype/index.html` | Jam Prompt Cards prototipi |
| `.claude/` | Design Thinking Skill'i ve iki subagent |

## 9. Sonraki adım

Gerçek kişilerle iki jam akşamı: ev sahibi Break jokerini dağıtır ve bu
sırada bir tanıştırma yapar; sonuç yalnızca kartların kullanıldığı durumla
karşılaştırılır.
