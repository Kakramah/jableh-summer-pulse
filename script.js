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

/* --- 2. Gallery Dataset (Exact 33 Images) --- */
const galleryData = [
  {
    src: 'images/01-جامع-المدينة-القديمة-مئذنة-وأقواس-نهار.jpg',
    title: 'جامع المدينة القديمة — مئذنة وأقواس',
    desc: 'جامع بمئذنة مدورة وصف أقواس حجرية أصيلة تحت سماء زرقاء صافية، يعكس عمارة جبلة الروحية والتراثية.'
  },
  {
    src: 'images/02-جامع-قبة-ومئذنة-ونخلة.jpg',
    title: 'قبة ومئذنة ونخلة ساحلية',
    desc: 'قبة بيضاء ومئذنة ونخلة باسقة فوق حجر دافئ، تبرز جمالية الفضاءات الخضراء المتداخلة مع العمارة.'
  },
  {
    src: 'images/03-مبنى-تراثي-وسارية-سماء-صافية.jpg',
    title: 'مبنى تراثي بسقف قرميدي وسارية',
    desc: 'واجهة تراثية بسقف قرميدي أحمر وسارية شامخة في قلب جبلة تجسد الروح الساحلية المعمارية.'
  },
  {
    src: 'images/04-جوي-ليلي-المدرج-والمدينة-مضاءة.jpg',
    title: 'المدرج الروماني الأثري ليلاً',
    desc: 'جوية ليلية للمدرج الروماني الأثري الحقيقي وساحته المضاءة التي تستعد لاحتضان فعاليات مهرجان صيف جبلة.'
  },
  {
    src: 'images/05-قبة-مقام-بيضاء-تفصيل.jpg',
    title: 'تفصيل قبة مقام بيضاء',
    desc: 'قبة بيضاء مقربة على سماء زرقاء صافية تعكس النقاء الروحي لعمارة الساحل السوري.'
  },
  {
    src: 'images/06-زقاق-قديم-أقواس-متتالية.jpg',
    title: 'زقاق قديم بأقواس متتالية',
    desc: 'زقاق مرصوف بأقواس حجرية متتالية في نسيج جبلة القديمة وتظليلها المعماري الطبيعي.'
  },
  {
    src: 'images/07-أقواس-بيت-تقليدي-حجر.jpg',
    title: 'أقواس بيت تقليدي وحجر عتيق',
    desc: 'رواق بيت تقليدي مع أقواس حجرية ونوافذ خشب أحمر ساحلية أصيلة مفعمة بالحميمية.'
  },
  {
    src: 'images/08-مئذنة-حجرية-مزخرفة.jpg',
    title: 'مئذنة حجرية مزخرفة',
    desc: 'مئذنة حجرية بشرفة مزخرفة ترتفع بثقة في سماء جبلة الصافية كشاهد على الفن المعماري.'
  },
  {
    src: 'images/09-بوابة-حجرية-المدينة-القديمة.jpg',
    title: 'بوابة حجرية بالمدينة القديمة',
    desc: 'بوابة وقوس مدخل حجري مهيب يفتح على دروب وأزقة جبلة التاريخية وحكاياتها العتيقة.'
  },
  {
    src: 'images/10-حرفي-يصنع-قارباً.jpg',
    title: 'حرفي يصنع قارباً خشبياً',
    desc: 'حرفي سوري يعمل بدقة ومهارة على بدن قارب صيد خشبي في ورشة ساحلية بمدينة جبلة.'
  },
  {
    src: 'images/11-صياد-يرمم-شباكه.jpg',
    title: 'صياد يرمم شباك الصيد',
    desc: 'صياد جالس بوقار يرمم شباكه الخضراء — يدان خشنان وملمس واقعي خالص ينبض بالصبر والشرف.'
  },
  {
    src: 'images/12-بائع-عربة-في-الشارع.jpg',
    title: 'بائع عربة على رصيف جبلة',
    desc: 'بائع في كشك متنقل على رصيف جبلة يعكس دفء الحياة اليومية وبساطة أهل المدينة.'
  },
  {
    src: 'images/13-مسنّ-يشحذ-على-الحجر-شرر.jpg',
    title: 'مسن يشحذ النصل على الحجر الدوار',
    desc: 'مسن حرفي يشحذ نصلاً على حجر دوار مع تطاير شرر النار في لقطة توثيقية حية تفيض بالواقعية.'
  },
  {
    src: 'images/14-بائع-سمك-في-السوق.jpg',
    title: 'بائع السمك في سوق جبلة',
    desc: 'بائع سمك طازج في سوق جبلة الساحلي يعرض خيرات صيد الفجر من أعماق البحر المتوسط.'
  },
  {
    src: 'images/15-قدر-طبخ-شعبي-ماكرو.jpg',
    title: 'قدر طبخ شعبي ومغرفة خشبية',
    desc: 'لقطة ماكرو لقدر طبخ شعبي تفوح منه رائحة التراث والضيافة والمأكولات الساحلية الأصيلة.'
  },
  {
    src: 'images/16-السوق-المزدحم-نهاراً.jpg',
    title: 'السوق المسقوف المزدحم نهاراً',
    desc: 'زحام السوق الشعبي المسقوف وحركة المتسوقين في الشارع التراثي النابض بالحيوية.'
  },
  {
    src: 'images/17-سوق-الملابس-والأقمشة.jpg',
    title: 'سوق الأقمشة والملابس',
    desc: 'ألوان وحركة دكاكين الأقمشة والملابس في أسواق جبلة التي تحتفي ببهجة العيد والصيف.'
  },
  {
    src: 'images/18-جوي-عمودي-نسيج-المدينة-القديمة.jpg',
    title: 'منظر رأسي لنسيج المدينة القديمة',
    desc: 'لقطة جوية رأسية توثق النسيج المعماري المتماسك لأسطح وحجارة جبلة القديمة وتداخل حاراتها.'
  },
  {
    src: 'images/19-واجهة-أقواس-حجرية-تراثية.jpg',
    title: 'واجهة أقواس حجرية تراثية',
    desc: 'واجهة بثلاثة أقواس وأعمدة حجرية بتناظر هندسي بديع ونظيف يعكس دقة المعماري الدمشقي والساحلي.'
  },
  {
    src: 'images/20-قبو-مقنطر-وضوء-النهاية.jpg',
    title: 'قبو مقنطر وضوء في النهاية',
    desc: 'ممر مقنطر من حجر جبلة الروماني والمحلي مع حزمة ضوء ملهمة في نهاية النفق التاريخي.'
  },
  {
    src: 'images/21-قبو-مقنطر-وطفل-يعبر.jpg',
    title: 'طفل يعبر القبو المقنطر',
    desc: 'لقطة الشاهد الإنساني المؤثرة: طفل يعبر في ضوء القبو التراثي مستقبلاً الغد بأمل مشرق.'
  },
  {
    src: 'images/22-قارب-صيد-في-المرفأ.jpg',
    title: 'قارب صيد أبيض في المرفأ',
    desc: 'قارب صيد أبيض يستريح على صفحة مياه المرفأ الهادئة تحت أشعة الصباح المنعشة.'
  },
  {
    src: 'images/23-جوي-مئذنة-والمدينة-والبحر.jpg',
    title: 'المئذنة وأفق البحر المتوسط',
    desc: 'بانوراما جوية تضع مئذنة جامع جبلة في المقدمة مع امتداد أفق البحر المتوسط الأزرق اللا متناهي.'
  },
  {
    src: 'images/24-داخل-قبو-حجري-مقنطر.jpg',
    title: 'داخل قبو حجري مقنطر ومرمم',
    desc: 'الدفء الداخلي لقبو حجري مقنطر تم ترميمه بعناية مع إضاءة هادئة تبرز ملمس الحجر والذاكرة.'
  },
  {
    src: 'images/25-جوي-الساحة-والمبنى-التراثي-غروب.jpg',
    title: 'الساحة والمبنى التراثي وقت الغروب',
    desc: 'مشهد جوي دافئ لساحة جبلة ومبناها التراثي تحت أشعة الغروب الذهبية الهادئة.'
  },
  {
    src: 'images/26-شارع-ليلي-حركة-وأضواء.jpg',
    title: 'شوارع جبلة الحية وأضواء الليل',
    desc: 'شارع ليلي ينبض بحركة السيارات والمارة بعد تأهيل الإنارة والمنصفات وزراعة الأمان في الفضاء العام.'
  },
  {
    src: 'images/27-كورنيش-ليلي-ومئذنة.jpg',
    title: 'كورنيش جبلة الليلي والمئذنة',
    desc: 'كورنيش جبلة البحري ليلاً مع إطلالة مضاءة للمئذنة والبحر المتلألئ ونسيم الساحل.'
  },
  {
    src: 'images/28-مقهى-ليلي-مضاء-جوي.jpg',
    title: 'مقهى ومطعم ساحلي مضاء ليلاً',
    desc: 'لقطة جوية لمقهى ومطعم ساحلي مضاء يستقبل رواد الصيف على شاطئ جبلة الساحر.'
  },
  {
    src: 'images/29-جوي-ليلي-المدرج-والساحة.jpg',
    title: 'المدرج الروماني والساحة المركزية',
    desc: 'لقطة جوية ليلية مقربة لمدرج جبلة والساحة المركزية المجهزة لفعاليات المهرجان الصيفي.'
  },
  {
    src: 'images/30-جوي-ليلي-عالٍ-للمدينة.jpg',
    title: 'بانوراما جوية عالية للمدينة ليلاً',
    desc: 'بانوراما جوية واسعة تكشف امتداد أضواء مدينة جبلة الساحلية وبريقها الليلي المتلألئ.'
  },
  {
    src: 'images/31-جوي-نهاري-المرفأ-والخليج.jpg',
    title: 'المرفأ الفينيقي الدائري والخليج نهاراً',
    desc: 'جوية نهارية بديعة لمرفأ جبلة الدائري التاريخي وحركة القوارب ومياه الخليج الصافية.'
  },
  {
    src: 'images/32-منتجع-المسابح-على-الصخر-جوي.jpg',
    title: 'المسابح الصخرية على شاطئ البحر',
    desc: 'لقطة جوية للمسابح والمنحوتات الصخرية الطبيعية وأمواج البحر الأبيض المتوسط المتكسرة.'
  },
  {
    src: 'images/33-جوي-الساحل-تحت-الغيوم.jpg',
    title: 'الساحل والمدينة تحت الغيوم',
    desc: 'جوية واسعة وشاملة تبرز امتداد شاطئ جبلة والمدينة تحت تشكيلات الغيوم الساحلية المهيبة.'
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
  const cleanSrc = src.replace(/^\.\//, '');
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
