
import SacEkimi from "./assets/sac-ekimi.png";
import SacTedavisi from "./assets/sac-tedavisi.jpg";
import BurunEstetigi from "./assets/burun-logosu-vektoru_535345-2468.avif";
import BoobsAsthetic from "./assets/meme-estetigi.jpg";
import PlasticSurgery from "./assets/plastic-surgery-icon-beauty-procedure-260nw-2583158219.webp";
import DentalAsthetic from "./assets/dis-estetigi.png";
import BrancesIstanbul from "./assets/sube1.jpg";
import BrancesSamsun from "./assets/sube2.jpg";
import BrancesIzmir from "./assets/sube3.jpg";
import BrancesEskisehir from "./assets/sube1.jpg";



export const services = [
  {
    id: "1",
    name: "Saç Ekimi",
    image: SacEkimi,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">Saç Ekimi</h1>
        <p>
          Saç ekimi, saç dökülmesiyle mücadele edenler için uzun vadeli çözümler
          sunan bir cerrahi işlemdir. Bu işlemde, hastanın kendi saç kökleri
          genellikle arka kafa derisinden alınarak seyrek veya kel bölgelere
          ekilir.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">
          Saç Ekimi Nasıl Yapılır?
        </h2>
        <p>
          Saç ekimi operasyonu; greft toplama, kanal açma ve greft ekimi olmak
          üzere üç aşamada gerçekleşir. Günümüzde robotik saç cerrahisi, safir
          FUE, DHI gibi farklı teknikler bulunmaktadır.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">
          DHI ve FUE Tekniklerinden Hangisini Seçmeliyim?
        </h2>
        <p>
          DHI yöntemi dar ve seyrek alanlarda tercih edilirken geniş alanlarda
          genellikle FUE uygulanır. Uygun yöntem uzman hekim tarafından
          belirlenmelidir.
        </p>
        <p>
          Saç ekimi fiyatları; kullanılan teknik, greft sayısı ve doktor
          deneyimine göre değişiklik gösterebilir.
        </p>
        <p className="font-medium">
          Detaylı bilgi için formu doldurup uzmanlarımızla iletişime geçebilirsiniz.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    name: "Saç Tedavileri",
    image: SacTedavisi,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">Saç Tedavileri</h1>
        <p>
          Saç tedavileri, saçların daha sağlıklı ve güçlü bir yapıya kavuşması
          için uygulanan profesyonel yöntemlerdir. Yaş, stres ve genetik
          faktörler saç dökülmesine neden olabilir.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">
          Popüler Saç Tedavileri
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Growth Factor Tedavisi</li>
          <li>Saç Lazer Tedavisi</li>
          <li>Eksozom Saç Tedavisi</li>
          <li>Saç Mezoterapisi</li>
        </ul>
        <p>
          Bu tedaviler saç köklerini güçlendirerek daha parlak ve yoğun saçlara
          sahip olmayı sağlar.
        </p>
        <p className="font-medium">
          Saç tedavileri hakkında detaylı bilgi için uzman danışmanlarımız ile
          iletişime geçebilirsiniz.
        </p>
      </div>
    ),
  },
  {
    id: "3",
    name: "Burun Estetiği",
    image: BurunEstetigi,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">
          Burun Estetiği (Rinoplasti)
        </h1>
        <p>
          Burun estetiği; görünüm kaygıları veya nefes alma problemleri
          nedeniyle yapılan cerrahi bir işlemdir. Estetik ve fonksiyonel
          amaçları birlikte karşılayabilir.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">
          Kimler Rinoplasti Yaptırabilir?
        </h2>
        <p>
          Gelişim çağını tamamlamış ve sağlık açısından uygun bireyler burun
          estetiği yaptırabilir.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">Ameliyat Süreci</h2>
        <p>
          Genel anestezi altında kapalı veya açık teknikle yapılır. Operasyon
          sonrası hafif şişlik ve morluklar oluşabilir.
        </p>
        <p>
          Tam iyileşme süreci kişiden kişiye değişmekle birlikte genellikle 3–6
          ay sürer.
        </p>
      </div>
    ),
  },
  {
    id: "4",
    name: "Meme Estetiği",
    image: BoobsAsthetic,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">Meme Estetiği</h1>
        <p>
          Meme estetiği; küçültme, büyütme, dikleştirme ve rekonstrüksiyon gibi
          farklı operasyonları kapsar. Hem estetik görünüm hem de fiziksel
          rahatlık sağlar.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">Meme Küçültme</h2>
        <p>
          Aşırı büyük memeler sırt ve omuz ağrılarına yol açabilir. Meme
          küçültme ameliyatı hem sağlık hem estetik amaçlı yapılır.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">Meme Büyütme</h2>
        <p>
          Silikon protez veya yağ transferi ile göğüslere daha dolgun bir
          görünüm kazandırılabilir.
        </p>
      </div>
    ),
  },
  {
    id: "5",
    name: "Plastik Cerrahi",
    image: PlasticSurgery,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">
          Plastik Cerrahi
        </h1>
        <p>
          Plastik cerrahi; estetik görünümü iyileştiren veya doku kaybını onaran
          ameliyatlardan oluşur.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">
          Sık Uygulanan Alanlar
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Meme Estetiği</li>
          <li>Burun Estetiği</li>
          <li>Yüz Estetiği</li>
          <li>Vücut Şekillendirme</li>
          <li>Liposuction</li>
        </ul>
        <p>
          Genetik, travma veya sağlık sorunları nedeniyle ortaya çıkan
          deformiteler plastik cerrahi ile düzeltilebilir.
        </p>
      </div>
    ),
  },
  {
    id: "6",
    name: "Diş Estetiği",
    image: DentalAsthetic,
    description: (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-700">
          Diş Estetiği (Gülüş Tasarımı)
        </h1>
        <p>
          Diş estetiği, daha sağlıklı ve estetik bir gülüş elde etmek için
          uygulanan modern diş tedavilerini içerir.
        </p>
        <h2 className="text-xl font-semibold text-gray-700">Uygulamalar</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Diş İmplantı</li>
          <li>Zirkonyum & Lamine Kaplama</li>
          <li>Diş Beyazlatma</li>
          <li>Dijital Gülüş Tasarımı</li>
        </ul>
        <p>
          Birçok işlem gelişmiş teknolojiler sayesinde tek seansta
          tamamlanabilir.
        </p>
      </div>
    ),
  },
];
export const orderServices = [
  {
    id: 1,
    name: "Saç Ekimi",
    main: [
      "DHI Saç Ekimi",
      "Safir FUE Saç Ekimi",
      "Tıraşsız Saç Ekimi",
      "Sakal – Bıyık Ekimi",
      "Kaş Ekimi",
      "Hibrit Saç Ekimi",
    ],
  },
  {
    id: 2,
    name: "Saç Tedavileri",
    main: [
      "Eksozom Saç Tedavisi",
      "Saç Lazeri",
      "Saç Mezoterapisi",
      "Kadın Saç Tedavisi",
    ],
  },
  {
    id: 3,
    name: "Plastik Cerrahi",
    main: [
      "Burun Estetiği",
      "Meme Estetiği",
      "Yüz Estetiği",
      "Göz Kapağı Estetiği",
      "Vücut Estetiği",
      "Yağ Aldırma",
    ],
  },
  {
    id: 4,
    name: "Diş Estetiği",
    main: [
      "Diş İmplant Tedavisi",
      "Diş Kaplama",
      "Diş Beyazlatma",
      "Gülüş Estetiği",
      "Kanal Tedavisi",
      "Diş Teli Tedavisi",
      "Pedodonti",
    ],
  },
  {
    id: 5,
    name: "Medikal Estetik",
    main: [
      "Medikal Cilt Bakımı",
      "Ozon Tedavisi",
      "Dolgu Uygulamaları",
      "Yüz Mezoterapisi",
      "HIFU",
    ],
  },
  {
    id: 6,
    name: "Lazer Epilasyon",
    main: [
      "Soprano Buz Lazer Epilasyon",
      "Alexandrite Lazer Epilasyon",
      "Diode (Ütüleme Tekniği) Lazer Epilasyon",
      "ND-Yag Lazer Epilasyon",
    ],
  },
  {
    id: 7,
    name: "Bölgesel Zayıflama",
    main: [
      "Schwarzy",
      "Onda Soğuk Dalga Terapisi",
      "LPG Zayıflama",
      "Ultrashape",
      "Selülit Tedavisi",
      "Beslenme ve Diyet Programı",
    ],
  },
  {
    id: 8,
    name: "Podiatri",
    main: [
      "Tırnak Mantarı Tedavisi",
      "Nasır Tedavisi",
      "Batık Tırnak Tedavisi",
      "Diyabetik Ayak Tedavisi",
      "Medikal Ayak Bakımı",
    ],
  },
];
export const brances = [
  {
    id: "1",
    img: BrancesIstanbul,
    name: "Üsküdar XYZ Estetik Şubesi",
    address: "Lorem Sokak No:12, Üsküdar, İstanbul",
  },
  {
    id: "2",
    img: BrancesSamsun,
    name: "Kadıköy XYZ Estetik Şubesi",
    address: "Hayal Caddesi No:45, Kadıköy, İstanbul",
  },
  {
    id: "3",
    img: BrancesIzmir,
    name: "Beşiktaş XYZ Estetik Şubesi",
    address: "Rüya Mahallesi No:7, Beşiktaş, İstanbul",
  },
  {
    id: "4",
    img: BrancesEskisehir,
    name: "Nişantaşı XYZ Estetik Şubesi",
    address: "Sahte Sokak No:23, Nişantaşı, İstanbul",
  },
];
export const faqSection = [
  {
    category: "Saç Tedavileri",
    questions: [
      {
        question: "Saç ekimi ne kadar sürer?",
        answer: "Ortalama 6-8 saat sürer ve aynı gün taburcu olabilirsiniz."
      },
      {
        question: "Saç ekimi acı verir mi?",
        answer: "Lokal anestezi uygulandığı için acı minimal seviyededir."
      },
      {
        question: "Saç ekimi sonrası iyileşme süreci ne kadar?",
        answer: "Kabuklanmalar 10 gün içinde dökülür, saçların çıkması 3. aydan itibaren başlar."
      },
      {
        question: "Saç ekimi herkese yapılabilir mi?",
        answer: "Donör bölgesi uygun olan ve ciddi sağlık sorunu olmayan herkese uygulanabilir."
      },
      {
        question: "Ekilen saçlar dökülür mü?",
        answer: "Ekilen saç kökleri kalıcıdır ve dökülmez, doğal saç gibi ömür boyu uzar."
      }
    ]
  },
  {
    category: "Plastik Cerrahi",
    questions: [
      {
        question: "Burun estetiği iyileşme süresi nedir?",
        answer: "İlk şişlikler 1-2 haftada iner, tam sonuç 6-12 ayda alınır."
      },
      {
        question: "Burun estetiği ameliyatı ağrılı mıdır?",
        answer: "Genellikle ciddi bir ağrı olmaz, hafif bir basınç hissi yaşanabilir."
      },
      {
        question: "Ameliyatsız burun estetiği ne kadar kalıcıdır?",
        answer: "Dolgu işlemi ortalama 12-18 ay kalıcılığa sahiptir."
      },
      {
        question: "Meme estetiği sonrası iyileşme süresi nasıldır?",
        answer: "Günlük yaşama dönüş 3-7 gün içinde olur, tam iyileşme 6 haftayı bulabilir."
      },
      {
        question: "Göz kapağı estetiği kalıcı mıdır?",
        answer: "Alt ve üst göz kapaklarında sonuçlar 10-15 yıl kadar kalıcıdır."
      }
    ]
  },
  {
    category: "Diş Estetiği",
    questions: [
      {
        question: "Zirkonyum kaplama ne kadar dayanıklıdır?",
        answer: "10-15 yıl boyunca dayanıklılığını korur."
      },
      {
        question: "Hollywood gülüşü ne kadar sürer?",
        answer: "Kişiye bağlı olarak 7-10 gün içinde tamamlanır."
      },
      {
        question: "Diş beyazlatma zararlı mıdır?",
        answer: "Uzman tarafından yapıldığında diş minesine zarar vermez."
      },
      {
        question: "İmplant tedavisi ne kadar sürer?",
        answer: "İmplant ve iyileşme süreci toplamda 2-3 ay sürebilir."
      },
      {
        question: "Porselen lamina kimlere uygulanır?",
        answer: "Diş yapısı uygun olan, aralıklı veya renk problemi olan herkese uygulanabilir."
      }
    ]
  },
  {
    category: "Medikal Estetik",
    questions: [
      {
        question: "Botoks etkisi ne kadar sürer?",
        answer: "Ortalama 4-6 ay etkisini korur."
      },
      {
        question: "Dudak dolgusu kalıcılığı ne kadardır?",
        answer: "Kullanılan dolguya göre 8-12 ay arasında değişir."
      },
      {
        question: "Mezoterapi ne işe yarar?",
        answer: "Cildi yeniler, nemlendirir ve ince kırışıklıkları azaltır."
      },
      {
        question: "Lazer epilasyon kalıcı mıdır?",
        answer: "Kişinin yapısına bağlı olarak %80-90 oranında kalıcı sonuç verir."
      },
      {
        question: "Cilt gençleştirme işlemleri acı verir mi?",
        answer: "Çoğu işlem öncesi anestezik krem uygulandığı için acı minimal düzeydedir."
      }
    ]
  }
];
