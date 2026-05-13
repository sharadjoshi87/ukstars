const content = {
  "/": {
    title: "Home",
    html: `
            <!-- Hero Section -->
            <section class="relative h-[500px] flex items-center justify-center text-center text-white rounded-3xl overflow-hidden mb-8 shadow-2xl mx-4">
                <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-105" 
                     style="background-image: url('img/hill.jpg');">
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

                <div class="relative z-20 px-6 max-w-3xl">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Galaxy of <span class="text-orange-400">UK Stars</span>
                    </h2>
                    <p class="text-lg md:text-xl font-light mb-8 text-gray-200">
                        Connecting people for a noble cause of uniting Uttarakhand.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="/team" data-link class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                            Meet The Team
                        </a>
                    </div>
                </div>
            </section>

            <!-- Mission/Vision Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 px-4">
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h3 class="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Our Vision</h3>
                    <p class="text-slate-700 leading-relaxed italic">
                        "Uniting and Igniting minds to contribute for a better community, connecting to our roots, values and traditions."
                    </p>
                </div>
                <div class="bg-slate-900 p-8 rounded-3xl shadow-sm text-white">
                    <h3 class="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">Goal</h3>
                    <p class="text-slate-300">
                        To create a blueprint for development and targets of leaping in the 17 SDGs as <strong>"The Best Himalayan State"</strong>.
                    </p>
                </div>
            </div>
        `,
  },
  "/team": {
    title: "Leadership Team",
    html: `
            <section class="px-4 py-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-800">Our Leadership Team</h2>
                    <div class="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                <!-- Dr. K K Pandey -->
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                        <div class="p-6">
                            <img src="./img/KKPandey.jpg" class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                            <h3 class="text-xl font-bold text-center text-slate-800">Dr. K K Pandey</h3>
                            <p class="text-green-600 text-sm font-semibold text-center mb-4 italic">Senior Consultant (Pulmonology)</p>
                            <p class="text-slate-600 text-sm leading-relaxed text-center">
                                
                <strong>Native Place</strong> - Goodmangal, Uttarakhand, India <br>
                <strong>Occupation</strong> - Sr. consultant - Respiratory, critical care & sleep medicines <br>
                <strong>Industry</strong> - Heath and wellness
              <br><br>
              M.B.B.S, <br> MD (Pulmonary Medicine),<br> FCCP (USA) <br>
                Formerly HOD, Max Hospital (vaishali) <br>
                Dr. Kamal Kishore Pandey is a Pulmonologist in Kaushambi,
                Ghaziabad and has an experience of 19 years in this field. <br>
                Dr. Kamal Kishore Pandey practices at Yashoda Super Speciality Hospital in Kaushambi, Ghaziabad. <br>
                He completed MBBS from University College of Medical Sciences & GTB Hospital, New Delhi in 1996
                and MD - Pulmonary Medicine from Vallabhbhai Patel Chest Institute in 2000. <br>

                He is a member of Life Member National College of Chest Physician (NCCP),Indian Chest Society,American
                College of Chest Physicians and European Respiratory Society (ERS). <br> Some of the services provided
                by the doctor
                are: Pleurisy,Bronchial Asthma Treatment,Pneumonia Treatment,Thoracoscopy and Chronic Obstructive
                Pulmonary
                Disease (COPD) Treatment etc.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Dr. Harish Pant -->
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                        <div class="p-6">
                            <img src="./img/HarishPant.jpg"
                            class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                            <h3 class="text-xl font-bold text-center text-slate-800">Dr. Harish Pant</h3>
                            <p class="text-orange-600 text-sm font-semibold text-center mb-4 italic">Chief Business Transformation Officer</p>
                            <p class="text-slate-600 text-sm leading-relaxed text-center">
                                <strong>Native Place</strong> - Kande, Uttarakhand,
                                                        India <br>
                                                        <strong>Occupation</strong> - Chief Business
                                                        Transformation Officer, Thinker, Advisor,
                                                        Mentor, Speaker, Author, Poet and Sustainability
                                                        Exponent <br>
                                                        <strong>Industry</strong> - NTF (India) Pvt. Ltd. ,
                                                        Automotive <br><br>
                            Transforming Future Mobility by
                                                        connecting Customer
                                                        Experiences, Concept Development,
                                                        Style and Function, Innovations and Technology,
                                                        Research, Design & Development,
                                                        Operational Excellence, After Sales Services and Network
                                                        convergence. Contributing
                                                        towards Sustainability by usage of Engineering Plastics,
                                                        Light Weight Materials and Polymers. <br>

                                                        Active member of Digital Transformation Team set up by
                                                        ACMA and SIAM. <br>

                                                        Leading and developing NextGen Leadership,
                                                        Entrepreneurs, Startups and Skills
                                                        Development initiatives across international and
                                                        national platforms through lectures,
                                                        workshops, presentations and knowledge share to the
                                                        students and faculty of top management
                                                        institutions, engineering colleges, international
                                                        schools and labs. <br>

                                                        A learner and enthusiast of Spirituality, Yoga, Quantum,
                                                        Innovation, Blockchain, Crypto Currency and Fin-tech.
                                                        <br>

                                                        Developed a pathbreaking Sustainability and Three
                                                        Currencies Models for Social, Environmental and Economic
                                                        (SEE)
                                                        Impacts. <br>

                                                        Global experience of thirty-four years in across
                                                        multi-sectors Aerospace, Automotive and Steel sectors.
                                                        <br>
                                                        Distinguished Alumnus and Fellow of Institution of
                                                        Engineers (FIE), MIET, Chartered Engineer (India),
                                                        Vice Chairman - IEI Alumni Association, Member of
                                                        Aeronautical Society of India and SAE and many other
                                                        chapters and associations. <br>
                                                        Recipient of Outstanding Corporate Award - MTC Global,
                                                        ET Polymer Award for Innovation,
                                                        The Machinist Machi Trophy for Safety, Immai Operational
                                                        Excellence Award, Mother Teresa
                                                        Excellence Award, Personality of the Year, Award for
                                                        Industrial Development and many others. <br>
                                                        Corporate Member - Confederation of Indian Industries,
                                                        APAC Advisory Board and Global Mentor -
                                                        ISCEA, Vice Chairman - Indian Value Engineering Society,
                                                        Treasury Elite, IFA Global, Gerson
                                                        Lehrman Group USA, Society of Indian Aerospace
                                                        Technologies, UK Trade and Investment and various
                                                        others. <br>

                                                        Advisor and Mentor of 100 Open Startups, SME One Source
                                                        Make in India foundation, ISCEA, INY and others.
                            </p>
                        </div>
                    </div>

                    <!-- Naveen Chandra Pandey -->
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                        <div class="p-6">
                        <img src="./img/NCPandey.jpg"
                            class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                            <h3 class="text-xl font-bold text-center text-slate-800">Naveen Chandra Pandey</h3>
                            <p class="text-blue-600 text-sm font-semibold text-center mb-4 italic">OSD, Global Schools Foundation</p>
                            <p class="text-slate-600 text-sm leading-relaxed text-center">
                                Dedicated professional in Management and Education with over 20 years of experience.
                            </p>
                        </div>
                    </div>

                    <!-- Pooran Chandra Kandpal -->
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                        <div class="p-6">
                            <img src="./img/PooranChandraKandpal.jpg"
                            class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                            <h3 class="text-xl font-bold text-center text-slate-800">Pooran Chandra Kandpal</h3>
                            <p class="text-purple-600 text-sm font-semibold text-center mb-4 italic">Author & Social Worker</p>
                            <p class="text-slate-600 text-sm leading-relaxed text-center">
                                Dedicated 45 years to Uttarakhand, Author of "Annadata Krishak".
                            </p>
                        </div>
                    </div>

                <!-- Prof. Naveen Lohani -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/naveenLohani.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Prof. Naveen Lohani</h3>
                        <p class="text-orange-600 text-sm font-semibold text-center mb-4 italic">Education & Leadership</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Vice Chancellor at Open University, Haldwani. A distinguished academic leader in Uttarakhand.
                        </p>
                    </div>
                </div>

                <!-- Dr. Girish Pant -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/GirishPant.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Dr. Girish Pant</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Humanitarian & Awardee</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- pooran pandey -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/puranpandey.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Pooran Pandey</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Healthcare & Education</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- birendar singh Nayal -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/BirendarSinghNayal.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Birendar Singh Nayal</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Accounts</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Ravi Mehra -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/RaviMehra.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Ravi Mehra</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Education and Social Services</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Raju Pandey -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/RajuPandey.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Raju Pandey</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">IT</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Harish Arya -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/HarishArya.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Harish Arya</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Accounts</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Lalit Mohan Lohani -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/LalitMohanLohani.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Lalit Mohan Lohani</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Construction</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Adv. Neeraj Pandey -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="img/AdvNeerajPandey.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Adv. Neeraj Pandey</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Accounts & Finance</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Dr. Prakash Chand Kandpal -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="./img/prakashkandpal.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Dr. Prakash Chand Kandpal</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Education</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- Sunaina Bisht -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="./img/sunaina.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">Sunaina Bisht/h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Theatre & Social work</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                <!-- पंडित हेमराज शास्त्री -->
                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2">
                    <div class="p-6">
                        <img src="./img/PHemraj.jpg" 
                        class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500">
                        <h3 class="text-xl font-bold text-center text-slate-800">पंडित हेमराज शास्त्री</h3>
                        <p class="text-yellow-600 text-sm font-semibold text-center mb-4 italic">Humanitarian & Awardee</p>
                        <p class="text-slate-600 text-sm leading-relaxed text-center">
                            Pravasi Bhartiya Samman Awardee 2019. Recognized for humanitarian work in UAE.
                        </p>
                    </div>
                </div>

                </div>
            </section>
        `,
  },
  "/gallery": {
    title: "NCP Gallery",
    html: `
        <section class="px-4 py-8 max-w-6xl mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-slate-800 tracking-tight">NCP Gallery</h2>
                <div class="h-1 w-16 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Modern Masonry Grid -->
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                ${[
                  "img/N1.png",
                  "img/N2.png",
                  "img/N3,png",
                  "img/N4.png",
                  "img/N5.png",
                  "img/N6.png",
                  "img/ncp-g1.jpg",
                  "img/ncp-g2.jpg",
                  "img/ncp-g3.jpg",
                  "img/ncp-g4.jpg",
                  "img/ncp-g5.jpg",
                  "img/ncp-g6.jpg",
                  "img/ncp-g7.jpg",
                  "img/ncp-g8.jpg",
                  "img/ncp-g9.jpg",
                  "img/ncp-g10.jpg",
                  "img/ncp-g11.jpg",
                  "img/ncp-g12.jpg",
                  "img/ncp-g13.jpg",
                  "img/ncp-g14.jpg",
                  "img/ncp-g15.jpg",
                  "img/ncp-g16.jpg",
                  "img/ncp-g17.jpg",
                  "img/ncp-g18.jpg",
                  "img/ncp-g19.jpg",
                  "img/ncp-g20.jpg",
                  "img/ncp-g21.jpg",
                  "img/ncp-g22.jpg",
                  "img/ncp-g23.jpg",
                  "img/ncp-g24.jpg",
                  "img/ncp-g25.jpg",
                  "img/ncp-g26.jpg",
                  "img/ncp-g27.jpg",
                  "img/ncp-g28.jpg",
                  "img/ncp-g29.jpg",
                  "img/ncp-g30.jpg",
                  "img/ncp-g31.jpg",
                  "img/ncp-g32.jpg",
                  "img/ncp-g33.jpg",
                  "img/ncp-g34.jpg",
                  "img/ncp-g35.jpg",
                  "img/ncp-g36.jpg",
                  "img/ncp-g37.jpg",
                  "img/ncp-g38.jpg",
                  "img/ncp-g39.jpg",
                  "img/ncp-g40.jpg",
                  "img/ncp-g41.jpg",
                  "img/ncp-g42.jpg",
                  "img/ncp-g43.jpg",
                  "img/ncp-g44.jpg",
                  "img/ncp-g45.jpg",
                  "img/ncp-g46.jpg",
                  "img/ncp-g47.jpg",
                  "img/ncp-g48.jpg",
                  "img/ncp-g49.jpg",
                  "img/ncp-g50.jpg",
                  "img/ncp-g51.jpg",
                  "img/ncp-g52.jpg",
                  "img/ncp-g53.jpg",
                  "img/ncp-g54.jpg",
                  "img/ncp-g55.jpg",
                  "img/ncp-g56.jpg",
                  "img/ncp-g57.jpg",
                  "img/ncp-g58.jpg",
                  "img/ncp-g59.jpg",
                  "img/ncp-g60.jpg",
                  "img/ncp-g61.jpg",
                  "img/ncp-g62.jpg",
                  "img/ncp-g63.jpg",
                  "img/ncp-g64.jpg",
                  "img/ncp-g65.jpg",
                ]
                  .map(
                    (src) => `
                    <div class="break-inside-avoid overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                        <img src="${src}" 
                             alt="Gallery Image" 
                             class="w-full h-auto block cursor-pointer hover:scale-105 transition-transform duration-500"
                             onerror="this.parentElement.style.display='none'"
                             onclick="openLightbox(this.src)">
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </section>

        <!-- Lightbox Modal -->
        <div id="lightbox" class="fixed inset-0 bg-black/95 z-[100] hidden flex items-center justify-center p-4 backdrop-blur-md" onclick="this.classList.add('hidden')">
            <img id="lightbox-img" src="" class="max-w-full max-h-[90vh] rounded-lg shadow-2xl">
        </div>
    `,
  },
  "/posts": {
    title: "Community Posts",
    html: `
        <section class="px-4 py-8 max-w-6xl mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-slate-800 tracking-tight">Community Videos</h2>
                <p class="text-slate-500 mt-2">Latest updates and event highlights from our YouTube channel.</p>
                <div class="h-1 w-16 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Video Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${[
                  {
                    id: "KYQqE_VQvC4",
                    title:
                      "हमारे देवभूमि उत्तराखंड के नैनीताल के डालकन्या ग्राम सभा का अद्भुत नजारा जय जन्म भूमि",
                  }, // Replace with your actual Video IDs
                  { id: "y_OJGTG1a8k", title: "हाय रे करोना" },
                  { id: "mydNaQHxMuo", title: "#कुमोनी कविता नानतिनाओं" },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                  {
                    id: "otCmwt7L8yI",
                    title:
                      "Brain drain or inefficient entrepreneur environment",
                  },
                ]
                  .map(
                    (video) => `
                    <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                        <!-- Responsive Video Container -->
                        <div class="relative w-full aspect-video bg-slate-200">
                            <iframe 
                                class="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/${video.id}" 
                                title="${video.title}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-slate-800 text-lg">${video.title}</h3>
                            <p class="text-slate-500 text-sm mt-1">Galaxy of UK Stars Official/Partner/Public Channel</p>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </section>
    `,
  },
};

// Add this to the global scope in app.js
window.openLightbox = (src) => {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.classList.remove("hidden");
};

const handleRouting = () => {
  // This ensures that even on local servers, the root path "/" is handled
  let path = window.location.pathname;

  // If you are on Live Server, sometimes the path includes the folder name.
  // This fix forces the home content if the path is empty or just a slash.
  if (path === "/" || path.includes("index.html")) {
    path = "/";
  }

  const page = content[path] || content["/"];
  const app = document.getElementById("app");

  if (app) {
    app.innerHTML = page.html;
    document.title = `${page.title} | Galaxy of UK Stars`;
  }
};

// Intercept Clicks
window.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const href = link.getAttribute("href");
    history.pushState(null, null, href);
    handleRouting();
  }
});

// Handle browser navigation (Back/Forward)
window.addEventListener("popstate", handleRouting);

// INITIAL LOAD: This is what makes the content visible on first open
document.addEventListener("DOMContentLoaded", handleRouting);
