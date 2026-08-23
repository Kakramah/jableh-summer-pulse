/**
 * JABLEH: SUMMER OF THE AMPHITHEATER & URBAN RENAISSANCE
 * Interactive Engine & Lightbox Gallery Controller
 * Author: Khaldoun Akramah (@𝓚𝓱𝓪𝓵𝓭𝓸𝓾𝓷𝓐𝓴𝓻𝓪𝓶𝓪𝓱)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initGalleryFilters();
  initPledgeForm();
  initScrollEffects();
});

/* --- 1. Ambient Cursor Spotlight --- */
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursorGlow');
  if (!cursorGlow) return;

  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

/* --- 2. Elevated Gallery Dataset (Exact 33 Images with Poetic Narrative) --- */
const galleryData = [
  {
    src: 'images/01-جامع-المدينة-القديمة-مئذنة-وأقواس-نهار.jpg',
    title: 'المئذنة والأقواس: هيبة التبتل المعماري',
    desc: 'أروقةٌ مقنطرة تتهادى في صمت الظهيرة، حيث يمتزج صدى الأذان الأول بحفيف النسيم القادم من البحر، ليعيد الحجر صياغة الخشوع في فضاء جبلة العتيق.'
  },
  {
    src: 'images/02-جامع-قبة-ومئذنة-ونخلة.jpg',
    title: 'ثالوث السكينة: القبة والمئذنة وجذع النخلة',
    desc: 'في هذا الركن الهادئ من المدينة، تعانق سعفات النخيل بياض القبة الشاهدة على تعاقب العصور، في مشهد يجسد الفطرة الساحلية وتناغم الطبيعة مع قدسية المكان.'
  },
  {
    src: 'images/03-مبنى-تراثي-وسارية-سماء-صافية.jpg',
    title: 'شموخ القرميد وعنفوان السارية',
    desc: 'واجهة تتحدى الزوال بحمرة قرميدها الأصيل وساريتها الشاخصة نحو المدى المفتوح؛ هنا تقاطعت حكايات التجارة والبحارة عبر القرون.'
  },
  {
    src: 'images/04-جوي-ليلي-المدرج-والمدينة-مضاءة.jpg',
    title: 'تاج جبلة الروماني: قيثارة الحجر في ليل الساحل',
    desc: 'لقطة علوية تنطق بجلال المسرح الأثري وهو يحتضن ليل المدينة ووهجها؛ مدرجٌ شهد هدير الجماهير منذ ألفي عام، ويفتح ذراعيه اليوم ليعيد ولادة الموسيقى والنور.'
  },
  {
    src: 'images/05-قبة-مقام-بيضاء-تفصيل.jpg',
    title: 'انحناءة الصفاء: تفصيل القبة البيضاء',
    desc: 'انسيابية كروية نقية تلثم زرقة الأفق الخالص، تجريدٌ بصري يحتفي بنقاء الجص الأبيض واكتمال الدائرة في عمارة الأولياء والذاكرة الشعبية.'
  },
  {
    src: 'images/06-زقاق-قديم-أقواس-متتالية.jpg',
    title: 'دروب الأقواس: ممر الذاكرة وظلال العابرين',
    desc: 'زقاق مرصوف بالحصى البحري، تحرسه أقواس حجرية متتابعة تخفف وطأة الهجير وتمنح الخطى سرها وظلها، كأن كل قوس هو بوابة تعبر بك إلى قرن مضى.'
  },
  {
    src: 'images/07-أقواس-بيت-تقليدي-حجر.jpg',
    title: 'أروقة الدار الساحلية: حوار الخشب والحجر',
    desc: 'قناطر بيت جبلاوي عتيق، تلتقي فيه صلابة الحجر الكلسي مع حميمية الخشب المعتق، مشكّلةً واحة من السكينة العائلية التي لا يطالها صخب الزمان.'
  },
  {
    src: 'images/08-مئذنة-حجرية-مزخرفة.jpg',
    title: 'المئذنة المنحوتة: أصابع الضوء نحو الغيم',
    desc: 'شرفة حجرية مورقة بالزخارف الدقيقة، نُحتت بأيدي بنائين أدركوا أن الجمال عبادة، فرفعوا الحجر صرحاً يناجي غيم الساحل ورذاذ موجه.'
  },
  {
    src: 'images/09-بوابة-حجرية-المدينة-القديمة.jpg',
    title: 'عتبة الأزمنة: البوابة الحجرية العتيقة',
    desc: 'كتلة حجرية مهيبة تقف على تخوم التاريخ، تستقبل القادمين بهيبة الحصون وتفتح أبوابها على عبق الياسمين وأسرار الحارات المستترة.'
  },
  {
    src: 'images/10-حرفي-يصنع-قارباً.jpg',
    title: 'صانع الأشرعة الخشبية: ملحمة النجار والبحر',
    desc: 'بين نشارة الخشب ورائحة القطران، ينحني الحرفي كمن ينحت جسد كائن حي؛ أضلاع قارب صيد سيعانق الموج غداً حاملاً رزق الفجر وبركة الصيادين.'
  },
  {
    src: 'images/11-صياد-يرمم-شباكه.jpg',
    title: 'غزل الصبر: يد الصياد وخيوط الشباك',
    desc: 'جلسة وقار وعينان تقرآن أسرار البحر؛ يدٌ حفرت التجاعيد فيها قصة كفاح لا تنتهي، ترتق خيوط الغزل الأخضر ليعيد نسج العهد بين الإنسان وموجه.'
  },
  {
    src: 'images/12-بائع-عربة-في-الشارع.jpg',
    title: 'أمانة الرصيف: كدح العيش وطيب المعشر',
    desc: 'عربة متواضعة على قارعة الطريق تختزل عزة النفس ودفء العلاقات الساحلية، حيث تصبح لقمة العيش المغمسة بالصبر عنواناً للأصالة والكرم الفطري.'
  },
  {
    src: 'images/13-مسنّ-يشحذ-على-الحجر-شرر.jpg',
    title: 'نداء الشرر: صهيل المعدن على حجر الشحذ',
    desc: 'لحظة درامية تحبس الأنفاس؛ شيخٌ ممسكٌ بنصله، والحجر الدوار يطلق نافورة من الشرر المتوهج، في تجسيد حي لقوة الإرادة واستمرار الحرفة جيلاً بعد جيل.'
  },
  {
    src: 'images/14-بائع-سمك-في-السوق.jpg',
    title: 'بركة الفجر: سوق السمك الساحلي',
    desc: 'صيد طازج استُخرج مع أول خيوط النور، وأصوات الباعة تملأ السوق بنداءات تفيض حيوية، لتعيد للمدينة نبضها الاقتصادي المرتبط بعطاء البحر الأزلي.'
  },
  {
    src: 'images/15-قدر-طبخ-شعبي-ماكرو.jpg',
    title: 'سر المذاق الساحلي: قدر الطبخ العتيق',
    desc: 'لقطة تقترب من ملمس الآنية الشعبية والمغرفة الخشبية، حيث يتصاعد بخار الأكلات التراثية التي ارتبطت بذاكرة الأمهات وأفراح الحي واجتماع الأحبة.'
  },
  {
    src: 'images/16-السوق-المزدحم-نهاراً.jpg',
    title: 'شريان اللقاء: صخب السوق التراثي',
    desc: 'زحام مفعم بالحياة في أروقة السوق القديم؛ حوارات الأهل، حركة المتبضعين، وتمازج الروائح بين البهارات وأقمشة القطن في لوحة اجتماعية نابضة.'
  },
  {
    src: 'images/17-سوق-الملابس-والأقمشة.jpg',
    title: 'بهجة الألوان: دكاكين الأقمشة والمواسم',
    desc: 'تدرجات الأقمشة المعلقة تعكس روح الفرح والتجدد التي تميز مواسم الصيف في جبلة، حيث تلتقي الأناقة البسيطة مع ذوق العائلات الساحلية.'
  },
  {
    src: 'images/18-جوي-عمودي-نسيج-المدينة-القديمة.jpg',
    title: 'البصمة التراثية: النسيج العمراني من العلياء',
    desc: 'عين الطائر ترصد تماسك المدينة القديمة، حيث تتراص البيوت وتتداخل الأزقة كخلايا حية تشهد على قيم الجوار والتضامن المعماري والاجتماعي.'
  },
  {
    src: 'images/19-واجهة-أقواس-حجرية-تراثية.jpg',
    title: 'إيقاع التناظر: الواجهة الحجرية الثلاثية',
    desc: 'ثلاثة أقواس تستند إلى أعمدة صلبة بتناغم موسيقي أخاذ؛ توازن بصري يريح العين ويعكس عمق الفلسفة الهندسية في تطويع الحجر الساحلي الصلد.'
  },
  {
    src: 'images/20-قبو-مقنطر-وضوء-النهاية.jpg',
    title: 'نفق الأزمنة: قبس النور في عتمة المقنطر',
    desc: 'أقبية حجرية ممتدة تحت الأرض، تعبر بالزائر في ممر ظليل قبل أن تفاجئه حزمة الضوء الباهر في نهايته، كاستعارة خالدة لرحلة المدينة نحو غدها.'
  },
  {
    src: 'images/21-قبو-مقنطر-وطفل-يعبر.jpg',
    title: 'خطى المستقبل: طفل يعبر ممر التاريخ',
    desc: 'لقطة توثيقية ترتجف لها المشاعر؛ طفلٌ يخطو بثقة وسط القبو المقنطر نحو الضوء، مجسداً استمرار الحياة وتوارث الراية في هذه الأرض الطيبة.'
  },
  {
    src: 'images/22-قارب-صيد-في-المرفأ.jpg',
    title: 'سكينة المرفأ: بياض الفُلك على مرآة الماء',
    desc: 'قارب صيد أبيض يرسو بهدوء في حوض الميناء، بينما تعكس صفحة البحر الصافية سكون الصباح وأمل العودة إلى الأمواج مع إطلالة كل فجر جديد.'
  },
  {
    src: 'images/23-جوي-مئذنة-والمدينة-والبحر.jpg',
    title: 'حارس الشاطئ: المئذنة والأفق اللا متناهي',
    desc: 'مشهد بانورامي جوي يرتفع بالمئذنة لتكون بوصلة الشاطئ وعينه الساهرة، بينما يمتد البحر الأزرق إلى ما لا نهاية في عناق خالد بين الأرض والماء.'
  },
  {
    src: 'images/24-داخل-قبو-حجري-مقنطر.jpg',
    title: 'هيبة الباطن: داخل القبو الحجري المرمم',
    desc: 'جدران كلسية عريضة احتفظت ببرودة القرون ودفء الحكايا؛ ترميم متقن يحيي حجارة المكان ويجعلها مهيأة لتكون متحفاً حياً للفنون والذاكرة.'
  },
  {
    src: 'images/25-جوي-الساحة-والمبنى-التراثي-غروب.jpg',
    title: 'أصيل الذهب: ساحة المدينة في ساعة الغروب',
    desc: 'عندما تغرب الشمس في مياه الساحل، تكتسي ساحة جبلة ومبانيها التراثية رداءً من العسجد المذاب، لتبدو المدينة كأنها خارجة من مخطوطة تاريخية نادرة.'
  },
  {
    src: 'images/26-شارع-ليلي-حركة-وأضواء.jpg',
    title: 'نبض الشرايين: جبلة الساهرة بعد التأهيل',
    desc: 'لقطة ليلية ديناميكية توثق حيوية شوارع جبلة بعد إعادة تأهيل الإنارة والمنصفات؛ حركة مستمرة تعكس أمان الفضاء العام وحب أهله للحياة.'
  },
  {
    src: 'images/27-كورنيش-ليلي-ومئذنة.jpg',
    title: 'نسيم الكورنيش: ليل البحر وأضواء المنارة',
    desc: 'الكورنيش البحري وهو يتلألأ بأنوار المساء، حيث يجتمع الناس ليستنشقوا يود البحر ويستمتعوا بليالي الصيف الساحرة تحت رعاية المئذنة المضيئة.'
  },
  {
    src: 'images/28-مقهى-ليلي-مضاء-جوي.jpg',
    title: 'واحة السمر: المقاهي الساحلية وألق الصيف',
    desc: 'جوية تكشف دفء السهرات الصيفية في مقاهي جبلة المطلة على البحر؛ فضاءات تفيض بالضحكات واللقاءات الحميمية التي تصنع خصوصية الصيف الجبلاوي.'
  },
  {
    src: 'images/29-جوي-ليلي-المدرج-والساحة.jpg',
    title: 'قلب الاحتفال: الساحة المركزية ومسرح الصيف',
    desc: 'مشهد علوي يركز على تلاحم المسرح الروماني مع الساحة المحيطة به أثناء التجهيزات؛ منصة عالمية على أرض سورية تستعد لإشعال قناديل الفرح.'
  },
  {
    src: 'images/30-جوي-ليلي-عالٍ-للمدينة.jpg',
    title: 'لؤلؤة الساحل: بانوراما الأنوار الجبلاوية',
    desc: 'بانوراما جوية واسعة تكشف جبلة ككائن حي مضيء يستند إلى البحر في هدأة الليل، في إطلالة تعكس اتساع المدينة واستقرارها ونضارتها.'
  },
  {
    src: 'images/31-جوي-نهاري-المرفأ-والخليج.jpg',
    title: 'المرفأ الدائري: أقدم موانئ فينيقيا الحية',
    desc: 'جوية نهارية باهرة تبرز الهندسة الدائرية الفريدة لمرفأ جبلة التاريخي؛ حوضٌ طبيعي آمن احتمت فيه السفن منذ آلاف السنين وما زال ينبض بالنشاط.'
  },
  {
    src: 'images/32-منتجع-المسابح-على-الصخر-جوي.jpg',
    title: 'نحت الأمواج: المسابح الصخرية الطبيعية',
    desc: 'لقطة جوية مذهلة للمنحوتات الصخرية التي شكلها الموج عبر العصور، حيث تتحول الصخور إلى مسابح طبيعية تحتضن مياه البحر الفيروزية الصافية.'
  },
  {
    src: 'images/33-جوي-الساحل-تحت-الغيوم.jpg',
    title: 'المدى الملحمي: الساحل والغيوم في سماء جبلة',
    desc: 'مشهد جوي شامل ومهيب يختتم الأرشيف؛ شريط الساحل الجبلاوي يمتد تحت سماء مكسوة بالغيوم الدرامية، شاهداً على عظمة هذه البقعة الساحلية الخالدة.'
  }
];

let currentLightboxIndex = 0;

/* --- 3. Lightbox Controls --- */
window.openLightbox = function(index) {
  if (index < 0 || index >= galleryData.length) return;
  currentLightboxIndex = index;
  updateLightboxContent();

  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.openLightboxBySrc = function(src) {
  const cleanSrc = src.replace(/^\.\//, '').normalize('NFC');
  const index = galleryData.findIndex(item => item.src === cleanSrc || item.src.endsWith(cleanSrc));
  if (index !== -1) {
    openLightbox(index);
  } else {
    openLightbox(0);
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.prevLightbox = function() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  updateLightboxContent();
};

window.nextLightbox = function() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  updateLightboxContent();
};

function updateLightboxContent() {
  const item = galleryData[currentLightboxIndex];
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');

  if (img) img.src = item.src;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${galleryData.length}`;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.desc;
}

// Keyboard Navigation for Lightbox
window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightboxModal');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') prevLightbox(); // RTL navigation
  if (e.key === 'ArrowLeft') nextLightbox();
});

/* --- 4. Gallery Category Filtering --- */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCat === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* --- 5. Real Web3Forms Submission --- */
function initPledgeForm() {
  const form = document.getElementById('pledgeForm');
  const statusBox = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>جاري إرسال التوثيق...</span>`;
    statusBox.className = 'form-status';
    statusBox.style.display = 'none';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        statusBox.className = 'form-status success';
        statusBox.innerHTML = `✓ تم تسجيل مشاركتك وتوثيقها بنجاح في سجل شرف جبلة. شكراً لاهتمامك بمدينتنا.`;
        form.reset();
      } else {
        throw new Error(data.message || 'حدث خطأ أثناء الإرسال');
      }
    } catch (error) {
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `✕ تعذر الإرسال: ${error.message || 'يرجى التحقق من اتصالك والمحاولة مجدداً.'}`;
    } finally {
      statusBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>إرسال وتوثيق المشاركة</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      `;
    }
  });
}

/* --- 6. Scroll & Navigation Effects --- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(6, 7, 10, 0.95)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
    } else {
      navbar.style.background = 'rgba(8, 10, 14, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });
}
