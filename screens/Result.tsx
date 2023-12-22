import { View, Text,Button,StyleSheet,ImageBackground,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';


type RootStackParamList = {

  Home: undefined;

};
type ResultScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

type ResultScreenProps = {
  route: any
  navigation: ResultScreenNavigationProp;

};



export default function Result({route}:ResultScreenProps) {
  const { days,months } = route.params;

  const zodiac = require('zodiac-signs')('tr');
  const sonuc = zodiac.getSignByDate({ day: days, month: months }, 'tr')
  const background = require('../assets/walpeper2.png');

  let paragraf = '';
  let burcOzellikleri = {
    burcismi:"",
    burcSimgesi:"",
    burcTasi:"",
    ugurluSayisi:"",
    renkler:"",
    element:"",
    nitelikler:"",
    gezegenler:"",
    burcAciklama:"",
    anlastiklari:"",
    anlasamadiklari:"",
    unluler:""

  }
  if (sonuc.name === 'Aries') {
    burcOzellikleri.burcismi = 'Koç Burcu';
    burcOzellikleri.burcSimgesi="♈"
    burcOzellikleri.burcTasi="Elmas"
    burcOzellikleri.ugurluSayisi="1, 9, 18, 27"

    burcOzellikleri.renkler="Kırmızı"
    burcOzellikleri.element="Ateş"
    burcOzellikleri.nitelikler="Kardinal"
    burcOzellikleri.gezegenler="Mars"
    burcOzellikleri.anlastiklari="Aslan ve Yay"
    burcOzellikleri.anlasamadiklari="Boğa,Başak,Oğlak"
    burcOzellikleri.unluler="Lady Gaga,Mariah Carey,Ezgi Mola"
    burcOzellikleri.burcAciklama=`Ateş elementinin etkisi altında olan Koç burcu bireyleri, enerji dolu, tutkulu ve hareketli bir yapıya sahiptir. Cesur ve kararlı karakterleriyle tanınan Koç burcu insanları, liderlik özellikleriyle ön plana çıkar. İçlerindeki hırs ve rekabetçilik onları başarıya yönlendirirken, atılımcı ve girişimci ruhları sayesinde yeni başlangıçlara cesaretle adım atarlar.

      Yönetici gezegenleri Mars olan Koç burcu insanları, enerjileriyle çevrelerine ilham verirler. İçlerindeki ateş, onları harekete geçirir ve zorluklara meydan okumaktan çekinmezler. Hızlı düşünme yetenekleri, ani kararlar alma kabiliyetleri ve kendilerine güvenleri, Koç burcunu dikkate değer kılar. Bağımsızlık ve özgürlük duygusu da Koç burcu insanlarının önemli özelliklerindendir.
      
      Ancak, Koç burcunun belirgin özelliklerinden biri olan sabırsızlık, zaman zaman sorunlara neden olabilir. Aceleci tavırlar, düşüncesizce hareket etme eğilimi ve tahammülsüzlük, Koç burcunun dikkat etmesi gereken noktalardır. Öte yandan, Koç burcu insanları coşkulu ve tutkulu doğalarıyla hayata enerji katarlar. Yeni fikirlere açık olmaları ve risk almaktan çekinmemeleri, onları farklı deneyimlere yönlendirir.
      
      Kısacası, Koç burcu insanları enerjik, cesur, hırslı ve bağımsız bireylerdir. Liderlik özellikleri, atılımcı ruhları ve hızlı düşünme yetenekleriyle dikkat çekerler. Ancak, sabırsızlık ve fevri davranışlar dengeli bir şekilde yönetilmelidir. Koç burcu insanları, hayatta yeni başlangıçlar yapma isteğiyle ön plana çıkar ve tutkulu doğalarıyla her zaman dikkat çekerler.`

  } else if (sonuc.name === 'Leo') {
    burcOzellikleri.burcismi = 'Aslan Burcu';
    burcOzellikleri.burcSimgesi="♌"
    burcOzellikleri.burcTasi="Sarı Safir"
    burcOzellikleri.ugurluSayisi="1, 4, 10, 13, 22"

    burcOzellikleri.renkler="Turuncu"
    burcOzellikleri.element="Ateş"
    burcOzellikleri.nitelikler="Sabit"
    burcOzellikleri.gezegenler="Güneş"
    burcOzellikleri.anlastiklari="Koç ve Yay"
    burcOzellikleri.anlasamadiklari="Yengeç,Akrep,Balık"
    burcOzellikleri.unluler="Madonna,Barack Obama,Murat Dalkılıç"
    burcOzellikleri.burcAciklama=`Aslan burcu, ateş elementinin etkisi altındadır. Bu nedenle Aslan burcu insanları enerjik, tutkulu ve canlı bir yapıya sahiptir. Kendilerini ifade etme konusunda büyük bir yeteneğe sahiptirler ve çevrelerindeki insanları etkileyebilme gücüyle dikkat çekerler. Özgüvenleri yüksektir ve kendilerini önemli hissetmek isterler.

      Aslan burcu insanları, sahip oldukları karizmatik ve etkileyici aura ile dikkat çekerler. Diğer insanlar üzerinde liderlik etme yetenekleri ve doğal liderlik vasıfları vardır. Kendilerini ifade etmekten çekinmezler ve sahneye çıkmaktan keyif alırlar. Drama, sanat ve performans sanatlarına ilgi duyarlar.
      
      Aslan burcu, cömertlik ve cömertlik gösterme eğilimiyle bilinir. Başkalarına yardım etmekten ve sevdiklerini şımartmaktan hoşlanırlar. İyi bir arkadaşlık ve partnerlik ilişkisi kurmak onlar için önemlidir. Sevdikleriyle paylaşım ve sevgi dolu ilişkiler kurmaya önem verirler.
      
      Bununla birlikte, Aslan burcu insanları bazen egolarına yenik düşebilirler. Onlar için önemli olan şey, dikkat çekmek ve takdir edilmektir. Kibirli veya gururlu davranışlar sergileyebilirler. Ayrıca, eleştirilmeye tahammülleri düşük olabilir ve kendi fikirlerine sıkı sıkıya bağlı kalabilirler.
      
      Aslan burcu insanları için özgürlük, bağımsızlık ve yaratıcılık önemlidir. İdealist ve idealize edici bir yapıları vardır. Hayatta başarıya ulaşmak ve önemli bir iz bırakmak için çaba sarf etmek isterler. Kendilerine güvenleri yüksektir ve büyük hedeflere yönelirler.
      
      Kısacası, Aslan burcu insanları enerjik, tutkulu ve kendine güvenen bireylerdir. Doğal liderlik vasıfları ve sahip oldukları karizma ile dikkat çekerler. Cömertlikleri ve sevdiklerine duydukları özen, ilişkilerinde önemli bir rol oynar. Ancak, egolarına dikkat etmeleri ve eleştirilere açık olmaları gerekmektedir.`
  }
  else if (sonuc.name === 'Sagittarius') {
    burcOzellikleri.burcismi = 'Yay Burcu';
    burcOzellikleri.burcSimgesi="♐"
    burcOzellikleri.burcTasi="Turkuaz"
    burcOzellikleri.ugurluSayisi=" 3, 7, 12, 21, 30"
    burcOzellikleri.burcAciklama="Bu burcun insanları genellikle neşeli ve pozitif bir kişilik sergiler. İyimserlikleri ve enerjik tavırlarıyla çevrelerine olumlu bir etki yaparlar. Yay burcu insanları, macerayı seven ve keşfetmeye açık bir yapıya sahiptir. Yeni deneyimlere ve farklı kültürlere olan ilgileriyle tanınırlar. Yeniliklere karşı heyecan duyarlar ve sınırlarını zorlayarak hayatlarının her alanında yeni şeyler keşfetmek isterler. Bağımsızlık da Yay burcu insanlarının önem verdiği bir değerdir. Özgürlüklerine düşkündürler ve kısıtlanma hissi onları rahatsız edebilir. Kendi fikirlerine ve inançlarına güvenen bireylerdir ve kararlarını bağımsız bir şekilde verme eğilimindedirler. Yay burcu insanları sosyal ve iletişimci bir yapıya sahiptirler. İnsanlarla kolaylıkla iletişim kurabilirler ve etrafındaki insanları motive edebilirler. Aynı zamanda cömert ve yardımseverdirler. Başkalarına yardım etmek ve paylaşmak onların doğasında vardır. Ancak Yay burcu insanları aşırı sabırsızlık gösterebilirler ve uzun vadeli planlara odaklanmakta zorlanabilirler. Sabit bir rutine bağlı kalmak yerine esneklik ve özgürlük isterler. Bu nedenle bazen düşüncesizce hareket edebilirler ve sonradan pişmanlık yaşayabilirler. Sonuç olarak, Yay burcu insanları enerjik, iyimser, maceraperest ve sosyal bir kişilik sergilerler. Özgürlüğe önem verirler ve farklı deneyimlere açıktırlar. İletişim becerileri güçlüdür ve başkalarını motive etme yetenekleri vardır. Ancak sabırsızlık ve düşüncesiz hareket etme eğilimleri de bulunabilir."

    burcOzellikleri.renkler="Mor, Mavi"
    burcOzellikleri.element="Ateş"
    burcOzellikleri.nitelikler="Değişken"
    burcOzellikleri.gezegenler="Jüpiter"
    burcOzellikleri.anlastiklari="Koç ve Aslan"
    burcOzellikleri.anlasamadiklari="Yengeç,Akrep,Balık"
    burcOzellikleri.unluler="Brad Pitt,Tina Turner,Hülya Koçyiğit"
    burcOzellikleri.burcAciklama=`Yay burcu, ateş elementinin etkisi altındadır. Bu nedenle Yay burcu insanları enerjik, tutkulu ve hareketli bir yapıya sahiptir. Maceralara atılmaktan ve yeni deneyimler yaşamaktan büyük bir keyif alırlar. Özgürlüklerine düşkündürler ve keşfetme arzusuyla doludurlar.

      Yay burcu insanları, iyimserlikleriyle tanınır. Hayata olumlu bir bakış açısına sahiptirler ve zorluklarla karşılaştıklarında bile umutlarını kaybetmezler. Yay burcu insanları genellikle pozitif enerjileriyle çevrelerini etkiler ve etraflarında olumlu bir atmosfer yaratırlar.
      
      Yay burcu insanları, entelektüel ve felsefi açıdan meraklıdır. Bilgiye açıktırlar ve sürekli olarak yeni şeyler öğrenmek ve keşfetmek isterler. Seyahat etmeyi ve farklı kültürleri deneyimlemeyi severler. Yeni yerler görmek ve farklı insanlarla tanışmak onları heyecanlandırır.
      
      Yay burcu insanları, dürüstlük ve adaleti önemserler. İyi niyetli ve doğal bir şekilde başkalarına yardım etmeye eğilimlidirler. Aynı zamanda, bağımsızlıklarını korumayı ve kendi fikirlerini ifade etmeyi önemserler. Farklı görüşlere saygı duyarlar ve geniş bir perspektife sahiptirler.
      
      Bununla birlikte, Yay burcu insanları bazen sabırsızlık gösterebilirler. Aceleci olabilirler ve sonuçlara daha hızlı ulaşmayı bekleyebilirler. Ayrıca, sınırlamalardan hoşlanmazlar ve rutin işlere karşı biraz direnç gösterebilirler. Özgürlüklerini kısıtlayacak durumları tercih etmezler.
      
      Yay burcu insanları için farklılık ve çeşitlilik önemlidir. Yaratıcılık ve özgünlük, onlar için değerli kavramlardır. Hayatta başarıya ulaşmak için tutkulu bir şekilde çalışırlar ve büyük hedefler peşinde koşarlar. Ancak, bazen disiplin ve odaklanma konusunda zorluk yaşayabilirler.`
  }
  else if (sonuc.name === 'Taurus') {
    burcOzellikleri.burcismi = 'Boğa Burcu';
    burcOzellikleri.burcSimgesi="♉"
    burcOzellikleri.burcTasi="Zümrüt"
    burcOzellikleri.ugurluSayisi="2, 6, 9, 12, 24"

    burcOzellikleri.renkler="Yeşil"
    burcOzellikleri.element="Toprak"
    burcOzellikleri.nitelikler="Sabit"
    burcOzellikleri.gezegenler="Venüs"
    burcOzellikleri.anlastiklari="Başak ve Oğlak"
    burcOzellikleri.anlasamadiklari="Koç,Aslan,Yay"
    burcOzellikleri.unluler="Adele,George Clooney,Cem Yılmaz"
    burcOzellikleri.burcAciklama=`Güvenlik, sadakat ve sabır gibi özelliklerle tanınan Boğa burcu insanları, genellikle sakin, kararlı ve pratik bir yapıya sahiptir.

        Boğa burcu insanları, toprak elementinin etkisi altındadır. Bu nedenle pratik, gerçekçi ve dünyevi bir bakış açısına sahiptirler. Kararlılık ve istikrar önemlidir. Genellikle sabırlı ve emin adımlarla ilerlerler.
        
        Boğa burcu insanları, güvenlik ve maddi refah konularına önem verirler. Ekonomik güvenliklerini sağlamak için çalışmaktan hoşlanır ve maddi değerlere değer verirler. İstikrarlı bir yaşam tarzı onlar için önemlidir.
        
        Boğa burcu insanları sadık ve güvenilir kişilerdir. İlişkilerinde ve dostluklarında sadakatleri ile tanınırlar. Ayrıca, pratik yardımseverlikleriyle bilinirler. Sevdikleri için ellerinden geleni yapar ve destek olurlar.
        
        Boğa burcu insanları genellikle doğal bir zevk anlayışına sahiptirler. Estetik kaygıları vardır ve güzellik, sanat ve lüksü takdir ederler. Güzel ortamlar, lezzetli yiyecekler ve rahatlığı seven bir yaşam tarzı onları mutlu eder.
        
        Bununla birlikte, Boğa burcu insanları bazen inatçı olabilirler. Fikirlerine sıkı sıkıya bağlı kalabilir ve değişime karşı direnç gösterebilirler. Aceleci davranmayı sevmezler ve işleri düşünerek ve planlayarak yapmayı tercih ederler.
        
        Boğa burcu insanları için güvenlik, rahatlık ve stabilite önemlidir. Duygusal ve fiziksel anlamda güvenli bir ortam ararlar. Güvendikleri bir temel üzerine inşa etmek ve hayatta istikrarlı bir şekilde ilerlemek isterler.
        
        Kısacası, Boğa burcu insanları sakin, kararlı ve pratik bireylerdir. Maddi güvenlik, sadakat ve güvenlik önemli değerleridir. Estetik ve konfora önem verirler. İnatçı olabilirler, ancak sabırları ve emekleriyle istedikleri hedeflere ulaşabilirler.`
  }
  else if (sonuc.name === 'Virgo') {
    burcOzellikleri.burcismi = 'Başak Burcu';
    burcOzellikleri.burcSimgesi="♍"
    burcOzellikleri.burcTasi="Safir"
    burcOzellikleri.ugurluSayisi="5, 6, 14, 23, 32"

    burcOzellikleri.renkler="Kahverengi, Mavi"
    burcOzellikleri.element="Toprak"
    burcOzellikleri.nitelikler="Değişken"
    burcOzellikleri.gezegenler="Merkür"
    burcOzellikleri.anlastiklari="Boğa ve Oğlak"
    burcOzellikleri.anlasamadiklari="Koç,Aslan,Yay"
    burcOzellikleri.unluler="Beyonce,Salma Hayek,Michael Jackson"
    burcOzellikleri.burcAciklama=`Başak burcu insanları, toprak elementinin etkisi altındadır. Bu nedenle pratik, gerçekçi ve iş odaklı bir bakış açısına sahiptirler. Detaylara önem verirler ve analitik düşünce yapısıyla çözüm odaklıdırlar.

        Başak burcu insanları, düzen ve temizlik konusunda oldukça titizdir. Hem fiziksel hem de zihinsel olarak düzenli bir ortamda olmayı tercih ederler. Disiplinli ve organize olma eğilimindedirler.
        
        Başak burcu insanları analitik düşünce yapısıyla öne çıkar. Problemleri çözmek için mantık ve detaylara odaklanırlar. Eleştirel düşünce yetenekleri yüksektir ve detayları gözden kaçırmazlar.
        
        Pratik ve iş odaklıdırlar. Görevlerini yerine getirmek, planlamak ve düzenlemek onlar için önemlidir. Verimli bir şekilde çalışmaktan hoşlanır ve işlerini zamanında tamamlarlar. Disiplinli ve sorumluluk sahibidirler.
        
        Başak burcu insanları, sağlık ve hijyen konularına da önem verirler. Sağlıklı bir yaşam tarzı benimser ve beslenmelerine dikkat ederler. Temiz ve düzenli bir çevrede olmayı tercih ederler.
        
        İşbirliği ve hizmet etme konusunda iyidirler. Yardımseverlikleriyle bilinirler ve başkalarına destek olmaktan hoşlanırlar. Detayları gözden kaçırmadan işleri yerine getirir ve başkalarının ihtiyaçlarına duyarlıdırlar.
        
        Başak burcu insanları bazen mükemmeliyetçilikleri nedeniyle kendilerine fazla yüklenme eğiliminde olabilirler. Ayrıca, eleştirel olmaları ve detaylara çok fazla odaklanmaları nedeniyle kendilerini ve başkalarını fazla eleştirebilirler.
        
        Sonuç olarak, Başak burcu insanları pratik, düzenli, analitik ve mükemmeliyetçi bir yapıya sahiptirler. Detaylara önem verirler, analitik düşünce yapısıyla problemleri çözerler ve işlerini disiplinli bir şekilde yerine getirirler. Yardımseverlikleriyle bilinirler ve sağlıklı bir yaşam tarzı benimserler.`
  }
  else if (sonuc.name === 'Capricorn') {
    burcOzellikleri.burcismi = 'Oğlak Burcu';
    burcOzellikleri.burcSimgesi="♑"
    burcOzellikleri.burcTasi="Oniks"
    burcOzellikleri.ugurluSayisi="4, 8, 13, 17, 26"

    burcOzellikleri.renkler="Kahverengi, Siyah"
    burcOzellikleri.element="Toprak"
    burcOzellikleri.nitelikler="Kardinal"
    burcOzellikleri.gezegenler="Satürn"
    burcOzellikleri.anlastiklari="Boğa ve Başak"
    burcOzellikleri.anlasamadiklari="Koç,Aslan,Yay"
    burcOzellikleri.unluler="Barış Manço,Filiz Akın,Seda Sayan"
    burcOzellikleri.burcAciklama=`Kararlı, disiplinli ve hırslı bir yapıya sahip olan Oğlak burcu insanları, başarı odaklı ve sorumluluk sahibi kişilikleriyle tanınırlar. 

        Oğlak burcu insanları, toprak elementinin etkisi altındadır. Pratik, gerçekçi ve istikrarlı bir bakış açısına sahiptirler. Kendilerine hedefler belirler ve bu hedeflere ulaşmak için kararlılıkla çalışırlar.
        
        Oğlak burcu insanları, disiplinli ve planlı bir yaşam tarzını benimserler. İşlerini zamanında ve düzenli bir şekilde tamamlama eğilimindedirler. Sorumluluk sahibi kişilerdir ve görevlerini yerine getirmek için çaba gösterirler.
        
        Pragmatik ve mantıklı düşünce yapısıyla öne çıkarlar. Problemleri çözmek için analitik bir yaklaşım benimserler ve çözüm odaklıdırlar. Zorluklarla karşılaştıklarında sabırlı bir şekilde çözüm bulma eğilimindedirler.
        
        Oğlak burcu insanları, başarıya odaklanırlar. Yüksek hedefler belirler ve bu hedeflere ulaşmak için çalışırlar. Azimli ve hırslıdırlar, engelleri aşmak için gerekli çabayı gösterirler. Kariyer ve sosyal statü onlar için önemlidir.
        
        Pratik zekâları ve işbirliği becerileriyle bilinirler. İş hayatında başarılı olurlar ve liderlik yetenekleri gelişmiştir. İşlerini planlı bir şekilde organize ederler ve disiplinli bir şekilde çalışırlar.
        
        Oğlak burcu insanları genellikle ciddi ve olgun bir yapıya sahiptirler. Duygusal açıdan da istikrarlı olma eğilimindedirler. Güvenilir ve sadık kişilerdir, ilişkilerinde de sorumluluklarını yerine getirirler.
        
        Ancak Oğlak burcu insanları bazen işlerine fazla odaklanabilirler ve çalışmaya çok fazla zaman harcayabilirler. Bu nedenle zaman zaman kişisel yaşamlarını ihmal edebilirler. Ayrıca, eleştirel olma eğilimleri ve mükemmeliyetçilikleri nedeniyle kendileri ve çevrelerindekiler üzerinde baskı oluşturabilirler.
        
        Sonuç olarak, Oğlak burcu insanları disiplinli, kararlı ve hırslı bir yapıya sahiptirler. Hedeflerine odaklanır, disiplinli bir şekilde çalışır ve başarıya ulaşmak için çaba sarf ederler.`
  }
  else if (sonuc.name === 'Gemini') {
    burcOzellikleri.burcismi = 'İkizler Burcu';
    burcOzellikleri.burcSimgesi="♊"
    burcOzellikleri.burcTasi="Akuamarin"
    burcOzellikleri.ugurluSayisi="3, 5, 8, 12, 23"

    burcOzellikleri.renkler="Sarı"
    burcOzellikleri.element="Hava"
    burcOzellikleri.nitelikler="Değişken"
    burcOzellikleri.gezegenler="Merkür"
    burcOzellikleri.anlastiklari="Terazi ve Kova"
    burcOzellikleri.anlasamadiklari="Yengeç,Akrep,Balık"
    burcOzellikleri.unluler="Acun Ilıcalı,Gülşen,Sıla"
    burcOzellikleri.burcAciklama=`İkizler burcu insanları, hava elementinin etkisi altındadır. Zeki, hızlı düşünen ve esnek bir zihin yapısına sahiptirler. Her şeyi merak ederler, sürekli yeni bilgiler ve deneyimler arayışındadırlar.

        İkizler burcu insanları son derece iletişimcidir. Konuşmayı, yazmayı ve iletişim kurmayı severler. Sosyal becerileri gelişmiştir ve insanlarla kolaylıkla bağlantı kurabilirler. Çevrelerindeki insanları etkileme yetenekleri vardır.
        
        Değişken ve uyumlu bir yapıları vardır. Hızlı bir şekilde yeni fikirlere adapte olabilir ve çeşitli konulara ilgi duyabilirler. Bu nedenle sıkılmadan ve kolaylıkla yeni projelere, etkinliklere veya hobilere atılabilirler.
        
        İkizler burcu insanları akıllı ve zeki bir yapıya sahiptirler. Analitik düşünme yetenekleriyle bilinirler ve hızlı bir şekilde karmaşık sorunları çözebilirler. Farklı konulara olan ilgileri sayesinde çok yönlü bir bilgi birikimine sahiptirler.
        
        Heyecan verici ve canlı bir enerjiye sahiptirler. Sosyal ortamlarda canlılık ve neşe yayabilirler. İkizler burcu insanlarıyla zaman geçirmek genellikle keyifli ve eğlenceli olur.
        
        Ancak İkizler burcu insanları zaman zaman kararsızlık yaşayabilirler. İkili veya çoklu seçenekler arasında kalmak onlar için zor olabilir. Ayrıca, sabit bir rutine bağlı kalmak yerine çeşitlilik ve değişim arayışında olabilirler.
        
        İkizler burcu insanları duygusal olarak da dalgalanmalar yaşayabilirler. Bir anda neşeli ve enerjik olabilirken bir anda sıkılgan veya düşünceli hale gelebilirler. Bu nedenle duygusal dengelerini sağlamak için zaman zaman kendilerine zaman ayırmaları önemlidir.
        
        Sonuç olarak, İkizler burcu insanları meraklı, iletişimci ve değişken bir yapıya sahiptirler. Zeki düşünce yapısı, sosyal beceriler ve canlı enerjiyle çevrelerine pozitif bir etki yapabilirler. Ancak kararsızlık ve duygusal dalgalanmalar yaşayabilecekleri unutulmamalıdır.`
  }
  else if (sonuc.name === 'Libra') {
    burcOzellikleri.burcismi = 'Terazi Burcu';
    burcOzellikleri.burcSimgesi="♎"
    burcOzellikleri.burcTasi="Opal"
    burcOzellikleri.ugurluSayisi="6, 7, 15, 24, 33"

    burcOzellikleri.renkler="Pembe, Mavi"
    burcOzellikleri.element="Hava"
    burcOzellikleri.nitelikler="Kardinal"
    burcOzellikleri.gezegenler="Venüs"
    burcOzellikleri.anlastiklari="İkizler ve Kova"
    burcOzellikleri.anlasamadiklari="Yengeç,Akrep,Balık"
    burcOzellikleri.unluler="Hazal Kaya,Fettah Can,Ebru Gündeş"
    burcOzellikleri.burcAciklama=`Terazi burcu insanları, hava elementinin etkisi altındadır. Denge ve adalet arayışı, onların temel özelliklerinden biridir. Çatışmalardan kaçınmayı ve uyumlu bir ortam yaratmayı severler. Her türlü durumu objektif bir şekilde değerlendirebilirler.

        Terazi burcu insanları sosyal ilişkilerde ustadır. Çevrelerindeki insanlarla iyi iletişim kurarlar ve insanları anlama yetenekleri gelişmiştir. Diplomatik yaklaşımları sayesinde çatışma çözme konusunda başarılı olabilirler.
        
        Estetik anlayışlarına önem verirler. Güzel sanatlara, sanatsal ifadelere ve estetik detaylara ilgi duyarlar. Güzel ve dengeleyici ortamlarda bulunmaktan keyif alırlar. Estetik beğenilerini hayatlarına yansıtabilirler.
        
        Terazi burcu insanları adil ve objektif davranmaya özen gösterirler. Adalet duygusu yüksektir ve diğer insanların haklarını gözetirler. Kararlarını verirken herkesin çıkarlarını dikkate alırlar ve tarafsız bir şekilde değerlendirme yaparlar.
        
        Uyum ve denge arayışı, Terazi burcu insanlarının ilişkilerinde de kendini gösterir. İlişkilerinde uyumlu bir ortamı sağlamak ve dengeyi korumak için çaba gösterirler. İlişkideki partnerlerinin ihtiyaçlarına özen gösterir ve anlayışlı davranırlar.
        
        Terazi burcu insanları kararsızlık yaşayabilirler. Birçok seçenek arasında kalıp karar vermek zor olabilir. Ancak bu kararsızlık, detayları değerlendirme ve en doğru seçeneği bulma çabasından kaynaklanır.
        
        Dost canlısı ve hoşgörülü bir yapıya sahiptirler. Başkalarına karşı anlayışlı ve yardımseverdirler. Sosyal çevrelerindeki insanlarla uyum içinde olmak ve işbirliği yapmak onlar için önemlidir.
        
        Terazi burcu insanları güzellik, sanat ve estetiğe olan ilgileriyle öne çıkarlar. Estetik açıdan tatmin edici şeylerle zaman geçirmekten keyif alırlar. Sanat galerilerini gezmek, müzik dinlemek veya dekorasyonla ilgilenmek gibi etkinliklerden hoşlanırlar.`
  }
  else if (sonuc.name === 'Aquarius') {
    burcOzellikleri.burcismi = 'Kova Burcu';
    burcOzellikleri.burcSimgesi="♒"
    burcOzellikleri.burcTasi="Ametist"
    burcOzellikleri.ugurluSayisi=" 1, 4, 7, 11, 22"

    burcOzellikleri.renkler="Mavi, Turuncu"
    burcOzellikleri.element="Hava"
    burcOzellikleri.nitelikler="Sabit"
    burcOzellikleri.gezegenler="Uranüs, Satürn"
    burcOzellikleri.anlastiklari="İkizler ve Terazi"
    burcOzellikleri.anlasamadiklari="Boğa,Başak,Yengeç"
    burcOzellikleri.unluler="Serdar Ortaç,İrem Sak,Cristiano Ronaldo"
    burcOzellikleri.burcAciklama=`Kova burcu insanları, hava elementinin etkisi altındadır. Zekaları ve yaratıcılıklarıyla dikkat çekerler. Özgün düşünce yapısı ve ilginç fikirleri vardır. Toplumsal meselelere duyarlıdırlar ve yenilikçi çözümler üretebilirler.

        Kova burcu insanları özgürlüklerine ve bağımsızlıklarına çok düşkündür. Kendi düşüncelerine ve ideallerine göre hareket etmeyi tercih ederler. Sıradanlıktan hoşlanmazlar ve kendilerini ifade etme özgürlüğüne önem verirler.
        
        Kova burcu insanları, sosyal konulara ilgi duyan ve toplumsal adalet için çaba harcayan kişilerdir. Toplumda değişim yaratmak ve insanları bilinçlendirmek için çaba gösterirler. İnsan hakları, eşitlik ve özgürlük gibi konular onlar için önemlidir.
        
        Yaratıcılık ve icatlar Kova burcu insanlarının güçlü yanları arasındadır. İnovatif düşünce yapısı sayesinde ilginç projeler üretebilirler. Teknolojiye olan ilgileriyle öne çıkarlar ve yeni trendleri takip ederler. Keşfetmeyi seven bir ruhları vardır.
        
        Kova burcu insanları arkadaş canlısı ve sosyal kişilerdir. Geniş bir çevreye sahip olmayı severler ve farklı insanlarla iletişim kurmaktan hoşlanırlar. Grup çalışmalarında aktif rol alabilirler ve ortak hedefler için işbirliği yapmaktan keyif alırlar.
        
        Kova burcu insanları düşünceli ve analitik bir yapıya sahiptir. Problemleri çözme konusunda yeteneklidirler ve detaylara dikkat ederler. Mantıklı düşünmeyi ve objektif kararlar vermeyi tercih ederler.
        
        Bağımsızlık ve özgürlükleri kadar, Kova burcu insanları için değişiklik ve macera da önemlidir. Rutin hayattan sıkılırlar ve monotonluğa tahammül edemezler. Yeni deneyimler yaşamak ve keşfetmek için fırsatları değerlendirirler.`
  }
  else if (sonuc.name === 'Cancer') {
    burcOzellikleri.burcismi = 'Yengeç Burcu';
    burcOzellikleri.burcSimgesi="♋"
    burcOzellikleri.burcTasi=" Aytaşı (Mondtaşı)"
    burcOzellikleri.ugurluSayisi=" 2, 7, 11, 20, 29"

    burcOzellikleri.renkler="Beyaz"
    burcOzellikleri.element="Su"
    burcOzellikleri.nitelikler="Kardinal"
    burcOzellikleri.gezegenler="Ay"
    burcOzellikleri.anlastiklari="Akrep ve Balık"
    burcOzellikleri.anlasamadiklari="Koç,Aslan,Yay"
    burcOzellikleri.unluler="Selena Gomez,Tom Cruise,Sezen Aksu"
    burcOzellikleri.burcAciklama=`Yengeç burcu insanları, su elementinin etkisi altındadır. Hassas ve duygusal bir yapıya sahiptirler. Duygularını derinlemesine yaşarlar ve çevrelerindeki insanların duygusal ihtiyaçlarına önem verirler.

        Aile ve ev hayatı Yengeç burcu insanları için büyük önem taşır. Sevdiklerine bağlılık duyarlar ve ailelerine karşı koruyucu bir tutum sergilerler. Evleri, kendilerini güvende hissettikleri bir sığınak olarak görürler.
        
        Yengeç burcu insanları empati yetenekleri gelişmiştir. Diğer insanların duygusal durumlarını anlamakta başarılıdırlar ve destek olmayı severler. Yardımseverlikleri ve şefkatli yaklaşımlarıyla tanınırlar.
        
        Yengeç burcu insanları duygusal dalgalanmalara yatkındır. Duygusal olarak hassas oldukları için çevresindeki stres veya negatif enerjiyi kolayca hissedebilirler. Kendilerini korumak için zaman zaman geri çekilme ihtiyacı duyabilirler.
        
        Yengeç burcu insanları, sadakatleri ve güvenilirlikleriyle bilinirler. İlişkilerinde sağlam temeller oluştururlar ve sevdiklerine sadık kalmayı önemserler. Karşılığında da sevgi ve güven beklerler.
        
        Yengeç burcu insanları hayal güçleri yüksektir. Sanatsal yeteneklere sahip olabilirler ve duygularını sanat yoluyla ifade etmeyi tercih edebilirler. Müzik, resim, yazı gibi yaratıcı alanlarda kendilerini rahatlıkla ifade edebilirler.
        
        Yengeç burcu insanları evlerini düzenlemek ve ev ortamında huzur sağlamak konusunda özen gösterirler. Evlerine büyük önem verirler ve rahat bir ortam yaratmak için çaba harcarlar. Misafirperverlikleriyle de tanınırlar.
        
        Yengeç burcu insanları değişime karşı dirençli olabilirler. Alışkanlıklarını korumayı ve güvenli alanlarında kalmayı tercih ederler. Ancak zamanla yeni deneyimlere açılmayı öğrenebilirler ve gelişime önem verebilirler.
        
        Sonuç olarak, Yengeç burcu insanları duygusal, koruyucu ve aile odaklı bir yapıya sahiptirler. Hassaslıkları, empati yetenekleri ve sadakatleriyle ön plana çıkarlar. `
  }
  else if (sonuc.name === 'Scorpio') {
    burcOzellikleri.burcismi = 'Akrep Burcu';
    burcOzellikleri.burcSimgesi="♏"
    burcOzellikleri.burcTasi="Topaz"
    burcOzellikleri.ugurluSayisi="9, 11, 18, 27, 36"

    burcOzellikleri.renkler="Kırmızı, Siyah"
    burcOzellikleri.element="Su"
    burcOzellikleri.nitelikler="Sabit"
    burcOzellikleri.gezegenler="Mars, Plüton"
    burcOzellikleri.anlastiklari="Yengeç ve Balık"
    burcOzellikleri.anlasamadiklari="İkizler,Terazi,Kova"
    burcOzellikleri.unluler="Kıvanç Tatlıtuğ,Leonardo DiCaprio"
    burcOzellikleri.burcAciklama=`Akrep burcu insanları, su elementinin etkisi altındadır. Yoğun duyguları ve derin içgüdüleri vardır. Tutkulu bir doğaya sahiptirler ve isteklerini hedeflerine odaklanarak gerçekleştirme konusunda kararlıdırlar.

        Akrep burcu insanları gizemli bir havaya sahiptir. Diğer insanlar tarafından anlaşılması zor olabilirler ve iç dünyalarını genellikle saklarlar. Derin düşünce yapısı ve sezgileriyle ön plana çıkarlar.
        
        Akrep burcu insanları keskin bir zeka ve analitik düşünme yeteneğiyle donatılmıştır. Olayları derinlemesine analiz eder ve gizli detayları fark edebilirler. Araştırmacı bir ruhları vardır ve sırları çözmekten hoşlanırlar.
        
        Akrep burcu insanları son derece tutkuludur. Hedeflerine ulaşmak için azimle çalışır ve başarıya ulaşmak için gereken çabayı gösterirler. Hem kariyer hem de ilişkilerinde tutkulu bir şekilde bağlılık gösterebilirler.
        
        Akrep burcu insanları güçlü bir sezgiye sahiptir. İnsanları ve olayları içgüdüsel olarak anlayabilirler. İnsanlar arasındaki gerçek niyetleri hızlı bir şekilde algılarlar ve doğruyu yanlıştan ayırt edebilirler.
        
        Akrep burcu insanları sadakatleriyle bilinirler. İlişkilerinde derin bağlar kurarlar ve sevdiklerine karşı son derece sadık kalırlar. Aynı şekilde kendilerinden de aynı bağlılığı beklerler.
        
        Akrep burcu insanları için gizlilik ve mahremiyet önemlidir. Kendilerini korumaya ve duygularını sadece güvendikleri kişilerle paylaşmaya özen gösterirler. Başkalarının sırlarını koruma konusunda da titiz davranırlar.
        
        Akrep burcu insanları intikamcı bir yapıya sahip olabilirler. Onlara haksızlık yapıldığında veya güvendikleri kişileri hayal kırıklığına uğrattıklarında affetmekte zorlanabilirler. Öfke ve kıskançlık duyguları zaman zaman ortaya çıkabilir.
        
        Sonuç olarak, Akrep burcu insanları tutkulu, kararlı ve gizemli bir doğaya sahiptir. Zekaları, analitik düşünme yetenekleri ve sezgileriyle öne çıkarlar. `
  }
  else if (sonuc.name === 'Pisces') {
    burcOzellikleri.burcismi = 'Balık Burcu';
    burcOzellikleri.burcSimgesi="♓"
    burcOzellikleri.burcTasi="Akik"
    burcOzellikleri.ugurluSayisi="2, 5, 7, 16, 20"

    burcOzellikleri.renkler="Deniz yeşili, Mor"
    burcOzellikleri.element="Su"
    burcOzellikleri.nitelikler="Değişken"
    burcOzellikleri.gezegenler="Neptün, Jüpiter"
    burcOzellikleri.anlastiklari="Yengeç ve Akrep"
    burcOzellikleri.anlasamadiklari="Koç,Aslan,Yay"
    burcOzellikleri.unluler="Nejat İşler,Murat Boz,Hayko Cepkin"
    burcOzellikleri.burcAciklama=`Balık burcu insanları, su elementinin etkisi altındadır. Duygusal bir doğaya sahiptirler ve çevrelerindeki insanların duygusal ihtiyaçlarına duyarlılıkla yaklaşırlar. Başkalarının hislerini anlama ve empati kurma konusunda yeteneklidirler.

        Balık burcu insanları hayal gücü yüksek ve yaratıcı bireylerdir. Sanatsal yetenekleri ve estetik anlayışları gelişmiştir. Müzik, resim, yazı gibi sanat dallarında kendilerini ifade etmekten keyif alırlar.
        
        Balık burcu insanları hassas ve duygusal dalgalanmalara açıktır. Negatif enerjiyi kolayca hissedebilirler ve bazen duygusal dalgalanmalar yaşayabilirler. Ancak bu duygusallık, onların derin bir anlayışa ve empatiye sahip olmalarını da sağlar.
        
        Balık burcu insanları yardımseverlikleriyle tanınırlar. Başkalarına destek olmayı ve yardım etmeyi severler. İyi niyetleri ve şefkatli yaklaşımlarıyla çevrelerindeki insanlara moral verirler.
        
        Balık burcu insanları hayatta anlam arayışında olan bireylerdir. Ruhsal ve spiritüel konulara ilgi duyarlar. Rüyalarıyla bağlantı kurabilirler ve içsel bir yolculuğa çıkmaktan keyif alırlar.
        
        Balık burcu insanları duygusal olarak derin bağlantılar kurarlar. Romantik ilişkilerde duygusal yoğunluğu yaşamaktan hoşlanırlar. Sevdikleriyle derin bir bağ kurabilirler ve sadakatleri önemlidir.
        
        Balık burcu insanları duygularını ifade etmekte bazen zorlanabilirler. İç dünyalarında yoğun bir hissiyatı yaşarlar ancak bunu sözlü olarak ifade etmekte güçlük çekebilirler. Daha çok işaretler, semboller ve sanat yoluyla kendilerini ifade edebilirler.
        
        Balık burcu insanları empati yetenekleri ve anlayışlı tavırları sayesinde başkalarıyla kolaylıkla bağlantı kurarlar. İnsanların duygusal ihtiyaçlarına önem verir ve dinlemek konusunda sabırlıdırlar.
        
        Sonuç olarak, Balık burcu insanları duygusal, hayalperest ve anlayışlı bir yapıya sahiptirler. Sanatsal yetenekleri ve empati yetenekleriyle öne çıkarlar. `
  }

  return (
    <ImageBackground source={background} style={style.backgroundImage}>

      <ScrollView  >

        <View style={style.mainContent}>
          <View>
            <Text style={style.burcSimgesi}>{burcOzellikleri.burcSimgesi}</Text>
          </View>

          <View>
            <Text style={style.burcIsmi}>{burcOzellikleri.burcismi}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Taş: {burcOzellikleri.burcTasi}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Uğurlu Sayılar: {burcOzellikleri.ugurluSayisi}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Renkler: {burcOzellikleri.renkler}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Nitelik: {burcOzellikleri.nitelikler}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Element: {burcOzellikleri.element}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Gezegen: {burcOzellikleri.gezegenler}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Uyumlu: {burcOzellikleri.anlastiklari}</Text>
          </View>
          <View>
            <Text style={style.burcTasi}>Uyumsuz: {burcOzellikleri.anlasamadiklari}</Text>
          </View>
          <View>
            <Text style={style.unluler}>Ünlüler: {burcOzellikleri.unluler}</Text>
          </View>
          <View>
            <Text style={style.aciklama}>{burcOzellikleri.burcAciklama}</Text>
          </View>


        </View>

      </ScrollView>


    </ImageBackground>
  )
}

const style = StyleSheet.create({
  backgroundImage: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: '100%',
  },
  mainContent:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    padding:30,
    margin:20,
    borderRadius:20,
    backgroundColor:'#9DB2BF',
    opacity:0.85
  },
  burcSimgesi:{
    fontSize:40
  },
  burcIsmi:{
    fontSize:20,
    fontWeight:'bold',
    margin:20
  },
  burcTasi:{
    color:'#B54F41',
    fontSize:15
  },
  aciklama:{
    marginTop:10,
    fontSize:14,
    textAlign:'justify',
    fontWeight:'bold'
  },
  unluler:{
    color:'#B54F41',
    fontSize:15,
    textAlign:'center'
  },

});
