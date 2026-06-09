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
    title: "Our Leadership Team",
    html: `
        <section class="px-4 py-12 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                ${[
                  {
                    name: "Naveen Chandra Pandey",
                    role: "OSD, Global Schools Foundation",
                    img: "./img/NCPandey.jpg",
                    desc: `He has over 20 years of diversified experience in the field of education. During his tenure, Mr. Pandey worked with Maharishi Vidya Mandir, Maharishi Institute of Management and Maharishi University of Management and Technology. Besides having a long-working experience in the education sector, Mr. Pandey also had the opportunity to have his hands in the legal and sales and marketing sectors as well. He worked with the Legal Department in the office of Hon’ble Dr. L.M. Singhvi, Senior Advocate Supreme Court of India and associated with the Sales & Marketing (Reliance and Karvy Insurance Broking Channel Partner for Tata AIG).<br><br>During his wide experience while working as Principal Private Secretary to Hon’ble Dr. L.M Singhvi, Mr. Pandey had an opportunity to closely observe and gain through his style of functioning in the Parliament of India as Member of Parliament Rajya Sabha (1998-2004) and with IGNCA Trust, Ministry of Culture, Govt of India as Private Secretary to President. He has rich experience of organizing International level corporate conferences, press meets and had made overseas visits to Turkey, Singapore, Dubai, Abu Dhabi, Macau and Hong Kong. Mr. Pandey holds Diploma in Modern Office Practice from Bhai Parmanand Institute of Business Studies (Delhi); a Bachelor of Commerce from Delhi University and MBA (Marketing) from The Institute of Advanced Studies in Education (IASE) Gandhi Vidya Mandir, Sardar Sahar, Rajasthan.<br><br>Mr. Pandey has been associated with the Global Schools Foundation since its establishment in 2002 as an onlooker when its Chairman & Co-Founder, Mr. Atul Temurnikar and Dr. L.M. Singhvi were contemplating a suitable name for the organization and actively joined the group in April 2010. He is settlor of Trusts called One Universe Educational Trust, Karnataka; Mother Earth Educational Trust, Madhya Pradesh; Green Earth Education Trust, Maharashtra; Holistic Education Trust, Maharashtra; Creative Education Trust, Maharashtra; Prodigy Development Trust, Noida; Talent Education Trust; Innovative Education Trust. He is also Vice Chairman of NGO called The Center for Indian Science and Philosophy.`,
                  },
                  // ... other members follow the same structure
                ]
                  .map(
                    (member, index) => `
                    <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all hover:-translate-y-2 flex flex-col">
                        <div class="p-6 flex-grow">
                            <img src="${member.img}" 
                                 class="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-500 mb-4">
                            <h3 class="text-xl font-bold text-center text-slate-800">${member.name}</h3>
                            <p class="text-blue-600 text-sm font-semibold text-center mb-4 italic">${member.role}</p>
                            
                            <!-- Expandable Description Container -->
                            <div id="desc-${index}" class="text-slate-600 text-sm leading-relaxed text-center line-clamp-5 transition-all duration-300">
                                ${member.desc}
                            </div>
                        </div>
                        
                        <!-- Toggle Link -->
                        <div class="px-6 pb-6 text-center">
                            <button onclick="toggleDescription(${index})" 
                                    id="btn-${index}"
                                    class="text-orange-600 text-xs font-bold uppercase tracking-wider hover:text-orange-700 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </section>
    `,
  },
  "/gallery": {
    title: "NCP Gallery",
    html: `
        <section class="px-4 py-8 max-w-4xl mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-slate-800 tracking-tight">NCP Gallery</h2>
                <div class="h-1 w-16 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Controlled Grid: 1 col on mobile, exactly 2 cols on tablet/desktop -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <div class="overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-slate-50">
                        <!-- aspect-video or aspect-[4/3] forces a uniform medium image size -->
                        <div class="relative w-full aspect-[4/3] overflow-hidden">
                            <img src="${src}" 
                                 alt="Gallery Image" 
                                 class="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                                 onerror="this.closest('.overflow-hidden').style.display='none'"
                                 onclick="openLightbox(this.src)">
                        </div>
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
        <section class="px-4 py-8 max-w-4xl mx-auto">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-slate-800 tracking-tight">Community Videos</h2>
                <p class="text-slate-500 mt-2">Latest updates and event highlights from our YouTube channel.</p>
                <div class="h-1 w-16 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Video Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${[
                  //7 June 2026 - youtube Link
                  {
                    id: "Cwi2KNmsCiA",
                    title: "गाजर के हलुवे में मीठा जहर...",
                  },
                  {
                    id: "0QhqRtuQV-U",
                    title: "वोट, जुनून और मंजिल की उलझन...",
                  },
                  {
                    id: "duXH-3moi9E",
                    title: "जहां क्रोध तहां काल...",
                  },
                  {
                    id: "EiO1AH2MVc0",
                    title: "कतु रंगिल कुमाऊं, कतु छबिल गढ़वाल ?",
                  },
                  {
                    id: "Ocqa5zpzRu0",
                    title: "शब्द के फूल और शब्द के शूल...",
                  },
                  {
                    id: "oi58uhIfACE",
                    title: "बेवजह का पति -पत्नी द्रुत संग्राम...",
                  },
                  {
                    id: "0oif7BLEIWU",
                    title: "हार्मोन असंतुलन से होता है महिलाओं में यह रोग...",
                  },
                  {
                    id: "FqgY7djAy_o",
                    title: "कर्मकाण्ड और मूर्ति पूजा पर क्या कहा उन्होंने...",
                  },
                  {
                    id: "HT_ZrFizJgs",
                    title: "गांधारिल आखां पर पट्टी नि बादण चैंछी !",
                  },
                  {
                    id: "4iBjhfHlrgU",
                    title: "तूने हमेशा मुझे मूर्ख और गंवार समझा...",
                  },
                  {
                    id: "uM135pQ-VG8",
                    title: "कवि सम्मेलन के ढीठ कवि...",
                  },
                  {
                    id: "2TObLX8t00g",
                    title: "बाबा फरीद और बाबा बुल्ले शाह ने क्या कहा...",
                  },
                  {
                    id: "e2Tf90yHzug",
                    title: "मूर्खों हैं बै उमीद करण ठुलि मूर्खता हइ",
                  },
                  {
                    id: "3XqBxli_FXM",
                    title: "कौन हैं ये भारतीय सेना के परमवीर...",
                  },
                  {
                    id: "BpmgW1vq6jU",
                    title: "गणतंत्र दिवस परेड विजय चौक से लालकिला...",
                  },
                  {
                    id: "bLhT99RaLkM",
                    title: "सरुलिक ग्वरफनार ब्यौल...",
                  },
                  {
                    id: "V8bLbnBGqw",
                    title: "",
                  },
                  {
                    id: "jWz5BrTJNag",
                    title: "जूते के अंदर का कंकर...",
                  },
                  {
                    id: "yK7STAqYgxE",
                    title: "बढ़ते हुए तापमान के मुख्य कारण...",
                  },
                  {
                    id: "lZdBOMPaCHw",
                    title: "भोजन करने के तीन कारण...",
                  },
                  {
                    id: "TtOWkH0jQs0",
                    title: "यात्रा में सुन - चांदिक जेवर और झपटमार",
                  },
                  {
                    id: "KKJbYvR_784",
                    title: "कैलसियम कार्बाइड से पके हुए फल की पहचान...",
                  },
                  {
                    id: "jNHaXp7CMZg",
                    title: "चोरी फिर सीना जोरी...",
                  },
                  {
                    id: "aD1igz92CKk",
                    title: "नीट पेपरा लिजी रुपैं कां बै आईं ?",
                  },
                  {
                    id: "wyJSOJvH_vk",
                    title: "ए बी सी डी बोलो, स्वास्थ्य की गठरी खोलो...",
                  },
                  {
                    id: "U_vsHBw-Z9Q",
                    title:
                      "👉 आधी रात को बच्चों की ये डिमांड आ गई 😳 | 1:30 AM Pizza Drama 🍕  | Family Vlog |",
                  },
                  {
                    id: "A2tykKuP510",
                    title: "बच्चों को सिखाओ ये पांच गीत...",
                  },
                  {
                    id: "aSJWyTk9k3U",
                    title: "शहीदोंकि माटि छ यां वीरोंकि पलटन",
                  },
                  {
                    id: "9Cn2o2mcEy4",
                    title: "श्रद्धांजलि का मतलब...",
                  },
                  {
                    id: "Ogbdk7tXjgU",
                    title: "नना दगै गणतंत्र तिरंगकि बात",
                  },
                  {
                    id: "9vuGgGK3WyY",
                    title:
                      "कौन हैं ग्लोबल वार्मिंग के जिम्मेदार ? पृथ्वी दिवस का सवाल ?",
                  },
                  {
                    id: "tfHqdT5OLuM",
                    title: "अंडा तोड़ने की लड़ाई...",
                  },
                  {
                    id: "9hI6rWBAEdU",
                    title:
                      "PATHAK - Freeverse #30 | 99 Build Freestyle | The Streets Production",
                  },
                  {
                    id: "VXY-3ljLl5M",
                    title: "गंगाक कंकाव, को करल समाव ?",
                  },
                  {
                    id: "IfE1eDp3dy8",
                    title:
                      "SECRET स्वाद 😱 | वाह KUKU उस्ताद! ये Trick कोई नहीं बताएगा | Easy Kitchen Recipe | Family Vlog",
                  },
                  {
                    id: "G3rrSQNRHlo",
                    title: "रहट की खट खट, घोड़ा पानी छोड़ा...",
                  },
                  {
                    id: "hJhASEXT2f8",
                    title: "रामायण और महाभारत में अंतर...",
                  },
                  {
                    id: "TBw7y02N4w8",
                    title: "बोर्डाक इम्तहान में फेल नि हुन अगर...?",
                  },
                  {
                    id: "5j8dgtwJ2Xo",
                    title: "हल्दी समारोह में फूलों की मनमोहक सजावट...",
                  },
                  {
                    id: "ge6mnGgERgA",
                    title:
                      "मसाण उद्योग में दास.डंगरी. गणतू. पुछ्यारि रावघोव...",
                  },
                  {
                    id: "R5qsCBynPdA",
                    title: "केवल पांच बातें हैं इसमें...",
                  },
                  {
                    id: "Yf6KuYE-cE8",
                    title: "निर्जीव बेकार वस्तुओं का सजीव गार्डन...",
                  },
                  {
                    id: "NGAtJ2Q38uk",
                    title: "कान लगै बेर भै रईं घर फोड़णी",
                  },
                  {
                    id: "ekXRE35RPkA",
                    title: "इस्कूली नना लिजी कुमाउनी में सरस्वती वंदना",
                  },
                  {
                    id: "X12BrNYh3Yg",
                    title:
                      "Atthu को लू लग गई 😱 पूरा घर परेशान! | Family Vlog |",
                  },
                  {
                    id: "kLolLgNFl8U",
                    title: "हुक्का -पानी, न्यौता -पट्टा सब बंद कर दिया...",
                  },
                  {
                    id: "XBlTh6YSfY4",
                    title: "🎉 250 Subscribers पूरे 😍 आप सबका धन्यवाद ❤️",
                  },
                  {
                    id: "e8tZhpqsgEc",
                    title: "देशकि बात हो देशकि याद हो",
                  },
                  {
                    id: "PDPm91zkTGc",
                    title: "कौन हैं सम्मान के हकदार ?",
                  },
                  {
                    id: "2jjEwFUDVXI",
                    title:
                      "घर में छिपकली? 😱 1 ट्रिक में गायब! | Pest Control Expert Trick (100% Works)",
                  },
                  {
                    id: "3yOFm4U2iQY",
                    title: "सड़क घेरे हुए बेरी की झाड़ी काटने हेतु धन्यवाद...",
                  },
                  {
                    id: "QuEQ__NRnqU",
                    title:
                      "पति बोले: तुम ही चली जाओ 😳 | Grocery भी अकेले! Family Vlog |",
                  },
                  {
                    id: "RQGvyM5dfxI",
                    title: "हमारे यहां से जाने के बाद की बात...",
                  },
                  {
                    id: "C1dQY4AaXHo",
                    title: "सच बोलूं तो मरना है, झूठ बोलूं तो मौत...",
                  },
                  {
                    id: "-9FmA49zG28",
                    title: "सासु - ब्वारिक गिजौव - नौकझौंक",
                  },
                  {
                    id: "kqGfrwrJz0s",
                    title: "कुंवारी लड़कियों को शादी से डर...",
                  },
                  {
                    id: "9tz94pPMjaI",
                    title: "चूहों को दाना व चींटी को आटा, पार्क को घाटा ...",
                  },
                  {
                    id: "sA-v1tiKUEQ",
                    title: "राजधानी एक दिन जरूर जालि गैरसैण",
                  },
                  {
                    id: "11MdSM1f72o",
                    title:
                      "गोकर्ण धुंधकारी उपाख्यान अद्भुत वर्णन अवश्य श्रवण करें 🚩#viral #viralvideo #katha #bhagwat #trending",
                  },
                  {
                    id: "j7Eu3tUygjQ",
                    title: "विलाप क्यों करते हो, वापस जाओ...",
                  },
                  {
                    id: "RYsT1aezopo",
                    title:
                      "बारिश में गोलगप्पे खाये 😍 फिर मोमोस भी उड़ाए 🌧️😋 Family Vlog",
                  },
                  {
                    id: "CpUAsNVmHM8",
                    title: "मधुमक्खियां पढ़ा गई सही पाठ...",
                  },
                  {
                    id: "YY25LG8oOO0",
                    title: "देखा जो सपना वह साकार हुआ...",
                  },
                  {
                    id: "APXYM3mnAcE",
                    title: "आइसक्रीम 😳 या धनिये की चटनी? 🤢 पूरा मूड खराब!",
                  },
                  {
                    id: "HZeLNFLBVDo",
                    title: "पक्षियों को चारा, पर्यावरण व न्याय की अवहेलना...",
                  },
                  {
                    id: "8exImmBgP4s",
                    title: "कौन सिखाएगा हमें सिविक सैंस...",
                  },
                  {
                    id: "wxjsyv3_1zs",
                    title: "मासाप की ट्रेन का समय छुट्टी से पहले...",
                  },
                  {
                    id: "AwjBmgzRkII",
                    title: "लड़के वाले आ रहे हैं, जरा ठीक से रहना...",
                  },
                  {
                    id: "jM1yz2I9Gus",
                    title: "किलै हिंछ सड़क दुर्घटना ?",
                  },
                  {
                    id: "ky8mdecuklo",
                    title: "ऋषिगंगा में कुदरत का तांडव...",
                  },
                  {
                    id: "YC_Tjwy-h3c",
                    title: "इजक कर्ज है क्वे उऋण नि है सकन",
                  },
                  {
                    id: "e5sYOFgJk58",
                    title:
                      "Bala Goriya | गोल्ज्यू देवता | Official Kumaoni Movie Teaser 🔔 | Out Now ⚡",
                  },
                  {
                    id: "_Fyx2HDNeZg",
                    title: "किचन में मोबाइल हुड़दंग...",
                  },
                  {
                    id: "UL979ZbfbQw",
                    title: "सिक्ख संगत की सीख...",
                  },
                  {
                    id: "0NZvqXfLYHI",
                    title: "बिसनी देवी किलै गे जेल ?",
                  },
                  {
                    id: "TaAX38XY7jU",
                    title: "रंगमंच में हमारा किरदार...",
                  },
                  {
                    id: "4qjz6tnPCMk",
                    title: "एक पव्वा रोज, छत्तीस हजार की डोज...",
                  },
                  {
                    id: "1OmGG2H3JsQ",
                    title: "घरक माहौलकि जिम्मेदारी कैकि छ ?",
                  },
                  {
                    id: "QNWAnbxU0Yw",
                    title: "शादी में मंत्र का मखौल, कैमरा वीडियो की चौल...",
                  },
                  {
                    id: "SQhYINwh6o4",
                    title: "कभैं झन करिया हल्लाबड़ी !",
                  },
                  {
                    id: "uKILW9yL-0w",
                    title: "गढ़वालि भाषा लै बोल सकदूं मि",
                  },
                  {
                    id: "zhoiOqrMoyU",
                    title: "मौन रहना मतलब डरपोक नहीं...",
                  },
                  {
                    id: "ddD2qQnzwqE",
                    title: "Few words in English, Why English ?",
                  },
                  {
                    id: "kmuyNw99TXY",
                    title: "घास हरी होती है या लाल ?",
                  },
                  {
                    id: "nbPa4Jx4-RE",
                    title: "सरकारी स्कूल की मैडम की शादी...",
                  },
                  {
                    id: "8ttZgLImgJ4",
                    title: "अंधभक्ति, अंधश्रद्धा और अंधानुकरण...",
                  },
                  {
                    id: "7i0S4Blxwlo",
                    title: "रात कै टिटियां (टिटिहरी) खुट अगासकि तरफ ?",
                  },
                  {
                    id: "u8MQn6trH2Y",
                    title: "छिपा हुआ खतरनाक रोग...",
                  },
                  {
                    id: "c3knBrlbuPA",
                    title: "कहां है प्रयाग कुंभ का आई आई टी बाबा...",
                  },
                  {
                    id: "myOX7_DWu-o",
                    title: "नाम - बदनामक भोगि कुड़ी पुरुख",
                  },
                  {
                    id: "oR7qbV-fuTU",
                    title: "काला कुत्ता बनाम सफेद कुत्ता...",
                  },
                  {
                    id: "KZGTfQNHdQc",
                    title: "बौज्यू (पिता जी) मिकैं बामण बनूण चांछी !",
                  },
                  {
                    id: "CSV86IPtghk",
                    title: "इंद्र की पूजा क्यों नहीं होती ?",
                  },
                  {
                    id: "6obqw6j5-Sc",
                    title: "शुरुआत में हर काम कठिन...",
                  },
                  {
                    id: "UVmBNkimRm4",
                    title: "Address by Lokesh Navani",
                  },
                  {
                    id: "31VG4G2BRGs",
                    title: "जंगव उजाड़ि है आग लगुणियांल",
                  },
                  {
                    id: "iO3eC_ZXUs0",
                    title: "भूख. भय. निंद्रा. मैथुन...",
                  },
                  {
                    id: "i79s417Z9BY",
                    title: "' उज्याव' में पंच प्रयाग, चार धाम।",
                  },
                  {
                    id: "2GUDPZsQh0c",
                    title: "आशा के रोशन चिराग",
                  },
                  {
                    id: "hBCLXatlF9U",
                    title: "कारगिल के रणबांकुरे, युद्ध 1999",
                  },
                  {
                    id: "bSTSqgrVI2Y",
                    title: "हमार कलाकार",
                  },
                  {
                    id: "X9o5xiZ83wQ",
                    title: "खड़ी होली (गवाड़) द्वाराहाट, अल्मोड़ा की.......",
                  },
                  {
                    id: "PZ7oXm-bB3Q",
                    title: "101 पाथरोंकि बुनैद",
                  },
                  {
                    id: "DB3NJYpiHVE",
                    title: "जागर नहीं है मर्ज की दवा",
                  },
                  {
                    id: "hDocfPWAOto",
                    title: "बंजर में अंकुर का बंधुआ हलिया",
                  },
                  {
                    id: "xGL-UPkSdKw",
                    title: "य बात म्यार समझ नि आइ",
                  },
                  {
                    id: "DEShRE1nnjg",
                    title: "'बटौव' पाँख लगै बेर उड़ण चानू",
                  },
                  {
                    id: "AJb5yWMiqbs",
                    title: "मिलावट का कहर शराब में जहर",
                  },
                  {
                    id: "ktQq3kUtpPs",
                    title: "इंडियागेट में दूल्हे का बाप",
                  },
                  {
                    id: "ZDRIGQrJjb0",
                    title: "दाड़िकि बात",
                  },
                  {
                    id: "8wrj8W9z70M",
                    title: "होली 2023",
                  },
                  {
                    id: "mX4acsWnTIg",
                    title: "हिम्मत बटोव में उ खतरनाक मंजर",
                  },
                  {
                    id: "75P9HvsvmVs",
                    title: "आदमी की शक्ल में आदमखोर",
                  },
                  {
                    id: "JvuGytGKlQ0",
                    title: "खड़ी होली 2023",
                  },
                  {
                    id: "4Vy0ZVti2e8",
                    title: "उत्तराखंड एक दर्पण में गबरनल",
                  },
                  {
                    id: "aVmbl7ZKcfY",
                    title: "मि तोप जसि छी",
                  },
                  {
                    id: "PX2-AUd4228",
                    title: "सतरंगी इंद्रैणि में झट्यालू बंदूक",
                  },
                  {
                    id: "bh0OWdm8THQ",
                    title: "खड़ी होली 2023",
                  },
                  {
                    id: "UkBWo59czt0",
                    title: "जयमाला में बेवड़े",
                  },
                  {
                    id: "DKaUsjC1MIs",
                    title: "खड़ी होली 2023",
                  },
                  {
                    id: "qIQOuasY_oM",
                    title: "होली का मतलब शराब हो गया आज",
                  },
                  {
                    id: "k7Mu7d7tClw",
                    title: "भूतिया शकल, आंख छिया चुइम",
                  },
                  {
                    id: "ZrQ0kbsNxXY",
                    title: "ठांगर में भल फरफरा लगुल",
                  },
                  {
                    id: "sczdXh_4FJU",
                    title: "खड़ी होली 2023",
                  },
                  {
                    id: "lYUyo8LV4IE",
                    title: "सच की पारखी, मेरी सहेली मेरी मां",
                  },
                  {
                    id: "ZVu6Uq7XvFs",
                    title: "गदुवा गुटुक",
                  },
                  {
                    id: "uF3k-S7_4Kg",
                    title: "कसम वैद, प्यार प्रेम खालि...",
                  },
                  {
                    id: "HrH3wLHb_4Y",
                    title: "माया नहीं महान",
                  },
                  {
                    id: "SS9gNo6Cwe8",
                    title: "यथार्थ के आईने में 101 तस्वीर",
                  },
                  {
                    id: "0ZnahrVxAeQ",
                    title: "बेडू पाको बारियो मासा (बारामासा नहीं)",
                  },
                  {
                    id: "BjlnqvYsK_0",
                    title: "जिंदगी की जंग में निराला गोताखोर",
                  },
                  {
                    id: "m_NzGZ2xS6U",
                    title: "रमुवक ब्या",
                  },
                  {
                    id: "KyyNzv1hGss",
                    title: "शेरदा अनपढ़क द्वि दिनक ड्यर",
                  },
                  {
                    id: "UXAfyUo1s4Q",
                    title: "हम नहीं सुधरे",
                  },
                  {
                    id: "s5uhXtx7TLg",
                    title: "उजाले की ओर, पूजास्थलों में चोर",
                  },
                  {
                    id: "32RiKNLa4i8",
                    title: "च्यलक रिजल्ट ऐरौ नम्बर छीं कम।",
                  },
                  {
                    id: "Gawx9BRe62Y",
                    title: "छिलुक जगि क्वैल बनि गोय",
                  },
                  {
                    id: "OkLBM20uUhY",
                    title: "यदि न बोता अन्न बीज तू...",
                  },
                  {
                    id: "eyRr-p-tLL0",
                    title: "माटी की महक में एक मुहल्ले का 15 अगस्त।",
                  },
                  {
                    id: "SRuZQ6fru24",
                    title: "झन करिया अभिमान, जानै जानै कै गया।",
                  },
                  {
                    id: "Z_63kunMAjA",
                    title: "नवज्योति की हिम्मत से नशामुक्ति की ओर",
                  },
                  {
                    id: "0IFSB-PbkTA",
                    title:
                      "संवत 2080 : पिंगल : नामक संवत्सर की विशेष जानकारी  एवं कलश स्थापना का शुभ मुहूर्त  अवश्य श्रवण करें",
                  },
                  {
                    id: "oL_tNL33jv8",
                    title: "काव बासैं रौ काव",
                  },
                  {
                    id: "M3VgGbFJv-E",
                    title: "प्यौलपिटार में हमरि भाषाक जेवर",
                  },
                  {
                    id: "tuYiU1Ofplw",
                    title: "एक निराला मेजर सहाब",
                  },
                  {
                    id: "X79IMk57lEI",
                    title: "द्वाराहाट का स्याल्दे मेला",
                  },
                  {
                    id: "wjnm3XWnn_I",
                    title: "विधवा - दर्द, कौन सुने सिसकी ?",
                  },
                  {
                    id: "1ak6LCFdoEw",
                    title: "नातिणी लिजी गूड़ डाई मैगी",
                  },
                  {
                    id: "v1rDtWV3ys4",
                    title: "टी बी (क्षय रोग) है बचि सकूं इंसान",
                  },
                  {
                    id: "cTKHO7Mssv8",
                    title: "कुमाऊनी संस्कृति में झोड़ा",
                  },
                  {
                    id: "LyaARNndfgk",
                    title: "खद्दर के कफन में लिपटने की चाह",
                  },
                  {
                    id: "p-S1En25UGU",
                    title: "रातिब्याण कै जब डवां में...",
                  },
                  {
                    id: "3q9l8JhkBKY",
                    title: "वह आग से खेला",
                  },
                  {
                    id: "CaIcJDgufwY",
                    title: "साधु वेश में ढोंगी साधु",
                  },
                  {
                    id: "wT9GzVDr9mQ",
                    title: "हमार सटबटू नान",
                  },
                  {
                    id: "SbT8_dbTYSo",
                    title: "द्वाराहाट का स्याल्दे बिखोती मेला",
                  },
                  {
                    id: "SkQeOe4M0bM",
                    title: "मिशन मेधावी स्मृति सम्मान",
                  },
                  {
                    id: "861OEP6TlPM",
                    title: "' लमक्याव' मेरि आपणि कांथ (मेरी आत्मकथा)",
                  },
                  {
                    id: "FMBWcqgQCDo",
                    title: "हिम्मत बटोव, टुटिए झन",
                  },
                  {
                    id: "HASA5VifHVc",
                    title: "पॉकेट मनी का ऑडिट",
                  },
                  {
                    id: "CgJff56bpZg",
                    title: "ततुक नि लगा उदेख, कैगो गिरदा",
                  },
                  {
                    id: "JtreSKV3vd8",
                    title: "चूहे, कुत्ते, हा हा व ठक ठक का बखेड़ा",
                  },
                  {
                    id: "MazL3Sl-Pgo",
                    title: "जिंदगी की जंग में हम ही बन गए हैं धृतराष्ट्र",
                  },
                  {
                    id: "cEwiiVYsoUc",
                    title: "पुर गौं बगि शहर न्हैगो",
                  },
                  {
                    id: "JB-AGbMKS_8",
                    title: "हिम्मतल करो गलतक विद्रोह !",
                  },
                  {
                    id: "g_kviTEGR9w",
                    title:
                      "Kusumlata Kediya ने RSS , Left & Right Wing और Geo Politics पर Bhojparv में शानदार Speech दिया",
                  },
                  {
                    id: "QI2IQeaGfoM",
                    title: "स्मृति लहर की पांच महामनीषियां",
                  },
                  {
                    id: "cAjG5IeEf2Y",
                    title: "सुन लो पर किसी से कहना मत",
                  },
                  {
                    id: "aXWFStdEgjU",
                    title: "उत्तरैणी दिन बगै देे कुलीबेगारक रजिस्टर",
                  },
                  {
                    id: "mUuLIi5VK7w",
                    title: "तुम नि डरो रे",
                  },
                  {
                    id: "0jJQXK51J3s",
                    title: "हमारे इक्कीस परमवीर",
                  },
                  {
                    id: "ANWBwP2Mtds",
                    title: "बेटियों ने तोड़ी रूढ़िवादी परंपरा",
                  },
                  {
                    id: "ZAeDMlHKkZ8",
                    title: "दौलतिया नाचणी हैरौ दास भगोतिया",
                  },
                  {
                    id: "041malBi3ec",
                    title: "देशाका लिजी तुमुलै ज्यान आपणी लगाय",
                  },
                  {
                    id: "6_ij0qZrryw",
                    title: "बच्चों व बड़ों का गणतंत्र दिवस ज्ञान?",
                  },
                  {
                    id: "AKVoEVHjwds",
                    title: "सगाई व शादी एक ही दिन",
                  },
                  {
                    id: "ICOt_Qpg4DQ",
                    title: "तमाकु पिहैं भ्यार जौ",
                  },
                  {
                    id: "VII6oXJRPOg",
                    title: "काम में दम होगा तो जरूर बजेगी  ताली ?",
                  },
                  {
                    id: "ZcgfDprW_Ig",
                    title: "सांची के जन्मदिन में बेला गुलाब जूही चंपा चमेली",
                  },
                  {
                    id: "zsZv5Z13ua4",
                    title: "हरीं सागकि कढै भ्यार च्वटै",
                  },
                  {
                    id: "7NdcXfdaPNw",
                    title: "लगौ पुरि शक्ति, करो सैणि भक्ति",
                  },
                  {
                    id: "F_YcwpQryDM",
                    title: "मेहनत का रंग सार्थक सोच के संग",
                  },
                  {
                    id: "Dpdxzl81dYA",
                    title: "ज्वात लागा लाग इज्जत रैगे",
                  },
                  {
                    id: "WwyFrvP84vk",
                    title: "फेसबुक वॉट्सएप रंगिल मोबाइल",
                  },
                  {
                    id: "m4eD0qMgFkw",
                    title: "बड़े अद्भुत, अनोखे और निराले थे कलाम साहब !",
                  },
                  {
                    id: "07npCzywlXk",
                    title: "बारह दिन का सूतक व मृत्युभोज",
                  },
                  {
                    id: "BXKfpoNwDjg",
                    title: "बिन घरवाइ नि हुनि दिवाइ",
                  },
                  {
                    id: "hI-pSw_PulM",
                    title: "खिमका आपणि ब्योलि हैं नि बलै सक",
                  },
                  {
                    id: "xKNl6m5X0z0",
                    title: "चाट भले ही तू मुंह उसका",
                  },
                  {
                    id: "LAKLD8BPH1k",
                    title:
                      "दुनिया का सबसे शुद्ध और गुणकारी अमृत जैसा पानी (Structured Water) घर पर बनाए | Manas Samarth",
                  },
                  {
                    id: "wupqpBEJEkA",
                    title: "बिखोती मेला 2023",
                  },
                  {
                    id: "kwNl-7DIPZ8",
                    title: "बाबा साहेब बैसाखी चैतला फूलधेई स्याल्दे बिखोती",
                  },
                  {
                    id: "TuwW952uDpQ",
                    title:
                      "बिखोती मेला 2023 में, सभी गांव अपने अपने डेरे में........",
                  },
                  {
                    id: "L0ZuK3ILC88",
                    title: "रक्त की अविरल धार, रक्तदान 151 बार",
                  },
                  {
                    id: "9zG9wI-6XRE",
                    title: "कुछ बेड़ियां टूट चुकी, कुछ तोड़नी हैं।",
                  },
                  {
                    id: "71nAr95CmAI",
                    title: "स्याल्दे-बिखोती मेला 2023 में शानदार झोड़ा",
                  },
                  {
                    id: "4uFbb-wYiN0",
                    title: "पिरमू मास्टरकि डाड़",
                  },
                  {
                    id: "6ni7e_ZA5Hs",
                    title: "सबूंक अलग द्याप्त अलग मंदिर",
                  },
                  {
                    id: "oatRwcnRjvQ",
                    title: "2023 के स्याल्दे मेले की एक शानदार झलक",
                  },
                  {
                    id: "pSuSdjmwOmk",
                    title: "140 महामनखियों की बात",
                  },
                  {
                    id: "StW5uqlhWbQ",
                    title: "2525 कि मी लंबी गंगा का संताप",
                  },
                  {
                    id: "twEsEkZwnt0",
                    title: "' सांचि ' बचुलि, झुटि जनुलि",
                  },
                  {
                    id: "Z4mjtCoq0A",
                    title: "",
                  },
                  {
                    id: "7sXcOCD76x0",
                    title: "नोट गाजर मूली धनिया जूते",
                  },
                  {
                    id: "xxd4Kd2HG7I",
                    title: "परंपरा के नाम पशुबलि मन्नत ? हम भी बदलें।",
                  },
                  {
                    id: "xo0bI07pXV4",
                    title: "उकाव -होराव में नंदक मिजाट",
                  },
                  {
                    id: "eiTb9Lz_fGY",
                    title: "गांधीज्यू चै रौनी आपणि तस्वीर बै",
                  },
                  {
                    id: "ZSMBNzPDcUk",
                    title: "भक्ति के नाम से चोरी",
                  },
                  {
                    id: "mmZ2HKjlAek",
                    title: "पढ़ी - लेखियांक हाल",
                  },
                  {
                    id: "ZQ4ryvq0xVo",
                    title: "भैटी भैटिए पटै जानी घुन",
                  },
                  {
                    id: "DcWsP-ewajE",
                    title: "पूजा प्रार्थना भक्ति आराधना",
                  },
                  {
                    id: "rYq0ExMlxvI",
                    title: "ख्वार पिठ्या गाव में माव,हमार नेता हाय तेताव",
                  },
                  {
                    id: "UvjahKafET0",
                    title: "द्वि हजार बीस में पैल लौकडाउन",
                  },
                  {
                    id: "9UjmrtPDZjk",
                    title: "पोखर के मोती हैं कप्तान साब",
                  },
                  {
                    id: "Yzao4tT-fNE",
                    title: "व्यथित यमुना रोवे अपने हाल पर",
                  },
                  {
                    id: "1BJG-BIJ-68",
                    title: "अहा रे ! सबूं हैं हइ मुकस्यार",
                  },
                  {
                    id: "UPnN62FNbYQ",
                    title: "कोरोनाल सतै गंगा",
                  },
                  {
                    id: "Ec9nQd715-Y",
                    title: "शब्द के घाव पर शब्द की औषधि",
                  },
                  {
                    id: "w4Skhyo58BY",
                    title: "गौंत पिई जस मुखड़ बनै दे।",
                  },
                  {
                    id: "KsMMz7Co1Jk",
                    title: "गौं-गाड़ घर -घर पुजि शराब",
                  },
                  {
                    id: "MnKtotDJR6w",
                    title: "पोते का मंत्र दादी के नाम",
                  },
                  {
                    id: "wSjWidB7ej8",
                    title: "मुनइ ठाड़ि करो घुना में टोप के बातकि ?",
                  },
                  {
                    id: "0D2ZYGy_Yms",
                    title: "नेताओं का कुर्सी मोह",
                  },
                  {
                    id: "v035RNobjms",
                    title: "झिटघड़ि लै इज बण नि जो।",
                  },
                  {
                    id: "wlHaKjs3U6k",
                    title: "अनेकता में एकता, अलग -अलग रंग वेश।",
                  },
                  {
                    id: "aSJWyTk9k3U",
                    title: "शहीदोंकि माटि छ यां वीरोंकि पलटन",
                  },
                  {
                    id: "61-94WEBLlE",
                    title: "उत्सर्जन बढ़ा, जलवायु चक्र बिगड़ा",
                  },
                  {
                    id: "Ogbdk7tXjgU",
                    title: "नना दगै गणतंत्र तिरंगकि बात",
                  },
                  {
                    id: "jj7P27sAeZA",
                    title: "हिन्द का सैनिक न्यारा",
                  },
                  {
                    id: "VbYcyEpCzpY",
                    title:
                      'Utteranchal Diaries ,its a introduction episode of   "Utteranchal Diaries" please Subscribe channel',
                  },
                  {
                    id: "IkshKj1Pd2o",
                    title: "मासैप चुलफन फैरीं",
                  },
                  {
                    id: "oZiO82uNAKw",
                    title: "आदमी को इंसान बनाती है कविता",
                  },
                  {
                    id: "4mDCZVE2jQ0",
                    title: "आंखरोंकि मस्याव छ कविता",
                  },
                  {
                    id: "sCMYK2k9Ea8",
                    title: "नफ़रत की हांडी में अहंकारी पुलाव",
                  },
                  {
                    id: "J9yIDn9Q16Y",
                    title: "नि मिल मंगली बर",
                  },
                  {
                    id: "Ql7GNzv2Rk8",
                    title: "ग्रहण खगोलीय घटना, काहे राहू- केतू रटना",
                  },
                  {
                    id: "YC_Tjwy-h3c",
                    title: "इजक कर्ज है क्वे उऋण नि है सकन",
                  },
                  {
                    id: "k617NmuOO0g",
                    title: "मां के कर्ज से कोई उऋण नहीं हो सकता",
                  },
                  {
                    id: "bM4Vcorz68A",
                    title: "मि किलै चणी रनू ?",
                  },
                  {
                    id: "i9SLt5WO1ow",
                    title: "ऐसी मेरी सोच कहां ?",
                  },
                  {
                    id: "NUV5sdut7vY",
                    title: "कुदरत दगै नि करो छेड़छाड़",
                  },
                  {
                    id: "fzsod8q3Q5A",
                    title: "लालच की मृगतृष्णा है लाटरी",
                  },
                  {
                    id: "Ei1z-gjTBzM",
                    title: "बिन पाणि में जाइए कसी आल बौं काटण ?",
                  },
                  {
                    id: "IlfAS6JM3hM",
                    title: "इतनी शक्ति हमें देना",
                  },
                  {
                    id: "x5ZTmd2J_Uc",
                    title: "डॉ हेमा उनियाल, एक बहुआयामी व्यक्तित्व",
                  },
                  {
                    id: "bDcrZiXyXAk",
                    title:
                      "साहित्यकार एवम कविवर श्री पूरन चंद्र कांडपाल से डॉ.हेमा उनियाल की वार्ता।",
                  },
                  {
                    id: "PoH6rCZT7dE",
                    title: "गुसैं, लक्ष्मण छि सुमित्रा नंदन पंत",
                  },
                  {
                    id: "jOEeqnBnyNc",
                    title: "जुगाड़बाजी से अख़बार में नाम",
                  },
                  {
                    id: "t84zHsWprFw",
                    title: "उत्तराखंड में स्यैणियांकि व्यथा",
                  },
                  {
                    id: "VLmnFWkYJa4",
                    title: "पैली बै मै-बाप नना पर नजर धरछी",
                  },
                  {
                    id: "hbuTQkJCxik",
                    title: "संस्कारी बहू",
                  },
                  {
                    id: "b3lB3fm33S8",
                    title: "भ्रष्टाचार का अजगर",
                  },
                  {
                    id: "TBw7y02N4w8",
                    title: "बोर्डाक इम्तहान में फेल नि हुन अगर...?",
                  },
                  {
                    id: "P--bYBbZUPM",
                    title: "बहरे कान न जाए सिसकी",
                  },
                  {
                    id: "eu3Xcxbrp4w",
                    title: "जब जंतर मंतर लागि किसान संसद...",
                  },
                  {
                    id: "mi4KYU5P8ZE",
                    title: "बोर्ड परीक्षा में फेल नहीं होते यदि...",
                  },
                  {
                    id: "VXY-3ljLl5M",
                    title: "गंगाक कंकाव, को करल समाव ?",
                  },
                  {
                    id: "B4AOEPn8usA",
                    title: "गुटखा तम्बाकू धूम्रपान, लहू तेरा पी रहे सुनसान।",
                  },
                  {
                    id: "DRBMM1kb58A",
                    title: "कर्तव्य पथ पर 11 अशोक चक्र",
                  },
                  {
                    id: "NGAtJ2Q38uk",
                    title: "कान लगै बेर भै रईं घर फोड़णी",
                  },
                  {
                    id: "jc99bBX3tgM",
                    title: "संविधान को जानें तो सही...",
                  },
                  {
                    id: "QCTwjrm6XFM",
                    title: "पाणि जंगव जमीन कैं माफिया खैगो",
                  },
                  {
                    id: "1DphDW5Mh_o",
                    title: "शराबी पति तो पत्नी क्या करे?",
                  },
                  {
                    id: "uDqD9DojbZ0",
                    title: "डाक्टर कसाई बने भ्रूण हत्या कर रहे",
                  },
                  {
                    id: "SU_LAUFpMDc",
                    title: "गौं में ब्या- काज लै मुश्किलल निभैं रईं",
                  },
                  {
                    id: "o7THwezWmsI",
                    title: "तेरी सलामती पर अगिनत हुए कुर्बान",
                  },
                  {
                    id: "uNGXmCG9A78",
                    title: "फूलों दगाड़ भड्ड कर्यल गदु मर्च",
                  },
                  {
                    id: "lXhxguTqGfw",
                    title: "बत्तीस दुश्मनों के बीच जी रही हूं मैं।",
                  },
                  {
                    id: "ekXRE35RPkA",
                    title: "इस्कूली नना लिजी कुमाउनी में सरस्वती वंदना",
                  },
                  {
                    id: "02Xasq4pHE0",
                    title: "मूर्ति विसर्जन का विकल्प",
                  },
                  {
                    id: "DkImm13YNCo",
                    title: "हीरा सिंह राणा कैं उनरै गीतों में श्रद्धांजलि",
                  },
                  {
                    id: "e8tZhpqsgEc",
                    title: "देशकि बात हो देशकि याद हो",
                  },
                  {
                    id: "97AvPZlTL1Q",
                    title: "दिन उजला क्यों रात है काली ?",
                  },
                  {
                    id: "rGj8iGbcpwM",
                    title: "लघु भारत दिल्ली की सैर",
                  },
                  {
                    id: "BbtVR6xRZmI",
                    title: "झिमौड़ अंगनार लै बनि जानी",
                  },
                  {
                    id: "IopFRIL84Y0",
                    title: "दुख- सुख के जो पाठ पाठ पढ़ाए, याद मुझे आ जाते हैं।",
                  },
                  {
                    id: "juy4xQFypcU",
                    title: "बिन पुछिए अकल बतुणियांक जोर हैगो",
                  },
                  {
                    id: "ctHLz842RkY",
                    title: "क्या कहती है रेल?",
                  },
                  {
                    id: "K_D0Vex6yj4",
                    title: "योग या योगा ?",
                  },
                  {
                    id: "4iTvqSH4lIM",
                    title: "चमोली जिल्लकि ऋषिगंगा में आंसु",
                  },
                  {
                    id: "JkzBOmzllKQ",
                    title: "226.A से J - दस अक्षर में स्वास्थ्य",
                  },
                  {
                    id: "N6lZ6oqY6L0",
                    title: "रावणाक तानतोफान और डायलॉग",
                  },
                  {
                    id: "q9riuhY6jFE",
                    title: "आदलि कुशलि पिथौरागढ़ भाषा सम्मेलन 2023.",
                  },
                  {
                    id: "Xt4lXWw5w00",
                    title: "स्वास्थ्य और संतुलित भोजन",
                  },
                  {
                    id: "wdihBa2GfR0",
                    title: "बच्चों में बढ़ती बेरुखी",
                  },
                  {
                    id: "8GNzNKV25as",
                    title: "क्वे नि समझन विधावकि पीड़ कैं...",
                  },
                  {
                    id: "ThA5GUQW60c",
                    title: "पिथौरागढ़ किताब कौतिक 4 - 6 जुलाई 2023",
                  },
                  {
                    id: "o1DirX8VU1w",
                    title:
                      "उत्तरांचल भ्रातृ सेवा संस्थान दिल्ली : एक आवाज एक मंच, उत्तराखंड महापंचायत",
                  },
                  {
                    id: "KcEJjdYjHcc",
                    title: "कुमगढ़ पत्रिका काठगोदाम में हमरि भाषाकि बात",
                  },
                  {
                    id: "4pSz1SvEfb4",
                    title: "रामनगर उत्तराखंड की 'नवल' पत्रिका",
                  },
                  {
                    id: "B-t16a727w0",
                    title: "अल्माड़ बै हिटूं कुमाउनीक 'पहरू '",
                  },
                  {
                    id: "a52sj_AEUek",
                    title: "'पुरवासी' अल्मोड़ा वार्षिक वृहद ग्रंथ",
                  },
                  {
                    id: "Q5yV2Vfzx-s",
                    title: "अल्मड़क खबरचि कुर्मांचल अखबार",
                  },
                  {
                    id: "Rx_jQBMip3o",
                    title: "डाक्टर बनूंगा, इंजीनियर बनूंगा",
                  },
                  {
                    id: "un0nSdgWx_0",
                    title: "कसी सिखाई जो कुमाउनी भाषा ?",
                  },
                  {
                    id: "SDjJDqYNhuQ",
                    title: "मीना पांडे की सृजन से...",
                  },
                  {
                    id: "GkOEe0uB9fw",
                    title: "लोकोक्ति में जमानकि बात",
                  },
                  {
                    id: "iAOliQ2r0yg",
                    title: "आक्सीजन भंडार है मेरे सामने वाला पार्क",
                  },
                  {
                    id: "9cl2jmn79uk",
                    title: "प्रकृति रूपी ईश्वर होता है पेड़ों में",
                  },
                  {
                    id: "LMBrKDVS05o",
                    title: "सास -बहू में अनबन क्यों ?",
                  },
                  {
                    id: "Gg3UOlm-X9Q",
                    title: "'लोग कह रहे हैं ' मिसिंग टाइल सिंड्रोम",
                  },
                  {
                    id: "tOVgWjE4Eh8",
                    title: "गुस्से में लाल है टमाटर",
                  },
                  {
                    id: "6WMYPt-k2so",
                    title: "आगे वो चली मैं पीछे चलता ही गया",
                  },
                  {
                    id: "nzCIvsaOAQ8",
                    title: "चौमासकि झड़ि में बाटुइ",
                  },
                  {
                    id: "oS9KoCT5pWA",
                    title: "विवाह में छै लोग तो जरूर चाहिए",
                  },
                  {
                    id: "VHJcvRJ9T0w",
                    title: "हमारी कथनी - करनी में अंतर",
                  },
                  {
                    id: "-9FmA49zG28",
                    title: "सासु - ब्वारिक गिजौव - नौकझौंक",
                  },
                  {
                    id: "Ef2bkZP1qIA",
                    title: "श्रृद्धा और अंधश्रद्धा, विश्वास और अंधविश्वास",
                  },
                  {
                    id: "MUqS9jVLtl8",
                    title: "तीर्थयात्रा की सत्यता बताना बुराई नहीं",
                  },
                  {
                    id: "HE0PTeROHqw",
                    title: "भ्रम का इलाज है भ्रम को मिटाना",
                  },
                  {
                    id: "2a1ITDty6qQ",
                    title: "किलै लागूं स्यैणियां पर मसाण - हंकार ?",
                  },
                  {
                    id: "C7v_xRbiCy0",
                    title: "मंदिर/बाबा के नाम से शराब चढ़ाने वाले ?",
                  },
                  {
                    id: "GPgheIdFQFY",
                    title: "जब गणतू -पुछ्यारुक लै गोय तुक्क",
                  },
                  {
                    id: "BX6eozu5jGU",
                    title: "दस गंभीर समस्याओं से घिरे हैं हम",
                  },
                  {
                    id: "jxibpk8mj9o",
                    title: "स्वास्थ्य शिक्षा में मासिक धर्म",
                  },
                  {
                    id: "JHIeQSGdWAg",
                    title: "पैली बै गोठ - छुतकुड़ि रौंछी छुतिय",
                  },
                  {
                    id: "UN56uEq6u7o",
                    title: "हींग लगे ना फिटकरी, भेज मोबाइल कट पेस्ट",
                  },
                  {
                    id: "fqh4_IDG3GE",
                    title: "अलैबेर ह्यून मि दिल्ली जां रयूं",
                  },
                  {
                    id: "ShHI1JWmd0c",
                    title: "महंगाई निगल गई दाल रोटी तेल मसाले",
                  },
                  {
                    id: "VnIK-Y9rvlk",
                    title: "को सुणल शिल्पकार व्यथा -वेदना ?",
                  },
                  {
                    id: "abMEupL744A",
                    title: "कुत्तों के मालिक का पार्क-सड़क में कुतत्व",
                  },
                  {
                    id: "znKsx06cdKU",
                    title: "घरों में जागर देखि चेलिय इस्कूल में लै नाचि गाय",
                  },
                  {
                    id: "B8egk5UbDTk",
                    title: "ये ही तो है मेरे बच्चों की मां",
                  },
                  {
                    id: "GNJ3TsbDgtg",
                    title: "डेंगू मलेरिया मनीप्लांट में हो रिया",
                  },
                  {
                    id: "VNLJ668H6ww",
                    title:
                      "बुराड़ी दिल्ली उत्तरैणी कौतिक में गर्जिया महिला कीर्तन मंडली दिल्ली दगाड़ बातचीत।",
                  },
                  {
                    id: "WAe52LuR9WI",
                    title: "चार प्रकार के हसबैंड",
                  },
                  {
                    id: "RFegrOFY6hs",
                    title: "कभैं आपुहैं पुछो",
                  },
                  {
                    id: "5L8mxZZu-2A",
                    title: "तुम जरूर मनौ पन्नर अगस्त",
                  },
                  {
                    id: "7JVbJFNQXfM",
                    title: "मनखी छ सैणियांक कर्जदार",
                  },
                  {
                    id: "6V7AR2oN9SQ",
                    title: "एक मेरे कहने -करने से क्या होगा ?",
                  },
                  {
                    id: "fu6IEfoSFGs",
                    title: "च्यल -चेलिक भेदभाव जरूर मिटल",
                  },
                  {
                    id: "O2EX8Mb44uM",
                    title: "बारों महैंण त्यारै त्यार, घर ऐ जानी जो छीं भ्यार",
                  },
                  {
                    id: "rt13ZPJ_oAQ",
                    title: "मोबाइल लत ने बना दिया रोबोट",
                  },
                  {
                    id: "zX38xShzlok",
                    title: "एक म्यार करियल के हल ?",
                  },
                  {
                    id: "Sv0iJrlO8AM",
                    title: "तोता अंदर कौआ बाहर, तू पौड़ि रहा मझधार",
                  },
                  {
                    id: "kODIyV2Aiz0",
                    title: "तू कां लुकी रौछे रे पधान ?",
                  },
                  {
                    id: "jc99bBX3tgM",
                    title: "संविधान को जानें तो सही...",
                  },
                  {
                    id: "IiFjSmUapSM",
                    title:
                      "इसरो है निरंतर गतिमान, आर्यभट्ट, भास्कर, चंद्रयान 3 की उड़ान...",
                  },
                  {
                    id: "Fz7vfG5Kj9Q",
                    title: "पैंस सबकुछ न्हैति",
                  },
                  {
                    id: "n4zeY4yNVyY",
                    title:
                      "रक्षाबंधन  2023 की विशेष जानकारी चैनल को सब्सक्राइब एवं शेयर जरूर करें जय श्री कृष्ण #रक्षाबंधन 🚩🚩",
                  },
                  {
                    id: "rQ813x4pnqo",
                    title:
                      "महंगाइल निकाइ हैलीं खोस्याल, अगास में पुजिगीं दाव लूण मस्याल।",
                  },
                  {
                    id: "97AvPZlTL1Q",
                    title: "दिन उजला क्यों रात है काली ?",
                  },
                  {
                    id: "dmS6931VDCI",
                    title: "कुदरत का सबसे बड़ा करिश्मा",
                  },
                  {
                    id: "GomtZ4z70m4",
                    title: "सब पगली रईं मोबाइल में",
                  },
                  {
                    id: "b3lB3fm33S8",
                    title: "भ्रष्टाचार का अजगर",
                  },
                  {
                    id: "vbwFCAvfcPY",
                    title: "झेलम एक्सप्रेस में सहयात्री विदेशी महिला",
                  },
                  {
                    id: "zeFjVkj7CrI",
                    title: "मसमसै सब रईं जोरैल क्वे के नि कूं रय।",
                  },
                  {
                    id: "opIxNtSjwSI",
                    title: "असीमित रक्षाबंधन में किसकी रक्षा ?",
                  },
                  {
                    id: "mdvZtvX2-XY",
                    title: "तीर्थोंकि सांचि बात जरूर बतूण चैंछ",
                  },
                  {
                    id: "11MdSM1f72o",
                    title:
                      "गोकर्ण धुंधकारी उपाख्यान अद्भुत वर्णन अवश्य श्रवण करें 🚩#viral #viralvideo #katha #bhagwat #trending",
                  },
                  {
                    id: "rGj8iGbcpwM",
                    title: "लघु भारत दिल्ली की सैर",
                  },
                  {
                    id: "OtMWyp7VSY4",
                    title: "जब कुनेलाखेत में मासैपूंल हमरि चलाकी ताड़ि दी",
                  },
                  {
                    id: "lwpRzO__mLg",
                    title: "संस्कृति हमला",
                  },
                  {
                    id: "4OaeVHNd4jI",
                    title: "कुड़बुद्दी संतरा चोर नना कैं नि पकड़ सक बुबु",
                  },
                  {
                    id: "yRXKf3WmdGo",
                    title: "कितनी दारू ठीक रहेगी सर ?",
                  },
                  {
                    id: "ARuM_vuP0o4",
                    title: "को छ य चनरदा ?",
                  },
                  {
                    id: "oL-2uWESx0Q",
                    title: "पैसे से सब कुछ नहीं खरीद सकते !",
                  },
                  {
                    id: "ECeRcfebDE8",
                    title:
                      "श्री कृष्ण जन्माष्टमी  2023 की विशेष जानकारी अवश्य श्रवण करें और चैनल को सब्सक्राइब और शेयर करे 🚩🚩🙏",
                  },
                  {
                    id: "Ap5wPtkSV_8",
                    title: "कलम-कमेट-पाटी से लेकर आजतक के अनंत शिक्षकों को नमन",
                  },
                  {
                    id: "JHwrbo8ibAc",
                    title: "जनजागृति के मेरे  300 लघु वीडियो",
                  },
                  {
                    id: "ZSMBNzPDcUk",
                    title: "भक्ति के नाम से चोरी",
                  },
                  {
                    id: "BOkFmXrIRCM",
                    title: "जन्माष्टमी पर क्या कह रहे हैं श्रीकृष्ण ?",
                  },
                  {
                    id: "DjOnwfU_mGA",
                    title: "तुम राह दिखाते हो",
                  },
                  {
                    id: "RhtLfRm4phk",
                    title: "अंग्रेजी बलै बेर इंप्रेशन बनू ?",
                  },
                  {
                    id: "IopFRIL84Y0",
                    title: "दुख- सुख के जो पाठ पाठ पढ़ाए, याद मुझे आ जाते हैं।",
                  },
                  {
                    id: "_9wHY_SoobM",
                    title: "जब बामणल बचै कुकुरकि छुंगी रसोइ",
                  },
                  {
                    id: "D_G25IaBdF8",
                    title: "वीकली बाजार, दबाके डंडी मार",
                  },
                  {
                    id: "vKlx-BP4lVk",
                    title: "स्त्री - पुरुष बनाम पति - पत्नी",
                  },
                  {
                    id: "ahuxjjjOClg",
                    title: "दाज्यू मिहूं ब्योलि ढुनो",
                  },
                  {
                    id: "7ho3I6fH-LA",
                    title: "रामायण महाकाव्य में केकई और मंथरा",
                  },
                  {
                    id: "jfoBBJ_Iw3U",
                    title:
                      "लोगों ने पार्क में खाना डाला, चूहों ने पार्क खोद डाला।",
                  },
                  {
                    id: "Afv0V-KqIis",
                    title: "म्यर घरक पुस्तकालय छ म्यर दगड़ी",
                  },
                  {
                    id: "75P9HvsvmVs",
                    title: "आदमी की शक्ल में आदमखोर",
                  },
                  {
                    id: "Lr57m-lfM04",
                    title: "शूगर (डायबिटीज/मधुमेह) से बचना है आसान",
                  },
                  {
                    id: "HpxKvo8gPno",
                    title: "पहाड़ में नशकि गिटपिट, भर्ति में अनफिट",
                  },
                  {
                    id: "6WMYPt-k2so",
                    title: "आगे वो चली मैं पीछे चलता ही गया",
                  },
                  {
                    id: "ZDirJHtjUFY",
                    title:
                      "मोबाइल ने दोस्त बना दिए दुश्मन, बिगाड़ दिया जीने का सिस्टम",
                  },
                  {
                    id: "pNG2b5JqLe0",
                    title: "च्येलिय कूंरीं ब्यौेल ढुनो",
                  },
                  {
                    id: "layf0afJvgY",
                    title: "गणेश जी की आरती के शब्द",
                  },
                  {
                    id: "DR7zVMr8wHU",
                    title: "हमें हंसना नहीं आता ?",
                  },
                  {
                    id: "CeJ0eOWUFUs",
                    title: "म्यार आंखरोंकि खरि खरि",
                  },
                  {
                    id: "VN-uTiOWkPU",
                    title:
                      "संपूर्ण हनुमान चालीसा एक बार अवश्य श्रवण करें #hanuman #hanumanchalisa #बजरंगबली #हनुमानचालीसा #कथा",
                  },
                  {
                    id: "oS9KoCT5pWA",
                    title: "विवाह में छै लोग तो जरूर चाहिए",
                  },
                  {
                    id: "8ffMoMrDcwA",
                    title: "हनीमून नहीं था हमारे जमाने में",
                  },
                  {
                    id: "DRBMM1kb58A",
                    title: "कर्तव्य पथ पर 11 अशोक चक्र",
                  },
                  {
                    id: "ogf6M7lBKnY",
                    title:
                      "स्पेनिश गिटार वादक मदन खंडूरी, गणेश वंदना में संवरे शब्द",
                  },
                  {
                    id: "cztrg1sC4l8",
                    title: "तन मेरो यां छ नंदा, मन जैरौ उनरि पास",
                  },
                  {
                    id: "Fn5ONiSzuTs",
                    title: "रिश्तेदारों परै हिंछ पार्टी में रौनक",
                  },
                  {
                    id: "glyVU705FfQ",
                    title: "गुस्सम निकई कड़ू आंखर दिल में लगूनी खार",
                  },
                  {
                    id: "MUqS9jVLtl8",
                    title: "तीर्थयात्रा की सत्यता बताना बुराई नहीं",
                  },
                  {
                    id: "OxcbQaGTZ2U",
                    title: "सबसे मीठा फल कौनसा है ?",
                  },
                  {
                    id: "nzCIvsaOAQ8",
                    title: "चौमासकि झड़ि में बाटुइ",
                  },
                  {
                    id: "0tWi-21yuCs",
                    title: "पत्नी बिना जग सूना ही सूना",
                  },
                  {
                    id: "RK8yNA5SrLU",
                    title: "राजघाट में ज्यौंनै छीं गांधी ज्यू",
                  },
                  {
                    id: "vOi8AtgrAqg",
                    title: "हे राम ! 30 जनवरी शहीद दिवस",
                  },
                  {
                    id: "0x5HJpXczmI",
                    title: "किस जीव में कहां है जहर ?",
                  },
                  {
                    id: "vKKuw0Zyrnc",
                    title: "Taking India Seriously.",
                  },
                  {
                    id: "Ay_Tv1cEbSs",
                    title: "अन्धविश्वासक विरोध पैली लै हौछ",
                  },
                  {
                    id: "DEShRE1nnjg",
                    title: "'बटौव' पाँख लगै बेर उड़ण चानू",
                  },
                  {
                    id: "Q_lPRy6qqIk",
                    title: "ब्या करौ बुड़ी बेर",
                  },
                  {
                    id: "HE0PTeROHqw",
                    title: "भ्रम का इलाज है भ्रम को मिटाना",
                  },
                  {
                    id: "vPtJSMRaHbg",
                    title: "सुभाष - टैगोर ने बापू को क्या कहा ?",
                  },
                  {
                    id: "8GNzNKV25as",
                    title: "क्वे नि समझन विधावकि पीड़ कैं...",
                  },
                  {
                    id: "eoce9uuV9Hw",
                    title:
                      "कलश स्थापना का शुभ एवं श्रेष्ठ मुहूर्त 2023शरद नवरात्रि की विशेष जानकारी अवश्य श्रवण करें 🚩#navratri",
                  },
                  {
                    id: "LLM_6GBon1g",
                    title: "छ्युं तेरि तरफ खूं तिकणी, हैगे अच्यालकि रीत",
                  },
                  {
                    id: "7ho3I6fH-LA",
                    title: "रामायण महाकाव्य में केकई और मंथरा",
                  },
                  {
                    id: "ALRH68VIUGM",
                    title:
                      "चंद्र ग्रहण 2023 की विशेष जानकारी आप लोगों के लिए इस वीडियो के माध्यम से दी गई है अवश्य श्रवण करें 🚩",
                  },
                  {
                    id: "ZDirJHtjUFY",
                    title:
                      "मोबाइल ने दोस्त बना दिए दुश्मन, बिगाड़ दिया जीने का सिस्टम",
                  },
                  {
                    id: "qVq59Pikuew",
                    title: "जो पेड़ हमने लगाया पहले...",
                  },
                  {
                    id: "bM4Vcorz68A",
                    title: "मि किलै चणी रनू ?",
                  },
                  {
                    id: "dJqO5MMZT50",
                    title: "बच्चों में बढ़ती मोबाइल लत",
                  },
                  {
                    id: "WAe52LuR9WI",
                    title: "चार प्रकार के हसबैंड",
                  },
                  {
                    id: "sraxhBomhP8",
                    title: "चार सैणियांल सही करीं आपण मैंस",
                  },
                  {
                    id: "DR7zVMr8wHU",
                    title: "हमें हंसना नहीं आता ?",
                  },
                  {
                    id: "O2FZOIr2QjY",
                    title: "वो व्रत रखकर मरने भी नहीं देती ?",
                  },
                  {
                    id: "GNJ3TsbDgtg",
                    title: "डेंगू मलेरिया मनीप्लांट में हो रिया",
                  },
                  {
                    id: "Xt4lXWw5w00",
                    title: "स्वास्थ्य और संतुलित भोजन",
                  },
                  {
                    id: "cemHRVG0vEs",
                    title: "उत्तराखंड में को छीं सात अशोकचक्र विजेता ?",
                  },
                  {
                    id: "OrpblvWqJbA",
                    title: "दुनिया को विस्फोटक देकर अद्भुत वसीयत कर गया वो !",
                  },
                  {
                    id: "SV243p8tHps",
                    title: "उत्तराखंड में शराबकि दुकान फुकणी सैणि",
                  },
                  {
                    id: "HASA5VifHVc",
                    title: "पॉकेट मनी का ऑडिट",
                  },
                  {
                    id: "Vbf9jCS59ro",
                    title: "शुभ दीपावली में ये क्या करते हो ?",
                  },
                  {
                    id: "gKo3V22uziM",
                    title: "गलत बातक विद्रोह करणकि हिम्मत कैं ज्यौंन धरो !",
                  },
                  {
                    id: "dAhy-A2Mp-w",
                    title: "अब्बल ऐक्टिंग परशुराम की, इनाम ले गया लक्ष्मण !",
                  },
                  {
                    id: "sraxhBomhP8",
                    title: "चार सैणियांल सही करीं आपण मैंस",
                  },
                  {
                    id: "jo0QGi5cciY",
                    title: "दुसरकि भलि ब्वारि तुमार के काम कि ?",
                  },
                  {
                    id: "VHJcvRJ9T0w",
                    title: "हमारी कथनी - करनी में अंतर",
                  },
                  {
                    id: "ngL7s7h_3TY",
                    title: "उ निराकार ईश्वर कैं आपण घर में साकार देखो।",
                  },
                  {
                    id: "jxibpk8mj9o",
                    title: "स्वास्थ्य शिक्षा में मासिक धर्म",
                  },
                  {
                    id: "Yp2P03n7t1g",
                    title: "बुरे समय के साथी कौन ?",
                  },
                  {
                    id: "ARuM_vuP0o4",
                    title: "को छ य चनरदा ?",
                  },
                  {
                    id: "bBdMXmvAdyw",
                    title:
                      "गाइक जवाब गाइ नि हुन, मिठ बलै बेर स्यूं -बाग आपण है जानी।",
                  },
                  {
                    id: "mi4KYU5P8ZE",
                    title: "बोर्ड परीक्षा में फेल नहीं होते यदि...",
                  },
                  {
                    id: "wdihBa2GfR0",
                    title: "बच्चों में बढ़ती बेरुखी",
                  },
                  {
                    id: "bXOM6Qaaetg",
                    title: "पढ़ी-लेखियां कैं गौं में नि मिल वोट",
                  },
                  {
                    id: "i9SLt5WO1ow",
                    title: "ऐसी मेरी सोच कहां ?",
                  },
                  {
                    id: "cigqwpmlRyk",
                    title: "हमारा पड़ोसी काम आया या नहीं ?",
                  },
                  {
                    id: "pARZslBMPNY",
                    title:
                      "उत्तराखंड में गांधी ज्यू दगाड़ हिटणी एक छी ज्योतिराम कांडपाल",
                  },
                  {
                    id: "8aHo0xKe8bo",
                    title: "अगर नारी नहीं होती तो ?",
                  },
                  {
                    id: "VLmnFWkYJa4",
                    title: "पैली बै मै-बाप नना पर नजर धरछी",
                  },
                  {
                    id: "juy4xQFypcU",
                    title: "बिन पुछिए अकल बतुणियांक जोर हैगो",
                  },
                  {
                    id: "jM1yz2I9Gus",
                    title: "किलै हिंछ सड़क दुर्घटना ?",
                  },
                  {
                    id: "oZiO82uNAKw",
                    title: "आदमी को इंसान बनाती है कविता",
                  },
                  {
                    id: "NY4KShUS4q0",
                    title:
                      "उत्तरकाशी सुरंग के अंदर और बाहर दोनों तरफ जिंदगी की जंग",
                  },
                  {
                    id: "6ni7e_ZA5Hs",
                    title: "सबूंक अलग द्याप्त अलग मंदिर",
                  },
                  {
                    id: "6AZ49zNdSsU",
                    title: "सब कुछ बदलि गो पर... य लै बदलण चैंछ।",
                  },
                  {
                    id: "DRBMM1kb58A",
                    title: "कर्तव्य पथ पर 11 अशोक चक्र",
                  },
                  {
                    id: "EfkqJp-qg68",
                    title: "हमर संविधान हमर ग्रंथ में के लेखी छ ?",
                  },
                  {
                    id: "PQpSmA1FV9g",
                    title: "जिंदगी का एक मिशन, झाड़ू पोछा और किचन!",
                  },
                  {
                    id: "1YM7LbMuQSw",
                    title: "चार प्रकार के मनुष्यों में अपनी श्रेणी खुद देखो ?",
                  },
                  {
                    id: "zX38xShzlok",
                    title: "एक म्यार करियल के हल ?",
                  },
                  {
                    id: "GsGay6lRH_Q",
                    title: "उत्तरकाशी सिलक्यारा सुरंग ने क्या सिखाया ?",
                  },
                  {
                    id: "0NZvqXfLYHI",
                    title: "बिसनी देवी किलै गे जेल ?",
                  },
                  {
                    id: "VII6oXJRPOg",
                    title: "काम में दम होगा तो जरूर बजेगी  ताली ?",
                  },
                  {
                    id: "oxKadqMKOkU",
                    title: "दशरथ माझी के दृढ़ संकल्प ने झुकाया पहाड़",
                  },
                  {
                    id: "2MItgaq9D0s",
                    title:
                      "म्यर गौं खग्यारक नौं लै जुड़ी छ स्वतंत्रता आंदोलन में",
                  },
                  {
                    id: "pXehWC6f-Uo",
                    title: "सुल्पे और सुराही की तकरार, पसोपेश में कुम्हार।",
                  },
                  {
                    id: "xxd4Kd2HG7I",
                    title: "परंपरा के नाम पशुबलि मन्नत ? हम भी बदलें।",
                  },
                  {
                    id: "LYRavHusLcA",
                    title: "न बंदर सुधरा और न सांप",
                  },
                  {
                    id: "VodeF2UAhY0",
                    title: "अग्निवीर बनण लै आसान काम नि हय।",
                  },
                  {
                    id: "YeIBKkQTJdw",
                    title: "हमारी रामलीला के बाली और विभीषण",
                  },
                  {
                    id: "NUV5sdut7vY",
                    title: "कुदरत दगै नि करो छेड़छाड़",
                  },
                  {
                    id: "-fZ4EGBXigs",
                    title: "हमारे दुखों के लिए ये हैं जिम्मेदार !",
                  },
                  {
                    id: "Kiz1666DZVA",
                    title: "24 दिसंबर हिटो हल्द्वाणि",
                  },
                  {
                    id: "yRXKf3WmdGo",
                    title: "कितनी दारू ठीक रहेगी सर ?",
                  },
                  {
                    id: "Zi1hKnV4YCE",
                    title: "क्या है सबसे सरल काम ?",
                  },
                  {
                    id: "h4V7poaq6TM",
                    title: "प्रेसर हॉर्न का बेखौप करकस शोर",
                  },
                  {
                    id: "k7Mu7d7tClw",
                    title: "भूतिया शकल, आंख छिया चुइम",
                  },
                  {
                    id: "_6_RqIFQpLs",
                    title: "घरवाइक सामणि भिजाई बिराउ",
                  },
                  {
                    id: "7GXusrib2RM",
                    title: "खुलेआम या छिपकर कौन पीते हैं शराब ?",
                  },
                  {
                    id: "cV9QRAdISHg",
                    title: "तेइस बरस में बनि गईं राज्य में मुख्यमंत्री दस",
                  },
                  {
                    id: "BX6eozu5jGU",
                    title: "दस गंभीर समस्याओं से घिरे हैं हम",
                  },
                  {
                    id: "l5X6oaPM8VU",
                    title: "दानपात्र है श्रद्धा सहयोग का पात्र",
                  },
                  {
                    id: "ShHI1JWmd0c",
                    title: "महंगाई निगल गई दाल रोटी तेल मसाले",
                  },
                  {
                    id: "3NI-3apEKDw",
                    title: "कौन हैं अपना बलिदान देकर संसद भवन बचाने वाले ?",
                  },
                  {
                    id: "VaTn_1mgZA0",
                    title:
                      "छियासी वर्षीय डॉ बी डी बेलवाल जी का जड़ों से जुड़ाव",
                  },
                  {
                    id: "ZAeDMlHKkZ8",
                    title: "दौलतिया नाचणी हैरौ दास भगोतिया",
                  },
                  {
                    id: "DZRc8cwVV3o",
                    title:
                      "स्वतंत्रता आंदोलन में उत्तराखंड, खुमाड़ सालम बागसर सल्ट।",
                  },
                  {
                    id: "Kiz1666DZVA",
                    title: "24 दिसंबर हिटो हल्द्वाणि",
                  },
                  {
                    id: "JHwrbo8ibAc",
                    title: "जनजागृति के मेरे  300 लघु वीडियो",
                  },
                  {
                    id: "Akr_ldMFgAY",
                    title: "महाभारत युद्ध की असली वजह ?",
                  },
                  {
                    id: "OkLBM20uUhY",
                    title: "यदि न बोता अन्न बीज तू...",
                  },
                  {
                    id: "hbuTQkJCxik",
                    title: "संस्कारी बहू",
                  },
                  {
                    id: "QaFz01UAHKY",
                    title:
                      "सड़क पर अबारा कुत्ते और सांड नहीं देखे अमेरिका में।",
                  },
                  {
                    id: "jdHvhS68JeM",
                    title: "जागर पर डा.बेलवाल की बेबाक टिप्पणी",
                  },
                  {
                    id: "gFqrm7r5LoY",
                    title: "फौंक नहीं, संकल्प",
                  },
                  {
                    id: "V4SJwu2yQ7I",
                    title: "उत्तराखंड में घुरड़ काकड़ कफू मोनल मृग चाखुड़",
                  },
                  {
                    id: "lwpRzO__mLg",
                    title: "संस्कृति हमला",
                  },
                  {
                    id: "xgb2OOOsqVQ",
                    title: "कसी बितीं 17 दिन सिलक्यारा सुरंग में ?",
                  },
                  {
                    id: "q3-mQAle0XY",
                    title: "चुप क्यों ?",
                  },
                  {
                    id: "5PRpn5rF1zc",
                    title: "वीडियो माध्यम से जनजागृति का मेरा 400वां ऐपिसोड",
                  },
                  {
                    id: "MnKtotDJR6w",
                    title: "पोते का मंत्र दादी के नाम",
                  },
                  {
                    id: "Zdo278a6cQs",
                    title:
                      "अंतरराष्ट्रीय नववर्ष 2024 में विक्रम संवत और शक संवत ?",
                  },
                  {
                    id: "VTt0qduBD5w",
                    title: "म्यार देशाक सिपाइ",
                  },
                  {
                    id: "N_Jz1eA6I_c",
                    title: "नए साल के लिए 12 संकल्प ( रिसोल्यूसन)",
                  },
                  {
                    id: "9T2jO3DQVCc",
                    title: "राह दिखाई जिन पथिकों ने...",
                  },
                  {
                    id: "2GUDPZsQh0c",
                    title: "आशा के रोशन चिराग",
                  },
                  {
                    id: "Nd62kvSe7FY",
                    title: "स्वर्ग में अप्सरा लै बुबु दगै रौनी बल ?",
                  },
                  {
                    id: "HrH3wLHb_4Y",
                    title: "माया नहीं महान",
                  },
                  {
                    id: "s5G8_268f14",
                    title: "रामायण में हक छोड़ा और महाभारत में हक मांगा।",
                  },
                  {
                    id: "6lagVs2wjRE",
                    title:
                      "ऐसी लागी लगन मीरा हो गई मगन🚩 meera bai  Bhajan #meerabai #bhajan #sriram #rammandirayodhya #music 🚩🙏",
                  },
                  {
                    id: "861OEP6TlPM",
                    title: "' लमक्याव' मेरि आपणि कांथ (मेरी आत्मकथा)",
                  },
                  {
                    id: "JZKN94ed1SE",
                    title: "देवभूमि वीरभूमि राज्य उत्तराखंड",
                  },
                  {
                    id: "ijWTokBOcf8",
                    title: "पहाड़ै खेति बौलै काव, नि करना तो लै कंकाव।",
                  },
                  {
                    id: "_LmAQNfKdYA",
                    title: "Wisdom Talks with Mr A. Selvadurai",
                  },
                  {
                    id: "ssDfgG-m1lY",
                    title: "टैंसन (तनाव) से बीमार हुई भेड़",
                  },
                  {
                    id: "_mGhcgNMPcs",
                    title:
                      "दासल नाचणी गीत सुणाय, ब्वारि पर पिड़पिड़ै मसाण लगाय।",
                  },
                  {
                    id: "33CJMTVruuI",
                    title: "जंगे आजादी के कई गुमनाम सिपाही",
                  },
                  {
                    id: "i7AFJUNMCIY",
                    title: "काश! उस दिन मेरे हाथ दराती होती!",
                  },
                  {
                    id: "8VfuOuU1yW8",
                    title: "त्यर मुख उथां, म्यर मुख उथां, क्वीड़ कूं कथां ?",
                  },
                  {
                    id: "m2MJaNFlYtY",
                    title: "दोस्ती की भोर",
                  },
                  {
                    id: "rhK3Fuay6rc",
                    title: "इस्कूल में जे नि सिख, उ बौज्यूल सिखा",
                  },
                  {
                    id: "JzMj2WEv0kk",
                    title: "मनोबल बढ़ाना सबसे बड़ा तोहफा",
                  },
                  {
                    id: "IPa0QiueWNw",
                    title:
                      "न्याय की देवी की आंख पर काली पट्टी, हाथ में तराजू और तलवार क्यों ?",
                  },
                  {
                    id: "07npCzywlXk",
                    title: "बारह दिन का सूतक व मृत्युभोज",
                  },
                  {
                    id: "Jte0yfDb2Kc",
                    title: "सौण मरि सासु, भदोव आय आंसु",
                  },
                  {
                    id: "OxcbQaGTZ2U",
                    title: "सबसे मीठा फल कौनसा है ?",
                  },
                  {
                    id: "8nQp5ibEDOI",
                    title: "23 से 26 जनवरी तक लगातार हमारे चार विशेष दिवस",
                  },
                  {
                    id: "wlHaKjs3U6k",
                    title: "अनेकता में एकता, अलग -अलग रंग वेश।",
                  },
                  {
                    id: "EY4qQ6a_I-s",
                    title:
                      "75वें गणतंत्र दिवस पर छोटे बच्चों का  'जनगणमन ' गाने का जुनून",
                  },
                  {
                    id: "dgNCY7GOi2A",
                    title: "भलसो! तुमुहैं रोज असोजै रै गोय।",
                  },
                  {
                    id: "rNsos4-MgQA",
                    title: "लहंगे ने तोड़ दी शादी",
                  },
                  {
                    id: "Aqd2PWiKNKU",
                    title: "रॉक गार्डन चंडीगढ़ में जिंदा है नेकचंद",
                  },
                  {
                    id: "un0nSdgWx_0",
                    title: "कसी सिखाई जो कुमाउनी भाषा ?",
                  },
                  {
                    id: "HDtultv5Bv4",
                    title: "बापू जी को क्यों नहीं मिला 'नोबेल पुरस्कार ' ?",
                  },
                  {
                    id: "vOi8AtgrAqg",
                    title: "हे राम ! 30 जनवरी शहीद दिवस",
                  },
                  {
                    id: "iFrC6Xwb_JQ",
                    title: "दिवंगत को क्यों और कैसे दी जाती है श्रद्धांजलि ?",
                  },
                  {
                    id: "i_qT7Wxd26k",
                    title: "परया सैणि कैं चुड़ पैराय, चुड़चुड़ानै गेइ",
                  },
                  {
                    id: "DjOnwfU_mGA",
                    title: "तुम राह दिखाते हो",
                  },
                  {
                    id: "58Uwofg5nIQ",
                    title: "गौं पछ्याण गया बै, नाजकि पछ्याण तया बै",
                  },
                  {
                    id: "w6oAVIBzRUo",
                    title: "सही को सही और गलत को गलत कहने की हिम्मत कहां गई ?",
                  },
                  {
                    id: "SRuZQ6fru24",
                    title: "झन करिया अभिमान, जानै जानै कै गया।",
                  },
                  {
                    id: "8aHo0xKe8bo",
                    title: "अगर नारी नहीं होती तो ?",
                  },
                  {
                    id: "_Sup23XTmHQ",
                    title: "कैसे बच सकते हैं कैंसर रोग से ?",
                  },
                  {
                    id: "Yp2P03n7t1g",
                    title: "बुरे समय के साथी कौन ?",
                  },
                  {
                    id: "-W2Wr61IXFs",
                    title: "रोज रोज बजार के लिजी जांछा ?",
                  },
                  {
                    id: "8ffMoMrDcwA",
                    title: "हनीमून नहीं था हमारे जमाने में",
                  },
                  {
                    id: "_TRTrAxtP-A",
                    title: "हाइ ब्लडप्रेशर का जिम्मेदार कौन ?",
                  },
                  {
                    id: "vgQm1jUOXwo",
                    title: "हम स्वतंत्र हैं, कौन रोकेगा हमें (व्यंग्य)",
                  },
                  {
                    id: "9I3DObxzOrM",
                    title: "द्यापता थानों में चुपचाप बकरकटै",
                  },
                  {
                    id: "dmS6931VDCI",
                    title: "कुदरत का सबसे बड़ा करिश्मा",
                  },
                  {
                    id: "SKcBwB0uGno",
                    title: "चूहों की डर से बच्चे नहीं जाते पार्क",
                  },
                  {
                    id: "vbwFCAvfcPY",
                    title: "झेलम एक्सप्रेस में सहयात्री विदेशी महिला",
                  },
                  {
                    id: "2WTdlr0Omsw",
                    title: "चिटियों के लिए पेड़ - पर्यावरण की दुर्दशा",
                  },
                  {
                    id: "HE0PTeROHqw",
                    title: "भ्रम का इलाज है भ्रम को मिटाना",
                  },
                  {
                    id: "2QIGd_FStqg",
                    title:
                      "Episode 3: Bajrangi Bhaijaan for Indians staying Abroad | Wisdom Talk",
                  },
                  {
                    id: "D_G25IaBdF8",
                    title: "वीकली बाजार, दबाके डंडी मार",
                  },
                  {
                    id: "O-JxkvMI1Cg",
                    title: "भगवान की मूर्तियों का फुटपाथ पर अपमान",
                  },
                  {
                    id: "xIH0rXdM2_A",
                    title: "बसंत पंचिमी आयोजन में बाल -उमंग",
                  },
                  {
                    id: "vKlx-BP4lVk",
                    title: "स्त्री - पुरुष बनाम पति - पत्नी",
                  },
                  {
                    id: "PvBzVXqv878",
                    title: "बसंत पंचिमी फैंसी ड्रेस में बच्चों की उमंग",
                  },
                  {
                    id: "Gg3UOlm-X9Q",
                    title: "'लोग कह रहे हैं ' मिसिंग टाइल सिंड्रोम",
                  },
                  {
                    id: "v7RldpfiDec",
                    title: "बच्च हुणि छ नि बतौ, चुपचाप बच्च पैद करिबेर दिखौ",
                  },
                  {
                    id: "LyaARNndfgk",
                    title: "खद्दर के कफन में लिपटने की चाह",
                  },
                  {
                    id: "MazL3Sl-Pgo",
                    title: "जिंदगी की जंग में हम ही बन गए हैं धृतराष्ट्र",
                  },
                  {
                    id: "iIO033whu6M",
                    title: "कूड़े, गंदगी और विसर्जन से बेहाल हुई नहर",
                  },
                  {
                    id: "pNG2b5JqLe0",
                    title: "च्येलिय कूंरीं ब्यौेल ढुनो",
                  },
                  {
                    id: "zB70oKvg_ag",
                    title:
                      "HOW BANKS CAN HELP ARMED FORCES PERSONNEL / LT GEN VINOD VASHISHT (R)",
                  },
                  {
                    id: "GqkaPxJ-7cw",
                    title: "संजोकर रखी हैं प्यार-सम्मान की निशानियां",
                  },
                  {
                    id: "fgRCwFc7NiY",
                    title: "मातृभाषा दिवस पर हमरि भाषा",
                  },
                  {
                    id: "YuzzC_TR7YU",
                    title: "उकैं बौव उठि रौ, उ कैकि बौव दि सकूं",
                  },
                  {
                    id: "G2dJiaT2iHo",
                    title: "मातृभाषा दिवस 21 फरवरी",
                  },
                  {
                    id: "cyQYxJUTOY0",
                    title: "मन की व्यथा बताऊं या नहीं बताऊं ?",
                  },
                  {
                    id: "ahuxjjjOClg",
                    title: "दाज्यू मिहूं ब्योलि ढुनो",
                  },
                  {
                    id: "bRr2DQbgxi0",
                    title: "कुनइ मिलैबेर लै खटपट हैगे",
                  },
                  {
                    id: "oJwxQ5biPKg",
                    title: "चुभने वाली बात, बिगाड़े खाने का स्वाद",
                  },
                  {
                    id: "9bv_sSHsuXk",
                    title: "रिश्तों को बचाना है तो झुकना ही पड़ेगा",
                  },
                  {
                    id: "1YM7LbMuQSw",
                    title: "चार प्रकार के मनुष्यों में अपनी श्रेणी खुद देखो ?",
                  },
                  {
                    id: "kL6JU9MoAuo",
                    title: "बनिठनि बेर जैरै हुड़क्याणि जसि",
                  },
                  {
                    id: "B4AOEPn8usA",
                    title: "गुटखा तम्बाकू धूम्रपान, लहू तेरा पी रहे सुनसान।",
                  },
                  {
                    id: "ttD2nXljA3A",
                    title: "समय का भरोसा नहीं, समय होत बलवान",
                  },
                  {
                    id: "_GYmW_1xnOI",
                    title: "गुलदाड़ - कुकुरी बाघ से नहीं डरी आशा",
                  },
                  {
                    id: "wNGcjhEpw5M",
                    title:
                      "कुमाऊनी होली ... pahadi Holi #holi #holisong #holispecial #holigeet #होली 🙏🚩 please subscribe 🙏share",
                  },
                  {
                    id: "P9xMD_PPzIc",
                    title: "तुलसी के मित्र रहीम",
                  },
                  {
                    id: "OrpblvWqJbA",
                    title: "दुनिया को विस्फोटक देकर अद्भुत वसीयत कर गया वो !",
                  },
                  {
                    id: "qyaOWcxxFtk",
                    title: "चूहों का अड्डा बनाया लोगों ने पार्क के बीचोंबीच",
                  },
                  {
                    id: "Ec9nQd715-Y",
                    title: "शब्द के घाव पर शब्द की औषधि",
                  },
                  {
                    id: "oSPnlFAGIvU",
                    title: "जैल गवै गत, वीकि हइ पट",
                  },
                  {
                    id: "oZiO82uNAKw",
                    title: "आदमी को इंसान बनाती है कविता",
                  },
                  {
                    id: "Ql7GNzv2Rk8",
                    title: "ग्रहण खगोलीय घटना, काहे राहू- केतू रटना",
                  },
                  {
                    id: "WTPrggrqTFI",
                    title: "वह थीं भारत की पहली महिला शिक्षक ?",
                  },
                  {
                    id: "i9SLt5WO1ow",
                    title: "ऐसी मेरी सोच कहां ?",
                  },
                  {
                    id: "6z3eBTZOTMw",
                    title: "उत्तराखंड में किसान कसी करो खेति ?",
                  },
                  {
                    id: "Cqdx9rSJZj4",
                    title: "बच्चे न बनें दुर्योधन",
                  },
                  {
                    id: "Fc6U8xVXI9s",
                    title: "सच्चा सुख कहां है ?",
                  },
                  {
                    id: "oBh4o33QcKI",
                    title:
                      "पूरन चन्द्र कांडपाल को रंकबंधु साहित्य अकादमी फरीदाबाद द्वारा साहित्य शिरोमणि सम्मान - 2022",
                  },
                  {
                    id: "9zG9wI-6XRE",
                    title: "कुछ बेड़ियां टूट चुकी, कुछ तोड़नी हैं।",
                  },
                  {
                    id: "PbSLZpEn7Qg",
                    title: "मन में उतरें, मन से न उतरें",
                  },
                  {
                    id: "StW5uqlhWbQ",
                    title: "2525 कि मी लंबी गंगा का संताप",
                  },
                  {
                    id: "yjjxpUCft14",
                    title: "फोल्डिंग खालि न्हैति यार !",
                  },
                  {
                    id: "pBCZBEdPJeA",
                    title: "सिर्फ पेट भरने का ही लक्ष्य है क्या ?",
                  },
                  {
                    id: "b3lB3fm33S8",
                    title: "भ्रष्टाचार का अजगर",
                  },
                  {
                    id: "zXr65IFakYE",
                    title: "उ डाड़ लै नि मारैं रैछी",
                  },
                  {
                    id: "jc99bBX3tgM",
                    title: "संविधान को जानें तो सही...",
                  },
                  {
                    id: "MEnQ3A6OtI0",
                    title: "अल्मारी से चुपचाप शराब की चोरी",
                  },
                  {
                    id: "uDqD9DojbZ0",
                    title: "डाक्टर कसाई बने भ्रूण हत्या कर रहे",
                  },
                  {
                    id: "clvRyhF8PBU",
                    title: "आटपाट रिवाज मुसीबत ठाड़ करनी",
                  },
                  {
                    id: "o7THwezWmsI",
                    title: "तेरी सलामती पर अगिनत हुए कुर्बान",
                  },
                  {
                    id: "94pCo2-5GWY",
                    title: "हमारी आदतों से परेशान हैं कई लोग",
                  },
                  {
                    id: "97AvPZlTL1Q",
                    title: "दिन उजला क्यों रात है काली ?",
                  },
                  {
                    id: "9kvmoKL0csg",
                    title: "महाभारत के कृष्ण और कर्ण",
                  },
                  {
                    id: "fvuW0fxb3cQ",
                    title: "फुरसत के क्षण में सोचो तो सही !",
                  },
                  {
                    id: "lm6HkHepLFA",
                    title:
                      "मुख्यमंत्री उत्तराखंड श्रीमान पुष्कर सिंहधामी जी के द्वारा होली मिलन समारोह के लिए अपना संदेश दिया 🚩",
                  },
                  {
                    id: "NWsbKetjCv8",
                    title: "परौस (खाण) घर लिजणकि रीत गलत छ",
                  },
                  {
                    id: "rzRlaLqBeTk",
                    title: "सास - बहू, मां - बेटी, अलग अलग चश्मे",
                  },
                  {
                    id: "B8egk5UbDTk",
                    title: "ये ही तो है मेरे बच्चों की मां",
                  },
                  {
                    id: "fyHKpYiqUd8",
                    title: "आज होली का मतलब हो गया है ?",
                  },
                  {
                    id: "vQEOvYKtLUg",
                    title:
                      "कुमाऊनी होली !! ग्राम-गवाड़ !! द्वाराहाट !! उत्तराखण्ड !! द्वाराहाट की होली !! Kumaoni Holi !!",
                  },
                  {
                    id: "qIQOuasY_oM",
                    title: "होली का मतलब शराब हो गया आज",
                  },
                  {
                    id: "D10ksgr3sMY",
                    title: "जां राम वां अजुध्या !",
                  },
                  {
                    id: "06brON9cQ6g",
                    title: "जीवन के पड़ाव का एक खास दिन 28 मार्च",
                  },
                  {
                    id: "SkQeOe4M0bM",
                    title: "मिशन मेधावी स्मृति सम्मान",
                  },
                  {
                    id: "abqaokQXvlg",
                    title: "हमर सबूं है ठुल दगड़ी ?",
                  },
                  {
                    id: "p7MRT0BBZKE",
                    title: "अंधविश्वासी प्रथाओंल फैद कैक हुंछ ?",
                  },
                  {
                    id: "aYozYgtTNdM",
                    title: "हमें किस बात का गर्व है ?",
                  },
                  {
                    id: "DR7zVMr8wHU",
                    title: "हमें हंसना नहीं आता ?",
                  },
                  {
                    id: "zBzp50iZrgE",
                    title: "हमार इस्कूलोंक रोल मौडल मास्टर",
                  },
                  {
                    id: "w3gO4Mg1RRA",
                    title: "कुछ दीवाल टेढ़ी, कुछ हुजूरों की नजर टेढ़ी",
                  },
                  {
                    id: "0x5HJpXczmI",
                    title: "किस जीव में कहां है जहर ?",
                  },
                  {
                    id: "gIZ6DYEZPcU",
                    title: "दिखावकि मुंडन कैक लिजी ?",
                  },
                  {
                    id: "vPtJSMRaHbg",
                    title: "सुभाष - टैगोर ने बापू को क्या कहा ?",
                  },
                  {
                    id: "b8Ppd-2pXMg",
                    title: "झुटि तारिफ में फुरमिण नि चैन",
                  },
                  {
                    id: "Sks-fFT_Tzg",
                    title: "मेरा स्वास्थ्य मेरा अधिकार",
                  },
                  {
                    id: "qVq59Pikuew",
                    title: "जो पेड़ हमने लगाया पहले...",
                  },
                  {
                    id: "A7PNRY8_54E",
                    title:
                      "नूतन संवत् 2081 की विशेष जानकारी 🙏 🚩कालयुक्त नामक संवत् एवं चैत्र नवरात्रि प्रारंभ 9/4/2024 मंगलवार",
                  },
                  {
                    id: "8aQjEjpGO9A",
                    title: "यूं दस बातों कैं गांठ पाड़ो",
                  },
                  {
                    id: "8txA5WJKIp4",
                    title: "बाव कैं दे भुलिगो, बुड़ कैं दे मरिगो",
                  },
                  {
                    id: "glyVU705FfQ",
                    title: "गुस्सम निकई कड़ू आंखर दिल में लगूनी खार",
                  },
                  {
                    id: "MXLzW3UC5aU",
                    title: "आशा तृष्णा ना मरी...",
                  },
                  {
                    id: "OrpblvWqJbA",
                    title: "दुनिया को विस्फोटक देकर अद्भुत वसीयत कर गया वो !",
                  },
                  {
                    id: "ViZafAXb-D4",
                    title: "आज लै सैणियां पाट मैंस खेलैं रईं रामलिल में",
                  },
                  {
                    id: "Q_lPRy6qqIk",
                    title: "ब्या करौ बुड़ी बेर",
                  },
                  {
                    id: "dAhy-A2Mp-w",
                    title: "अब्बल ऐक्टिंग परशुराम की, इनाम ले गया लक्ष्मण !",
                  },
                  {
                    id: "EtGonrU7UEE",
                    title: "नौ नौड़त नौ सवाल ?",
                  },
                  {
                    id: "cigqwpmlRyk",
                    title: "हमारा पड़ोसी काम आया या नहीं ?",
                  },
                  {
                    id: "DOMC9kPC2jg",
                    title: "जनजागृति का 500वां ऐपिसोड : एक विश्लेषण",
                  },
                  {
                    id: "8aHo0xKe8bo",
                    title: "अगर नारी नहीं होती तो ?",
                  },
                  {
                    id: "HbgIQ7efE7Y",
                    title: "पौण पर मन हुनौ, चुल पर आग हुन",
                  },
                  {
                    id: "z7-ubcBWCgY",
                    title: "एक गोली एक दुश्मन",
                  },
                  {
                    id: "hqIOsnzeK1A",
                    title:
                      "ढाबे पर गाने से कोक स्टूडियो तक का सफर, कमला देवी की कहानी | Kamala Devi |  Rajula & Malushahi",
                  },
                  {
                    id: "sfRDavg965s",
                    title: "बहू की बात, मंथन तो करे सास !",
                  },
                  {
                    id: "NY4KShUS4q0",
                    title:
                      "उत्तरकाशी सुरंग के अंदर और बाहर दोनों तरफ जिंदगी की जंग",
                  },
                  {
                    id: "SQhYINwh6o4",
                    title: "कभैं झन करिया हल्लाबड़ी !",
                  },
                  {
                    id: "GsGay6lRH_Q",
                    title: "उत्तरकाशी सिलक्यारा सुरंग ने क्या सिखाया ?",
                  },
                  {
                    id: "cEwiiVYsoUc",
                    title: "पुर गौं बगि शहर न्हैगो",
                  },
                  {
                    id: "3K20k4IkuqQ",
                    title: "कौन नहीं सीख सकता ?",
                  },
                  {
                    id: "sraxhBomhP8",
                    title: "चार सैणियांल सही करीं आपण मैंस",
                  },
                  {
                    id: "pXehWC6f-Uo",
                    title: "सुल्पे और सुराही की तकरार, पसोपेश में कुम्हार।",
                  },
                  {
                    id: "YSqQhV3IJJM",
                    title: "घर जाणता चाण गूड़ मिसिरि गट्ट",
                  },
                  {
                    id: "oxKadqMKOkU",
                    title: "दशरथ माझी के दृढ़ संकल्प ने झुकाया पहाड़",
                  },
                  {
                    id: "DCE88OxJ6FY",
                    title: "चोरी के फूलों से भगवान खुश नहीं होते !",
                  },
                  {
                    id: "SV243p8tHps",
                    title: "उत्तराखंड में शराबकि दुकान फुकणी सैणि",
                  },
                  {
                    id: "f9TsaVKS5AA",
                    title: "पुजपाठ कर्मकांड तय करी टैम पर हुण चैंछ",
                  },
                  {
                    id: "bXOM6Qaaetg",
                    title: "पढ़ी-लेखियां कैं गौं में नि मिल वोट",
                  },
                  {
                    id: "YeIBKkQTJdw",
                    title: "हमारी रामलीला के बाली और विभीषण",
                  },
                  {
                    id: "gKo3V22uziM",
                    title: "गलत बातक विद्रोह करणकि हिम्मत कैं ज्यौंन धरो !",
                  },
                  {
                    id: "-fZ4EGBXigs",
                    title: "हमारे दुखों के लिए ये हैं जिम्मेदार !",
                  },
                  {
                    id: "xKboz_PgdRU",
                    title: "ब्या में लिफाफ पकड़ौ या दान रजिस्टर में लेखौ",
                  },
                  {
                    id: "ngL7s7h_3TY",
                    title: "उ निराकार ईश्वर कैं आपण घर में साकार देखो।",
                  },
                  {
                    id: "Zi1hKnV4YCE",
                    title: "क्या है सबसे सरल काम ?",
                  },
                  {
                    id: "ddD2qQnzwqE",
                    title: "Few words in English, Why English ?",
                  },
                  {
                    id: "h4V7poaq6TM",
                    title: "प्रेसर हॉर्न का बेखौप करकस शोर",
                  },
                  {
                    id: "leExFGvHI_8",
                    title: "पंजाब च रैके पंजाबी बोलण दि कोशिश भी किती",
                  },
                  {
                    id: "7GXusrib2RM",
                    title: "खुलेआम या छिपकर कौन पीते हैं शराब ?",
                  },
                  {
                    id: "1LBpyLssoTo",
                    title: "ये फ्रिज है या बासी भोजन का स्टोर ?",
                  },
                  {
                    id: "6AZ49zNdSsU",
                    title: "सब कुछ बदलि गो पर... य लै बदलण चैंछ।",
                  },
                  {
                    id: "uKILW9yL-0w",
                    title: "गढ़वालि भाषा लै बोल सकदूं मि",
                  },
                  {
                    id: "jM1yz2I9Gus",
                    title: "किलै हिंछ सड़क दुर्घटना ?",
                  },
                  {
                    id: "3NI-3apEKDw",
                    title: "कौन हैं अपना बलिदान देकर संसद भवन बचाने वाले ?",
                  },
                  {
                    id: "fyxsbJsW-tM",
                    title: "विटामिन बचाते हैं हमें बीमारी से",
                  },
                  {
                    id: "0NZvqXfLYHI",
                    title: "बिसनी देवी किलै गे जेल ?",
                  },
                  {
                    id: "Akr_ldMFgAY",
                    title: "महाभारत युद्ध की असली वजह ?",
                  },
                  {
                    id: "qbls1ng7BiA",
                    title: "श्रीरामचरितमानस की मुख्य पांच शिक्षा",
                  },
                  {
                    id: "liYxFHN9SsQ",
                    title: "मोबाइल पर हमारा उल जलूल देर तक बतियाना",
                  },
                  {
                    id: "N_Jz1eA6I_c",
                    title: "नए साल के लिए 12 संकल्प ( रिसोल्यूसन)",
                  },
                  {
                    id: "Wt1Xp-Pllq0",
                    title: "घुघुत खजूर छऊ चिलाड़ दौड़पुरि बेड़ू...",
                  },
                  {
                    id: "TLijHl02hko",
                    title: "जब सास -बहू में हो गया समझौता ?",
                  },
                  {
                    id: "wngVYvsXP9c",
                    title: "कुकुरां है बेडर बानर घरों में घुसैं रईं",
                  },
                  {
                    id: "ssDfgG-m1lY",
                    title: "टैंसन (तनाव) से बीमार हुई भेड़",
                  },
                  {
                    id: "IkG8efmjogQ",
                    title: "बस आइबै ज्यूजा पैलाग, ढोकोइ भिटोइ",
                  },
                  {
                    id: "33CJMTVruuI",
                    title: "जंगे आजादी के कई गुमनाम सिपाही",
                  },
                  {
                    id: "1e4NbQ4XVyo",
                    title: "मेरी यात्रा नागालैंड से गुजरात, अमरनाथ से तमिलनाडु",
                  },
                  {
                    id: "JQoGUi54VZw",
                    title: "पेट में गुटकी, मुखाड़ में गांठ !",
                  },
                  {
                    id: "cV9QRAdISHg",
                    title: "तेइस बरस में बनि गईं राज्य में मुख्यमंत्री दस",
                  },
                  {
                    id: "89ynFbjuDu8",
                    title: "को लगूं पहाड़ाक जंगवों में आग ?",
                  },
                  {
                    id: "ogf6M7lBKnY",
                    title:
                      "स्पेनिश गिटार वादक मदन खंडूरी, गणेश वंदना में संवरे शब्द",
                  },
                  {
                    id: "bhbaaMMHo2g",
                    title: "बिन पानी सब सून !",
                  },
                  {
                    id: "layf0afJvgY",
                    title: "गणेश जी की आरती के शब्द",
                  },
                  {
                    id: "W9vmo7U3D4Y",
                    title: "कैसे सीखते हैं गुटका धूम्रपान ?",
                  },
                  {
                    id: "8nQp5ibEDOI",
                    title: "23 से 26 जनवरी तक लगातार हमारे चार विशेष दिवस",
                  },
                  {
                    id: "ymvPmA7zQkw",
                    title: "बेबी फ़ूड में चीनी का तड़का !",
                  },
                  {
                    id: "xgb2OOOsqVQ",
                    title: "कसी बितीं 17 दिन सिलक्यारा सुरंग में ?",
                  },
                  {
                    id: "L86X8k2YmGw",
                    title:
                      "चंदन विष व्यापत... बसि कुसंग चाहत...संगत के दो पहलू।",
                  },
                  {
                    id: "7i0S4Blxwlo",
                    title: "रात कै टिटियां (टिटिहरी) खुट अगासकि तरफ ?",
                  },
                  {
                    id: "w6oAVIBzRUo",
                    title: "सही को सही और गलत को गलत कहने की हिम्मत कहां गई ?",
                  },
                  {
                    id: "Nd62kvSe7FY",
                    title: "स्वर्ग में अप्सरा लै बुबु दगै रौनी बल ?",
                  },
                  {
                    id: "H-fQ9qoUvtQ",
                    title: "कामवाली नहीं आई तो घरवाली का बीपी हाइ",
                  },
                  {
                    id: "HLmo3F7nQw4",
                    title: "दुर्योधन कैं कुसंटी दिणी एक उपटापि छी शकुनि",
                  },
                  {
                    id: "_TRTrAxtP-A",
                    title: "हाइ ब्लडप्रेशर का जिम्मेदार कौन ?",
                  },
                  {
                    id: "PoH6rCZT7dE",
                    title: "गुसैं, लक्ष्मण छि सुमित्रा नंदन पंत",
                  },
                  {
                    id: "_Sup23XTmHQ",
                    title: "कैसे बच सकते हैं कैंसर रोग से ?",
                  },
                  {
                    id: "iBEESNGhhnM",
                    title:
                      "हात जोड़ै द्याप्तां थान, कां हय मनचित कां हय ध्यान ?",
                  },
                  {
                    id: "JZKN94ed1SE",
                    title: "देवभूमि वीरभूमि राज्य उत्तराखंड",
                  },
                  {
                    id: "8VfuOuU1yW8",
                    title: "त्यर मुख उथां, म्यर मुख उथां, क्वीड़ कूं कथां ?",
                  },
                  {
                    id: "2WTdlr0Omsw",
                    title: "चिटियों के लिए पेड़ - पर्यावरण की दुर्दशा",
                  },
                  {
                    id: "myOX7_DWu-o",
                    title: "नाम - बदनामक भोगि कुड़ी पुरुख",
                  },
                  {
                    id: "LS-YTBFyMs4",
                    title: "घर में जे पाकल, सबूं कैं खाण पड़ल",
                  },
                  {
                    id: "lvlirrKuhi8",
                    title: "सिजेरियन डिलीवरी क्यों ?",
                  },
                  {
                    id: "YuzzC_TR7YU",
                    title: "उकैं बौव उठि रौ, उ कैकि बौव दि सकूं",
                  },
                  {
                    id: "GqkaPxJ-7cw",
                    title: "संजोकर रखी हैं प्यार-सम्मान की निशानियां",
                  },
                  {
                    id: "WwyFrvP84vk",
                    title: "फेसबुक वॉट्सएप रंगिल मोबाइल",
                  },
                  {
                    id: "wx6uXwRjbyI",
                    title: "हीट वेव, भीषण गर्मी, लुठारती लू से बचें !!",
                  },
                  {
                    id: "bEHf6O3YD9Y",
                    title: "को चेलिकि मन कसि करो बाप ?",
                  },
                  {
                    id: "ttD2nXljA3A",
                    title: "समय का भरोसा नहीं, समय होत बलवान",
                  },
                  {
                    id: "bRr2DQbgxi0",
                    title: "कुनइ मिलैबेर लै खटपट हैगे",
                  },
                  {
                    id: "xOoxiIGrDkc",
                    title: "बिना कर्म किए अनोखी चाह ?",
                  },
                  {
                    id: "_GYmW_1xnOI",
                    title: "गुलदाड़ - कुकुरी बाघ से नहीं डरी आशा",
                  },
                  {
                    id: "Pte88aLedEU",
                    title: "तीर - तुक्का, द्विए हात लड्डू !",
                  },
                  {
                    id: "kL6JU9MoAuo",
                    title: "बनिठनि बेर जैरै हुड़क्याणि जसि",
                  },
                  {
                    id: "WTPrggrqTFI",
                    title: "वह थीं भारत की पहली महिला शिक्षक ?",
                  },
                  {
                    id: "oAJpBuuFzjY",
                    title: "कक्षा 8 परीक्षा में कम अंक किलै ?",
                  },
                  {
                    id: "7wPn6XDyD7E",
                    title: "कुटिल खल कामी कौन ?",
                  },
                  {
                    id: "DEShRE1nnjg",
                    title: "'बटौव' पाँख लगै बेर उड़ण चानू",
                  },
                  {
                    id: "D9rYv03Kzkc",
                    title: "धूम्रपान करने वाले स्कूली बिगड़ैल बच्चे",
                  },
                  {
                    id: "KZGTfQNHdQc",
                    title: "बौज्यू (पिता जी) मिकैं बामण बनूण चांछी !",
                  },
                  {
                    id: "Fc6U8xVXI9s",
                    title: "सच्चा सुख कहां है ?",
                  },
                  {
                    id: "oSPnlFAGIvU",
                    title: "जैल गवै गत, वीकि हइ पट",
                  },
                  {
                    id: "4ILhmWm8XLs",
                    title: "व्हटसैप रंग - बिरंगा देखा !",
                  },
                  {
                    id: "vxKIPjW93HA",
                    title: "सत्संग भीड़ में जैबेर के ज्ञान मिलौ ?",
                  },
                  {
                    id: "PbSLZpEn7Qg",
                    title: "मन में उतरें, मन से न उतरें",
                  },
                  {
                    id: "2oBhBK-GLzA",
                    title: "कैसे कर सकते हैं नेत्रदान ?",
                  },
                  {
                    id: "6z3eBTZOTMw",
                    title: "उत्तराखंड में किसान कसी करो खेति ?",
                  },
                  {
                    id: "LanzPYgHalA",
                    title: "तूने मेरे पर्वतों को खोद कर दरका दिया",
                  },
                  {
                    id: "QCTwjrm6XFM",
                    title: "पाणि जंगव जमीन कैं माफिया खैगो",
                  },
                  {
                    id: "0zHrjWbEkZY",
                    title: "तलि बाखइ, मलि बाखइ भात खाणी औ हो !",
                  },
                  {
                    id: "MEnQ3A6OtI0",
                    title: "अल्मारी से चुपचाप शराब की चोरी",
                  },
                  {
                    id: "xuKOZSHOfZI",
                    title: "समाज क्यों नहीं बदलता ?",
                  },
                  {
                    id: "kfec8-7IcHU",
                    title: "आपण सुन ख्वट, परखणी के दोष ?",
                  },
                  {
                    id: "oL-2uWESx0Q",
                    title: "पैसे से सब कुछ नहीं खरीद सकते !",
                  },
                  {
                    id: "Fz7vfG5Kj9Q",
                    title: "पैंस सबकुछ न्हैति",
                  },
                  {
                    id: "LoqrtPiAUR0",
                    title: "सच बोलने से शादी होगी क्या ?",
                  },
                  {
                    id: "Y03-r7f5ee0",
                    title: "द्याप्तांकैं भांग धतुर शराब किलै चढ़ूंछा ...?",
                  },
                  {
                    id: "94pCo2-5GWY",
                    title: "हमारी आदतों से परेशान हैं कई लोग",
                  },
                  {
                    id: "bs34YjdxPC0",
                    title: "बरयात में टी एन शेषन ?",
                  },
                  {
                    id: "Jtmjhe3VlHs",
                    title: "68 दिनक कोरोना लौकडाउन में कसी ज्यौंन रईं शराबि ?",
                  },
                  {
                    id: "lf0SAhJLH10",
                    title: "दिल्ली पुलिस के पूर्व कांस्टेबल की उम्मीद ?",
                  },
                  {
                    id: "fvuW0fxb3cQ",
                    title: "फुरसत के क्षण में सोचो तो सही !",
                  },
                  {
                    id: "4RmH4BfMVKU",
                    title: "कैसे बचेगी हमारी धरती ?",
                  },
                  {
                    id: "BOM1DQjllCA",
                    title: "हीरा सिंह राणा ज्यूूकि याद",
                  },
                  {
                    id: "0M8NljjM8GE",
                    title: "जेल, कैदी और बुरा आदमी",
                  },
                  {
                    id: "dLV5UkH1Kco",
                    title: "हमारे सैनिक और हमारे भगवान",
                  },
                  {
                    id: "6VENtdOMx6A",
                    title: "पति परमेश्वर है तो पत्नी क्या है ?",
                  },
                  {
                    id: "OrwRfsVks9k",
                    title: "विश्व रक्तदान दिवस 14 जून क्यों ?",
                  },
                  {
                    id: "rhK3Fuay6rc",
                    title: "इस्कूल में जे नि सिख, उ बौज्यूल सिखा",
                  },
                  {
                    id: "aYozYgtTNdM",
                    title: "हमें किस बात का गर्व है ?",
                  },
                  {
                    id: "J_NrtlZWo0k",
                    title: "कैंट पर मिलल, बेईमानी नि हुणि चैनि !",
                  },
                  {
                    id: "D10ksgr3sMY",
                    title: "जां राम वां अजुध्या !",
                  },
                  {
                    id: "9W7kgnDe17A",
                    title: "सांचि बलै बेर इम्त्यान दिण पड़ल",
                  },
                  {
                    id: "K_D0Vex6yj4",
                    title: "योग या योगा ?",
                  },
                  {
                    id: "p7MRT0BBZKE",
                    title: "अंधविश्वासी प्रथाओंल फैद कैक हुंछ ?",
                  },
                  {
                    id: "xCTvGCaXpSk",
                    title: "कौनसा योग करते हैं आप ?",
                  },
                  {
                    id: "zBzp50iZrgE",
                    title: "हमार इस्कूलोंक रोल मौडल मास्टर",
                  },
                  {
                    id: "31VG4G2BRGs",
                    title: "जंगव उजाड़ि है आग लगुणियांल",
                  },
                  {
                    id: "JkzBOmzllKQ",
                    title: "226.A से J - दस अक्षर में स्वास्थ्य",
                  },
                  {
                    id: "gIZ6DYEZPcU",
                    title: "दिखावकि मुंडन कैक लिजी ?",
                  },
                  {
                    id: "Xt4lXWw5w00",
                    title: "स्वास्थ्य और संतुलित भोजन",
                  },
                  {
                    id: "RtWJsKkldb8",
                    title: "अंग्रेजी बलाण क्वे ठुलि बात नि हइ",
                  },
                  {
                    id: "eAHU98rphME",
                    title: "हमारी धरोहर, विश्व विरासत",
                  },
                  {
                    id: "8aQjEjpGO9A",
                    title: "यूं दस बातों कैं गांठ पाड़ो",
                  },
                  {
                    id: "MXLzW3UC5aU",
                    title: "आशा तृष्णा ना मरी...",
                  },
                  {
                    id: "TtOWkH0jQs0",
                    title: "यात्रा में सुन - चांदिक जेवर और झपटमार",
                  },
                  {
                    id: "sfRDavg965s",
                    title: "बहू की बात, मंथन तो करे सास !",
                  },
                  {
                    id: "8txA5WJKIp4",
                    title: "बाव कैं दे भुलिगो, बुड़ कैं दे मरिगो",
                  },
                  {
                    id: "3r8VzGLuMyc",
                    title: "मैं तुझे मानता हूं परंतु तेरी नहीं मानता !",
                  },
                  {
                    id: "ViZafAXb-D4",
                    title: "आज लै सैणियां पाट मैंस खेलैं रईं रामलिल में",
                  },
                  {
                    id: "_dq0yX5KXDw",
                    title: "कबूतरों को दाना चूहों से याराना",
                  },
                  {
                    id: "ibu-YK7GEMM",
                    title: "हमरि दुदबोलिक पैरोकार मथुरा दत मठपाल",
                  },
                  {
                    id: "34dmR0-Fo_Q",
                    title: "कामवाली, मनमर्जी का काम, कामवाली रहकर ही खुश ?",
                  },
                  {
                    id: "ofIgc_GHpP0",
                    title: "टी बी (तपेदिक) से कैसे बचें ?",
                  },
                  {
                    id: "EtGonrU7UEE",
                    title: "नौ नौड़त नौ सवाल ?",
                  },
                  {
                    id: "1mX9SzIsM9U",
                    title: "मोटे होने का मतलब बीमारी का अलार्म !",
                  },
                  {
                    id: "Rx_jQBMip3o",
                    title: "डाक्टर बनूंगा, इंजीनियर बनूंगा",
                  },
                  {
                    id: "SQhYINwh6o4",
                    title: "कभैं झन करिया हल्लाबड़ी !",
                  },
                  {
                    id: "0jJQXK51J3s",
                    title: "हमारे इक्कीस परमवीर",
                  },
                  {
                    id: "_xA87hvTsts",
                    title: "हिंदी सरिता",
                  },
                  {
                    id: "pSuSdjmwOmk",
                    title: "140 महामनखियों की बात",
                  },
                  {
                    id: "jIesz1IHQ-E",
                    title: "ढोलकिया परिवार की प्रेरक परम्परा",
                  },
                  {
                    id: "liYxFHN9SsQ",
                    title: "मोबाइल पर हमारा उल जलूल देर तक बतियाना",
                  },
                  {
                    id: "f9TsaVKS5AA",
                    title: "पुजपाठ कर्मकांड तय करी टैम पर हुण चैंछ",
                  },
                  {
                    id: "G8QLQwj1ibk",
                    title: "हाथरस फुलरई सत्संग भगदड़ में 121 अकाल मृत्यु",
                  },
                  {
                    id: "xKboz_PgdRU",
                    title: "ब्या में लिफाफ पकड़ौ या दान रजिस्टर में लेखौ",
                  },
                  {
                    id: "ZjzTeILbN2Q",
                    title: "प्रोटीन कार्बोहाइड्रेट क्या हैं और कहां मिलेंगे ?",
                  },
                  {
                    id: "fE0OuUKC3ZU",
                    title: "अन्यासाक गांठ समाउणकि आदत छ हमरि",
                  },
                  {
                    id: "e2Tf90yHzug",
                    title: "मूर्खों हैं बै उमीद करण ठुलि मूर्खता हइ",
                  },
                  {
                    id: "Wt1Xp-Pllq0",
                    title: "घुघुत खजूर छऊ चिलाड़ दौड़पुरि बेड़ू...",
                  },
                  {
                    id: "4dYiJth9pf4",
                    title: "कछुआ - खरगोस व गिलहरी - कौआ",
                  },
                  {
                    id: "BmTg-BzdceI",
                    title: "भूत नाचन नाचनै भाजौ",
                  },
                  {
                    id: "a54lKRF0OmA",
                    title: "अगर ये मशीन बन गई तो ?",
                  },
                  {
                    id: "lvlirrKuhi8",
                    title: "सिजेरियन डिलीवरी क्यों ?",
                  },
                  {
                    id: "znmYETqRPMo",
                    title: "हरेले के त्यौहार पर पौध रोपण",
                  },
                  {
                    id: "cztrg1sC4l8",
                    title: "तन मेरो यां छ नंदा, मन जैरौ उनरि पास",
                  },
                  {
                    id: "_PdvhpKEhL4",
                    title: "चूहों से बचाओ इस पार्क को !!",
                  },
                  {
                    id: "4W-bk6ujEWs",
                    title: "मनुष्य के लिए सबसे मुश्किल कार्य ?",
                  },
                  {
                    id: "PkVlneq9GsE",
                    title: "मूसलाधार से हर्षित रघुवंशी और पांडव",
                  },
                  {
                    id: "HLmo3F7nQw4",
                    title: "दुर्योधन कैं कुसंटी दिणी एक उपटापि छी शकुनि",
                  },
                  {
                    id: "wFbNuk4-pac",
                    title: "किससे होती हैं प्रतिदिन दो हजार सात सौ मौत ?",
                  },
                  {
                    id: "LoGyYtg7BEc",
                    title: "गुड़हल मौसमी से पार्क श्रृंगार",
                  },
                  {
                    id: "7wPn6XDyD7E",
                    title: "कुटिल खल कामी कौन ?",
                  },
                  {
                    id: "M1UvVwbNIws",
                    title: "ननाकि गलत तरफदारी नि करो !",
                  },
                  {
                    id: "2oBhBK-GLzA",
                    title: "कैसे कर सकते हैं नेत्रदान ?",
                  },
                  {
                    id: "myOX7_DWu-o",
                    title: "नाम - बदनामक भोगि कुड़ी पुरुख",
                  },
                  {
                    id: "bvImXZAHgNY",
                    title: "आम आदमी नहीं जानता कैसे पकते हैं आम ?",
                  },
                  {
                    id: "YEdH0iUIq_Y",
                    title:
                      "PVC.1 मेजर सोमनाथ शर्मा.परमवीर चक्र.4 कुमाऊं रेजिमेंट",
                  },
                  {
                    id: "bEHf6O3YD9Y",
                    title: "को चेलिकि मन कसि करो बाप ?",
                  },
                  {
                    id: "xuKOZSHOfZI",
                    title: "समाज क्यों नहीं बदलता ?",
                  },
                  {
                    id: "8kvQqBW21qs",
                    title: "कतू साल ज्यौंन रईं उं ?",
                  },
                  {
                    id: "lf0SAhJLH10",
                    title: "दिल्ली पुलिस के पूर्व कांस्टेबल की उम्मीद ?",
                  },
                  {
                    id: "oAJpBuuFzjY",
                    title: "कक्षा 8 परीक्षा में कम अंक किलै ?",
                  },
                  {
                    id: "GPxjOEW89hg",
                    title: "कारगिल विजय के 25 साल, भारतीय सेना बेमिसाल",
                  },
                  {
                    id: "0zHrjWbEkZY",
                    title: "तलि बाखइ, मलि बाखइ भात खाणी औ हो !",
                  },
                  {
                    id: "hBCLXatlF9U",
                    title: "कारगिल के रणबांकुरे, युद्ध 1999",
                  },
                  {
                    id: "wUlwfKQ1o1I",
                    title: "वजन बढ़िगो, कमर में मोटापा चढ़िगो",
                  },
                  {
                    id: "m4eD0qMgFkw",
                    title: "बड़े अद्भुत, अनोखे और निराले थे कलाम साहब !",
                  },
                  {
                    id: "kfec8-7IcHU",
                    title: "आपण सुन ख्वट, परखणी के दोष ?",
                  },
                  {
                    id: "9_-SmhaRsZk",
                    title: "कलाम साहब व सैम मानेकशॉ, दोनों को सैल्यूट",
                  },
                  {
                    id: "CArcXRFr2zI",
                    title: "हैपैटाइटिस (पीलिया) नहीं होगा यदि...",
                  },
                  {
                    id: "bs34YjdxPC0",
                    title: "बरयात में टी एन शेषन ?",
                  },
                  {
                    id: "WCo6h4C05tU",
                    title: "कालीबेन नदी के संत सीचेवाल ।",
                  },
                  {
                    id: "UrvXCe_LG-w",
                    title: "कै बेर मन हल्क है जां पर कूं कैहूं ?",
                  },
                  {
                    id: "dLV5UkH1Kco",
                    title: "हमारे सैनिक और हमारे भगवान",
                  },
                  {
                    id: "fP4Rp5vJw0o",
                    title:
                      "PVC.3 मेजर रामा राघोबा राने.परमवीर चक्र. बॉम्बे इंजीनियर्स",
                  },
                  {
                    id: "SxBdRLbYZII",
                    title: "इग्नौर करण सिखण पड़ल",
                  },
                  {
                    id: "Q-kd23OK9Wo",
                    title:
                      "PVC.4 सीएचएम पीरु सिंह. परमवीर चक्र.6 राजपूताना राइफल्स",
                  },
                  {
                    id: "C7v_xRbiCy0",
                    title: "मंदिर/बाबा के नाम से शराब चढ़ाने वाले ?",
                  },
                  {
                    id: "9W7kgnDe17A",
                    title: "सांचि बलै बेर इम्त्यान दिण पड़ल",
                  },
                  {
                    id: "tlvG0SyP70M",
                    title:
                      "PVC.5 लांस नायक. औ. कैप्टन करम सिंह परमवीर चक्र.प्रथम सिक्ख रेजिमेंट",
                  },
                  {
                    id: "jxibpk8mj9o",
                    title: "स्वास्थ्य शिक्षा में मासिक धर्म",
                  },
                  {
                    id: "JHIeQSGdWAg",
                    title: "पैली बै गोठ - छुतकुड़ि रौंछी छुतिय",
                  },
                  {
                    id: "xtQdc7Fgv2k",
                    title: "चूहे, पार्क, वर्षा, बेसमेंट और हम लोग",
                  },
                  {
                    id: "xGL-UPkSdKw",
                    title: "य बात म्यार समझ नि आइ",
                  },
                  {
                    id: "PQpSmA1FV9g",
                    title: "जिंदगी का एक मिशन, झाड़ू पोछा और किचन!",
                  },
                  {
                    id: "xE5C8HzefLM",
                    title:
                      "PVC.6 कैप्टन गुरबचन सिंह सलारिया.परमवीर चक्र.3/I GR",
                  },
                  {
                    id: "HAPLqDBsKLM",
                    title: "Meri 34 kitabo ki charcha",
                  },
                  {
                    id: "t84zHsWprFw",
                    title: "उत्तराखंड में स्यैणियांकि व्यथा",
                  },
                  {
                    id: "dt0BxaFwM30",
                    title: "PVC.7 मेजर धन सिंह थापा. परमवीर चक्र.1/8 GR",
                  },
                  {
                    id: "lwpRzO__mLg",
                    title: "संस्कृति हमला",
                  },
                  {
                    id: "N82i18-QO8k",
                    title: "जिंदगी उकाव जिंदगी होराव",
                  },
                  {
                    id: "F_fI_cZ0BP8",
                    title: "फेसबुकिए दोस्त नहीं थे कृष्ण - सुदामा",
                  },
                  {
                    id: "ZDRIGQrJjb0",
                    title: "दाड़िकि बात",
                  },
                  {
                    id: "D-3QJGIhnAE",
                    title:
                      "PVC.8 सूबेदार जोगिंदर सिंह .परमवीर चक्र. 1 सिक्ख रेजिमेंट",
                  },
                  {
                    id: "Fz7vfG5Kj9Q",
                    title: "पैंस सबकुछ न्हैति",
                  },
                  {
                    id: "B4AOEPn8usA",
                    title: "गुटखा तम्बाकू धूम्रपान, लहू तेरा पी रहे सुनसान।",
                  },
                  {
                    id: "0o01X4Kcu8M",
                    title: "भीगा बिल्ला बन, पत्नी पर मत तन !!",
                  },
                  {
                    id: "CQlfYtencno",
                    title: "बैंड पार्टीक ऑडिट",
                  },
                  {
                    id: "AY3aeHAr8AQ",
                    title:
                      "PVC.9 मेजर शैतान सिंह. परमवीर चक्र.13 कुमाऊं रेजीमेंट",
                  },
                  {
                    id: "kpcf-t9WZqU",
                    title: "हमरि भाषा हमरि पछ्याण",
                  },
                  {
                    id: "xLwRWxWb8qw",
                    title: "कर खुद अपना संचालन तू",
                  },
                  {
                    id: "uLQeH0HIHfQ",
                    title: "PVC.10 CQMH अब्दुल हमीद परमवीर चक्र.4 ग्रेनेडियर",
                  },
                  {
                    id: "aVmbl7ZKcfY",
                    title: "मि तोप जसि छी",
                  },
                  {
                    id: "58Rin9KDdRs",
                    title: "गैरसैण किलै नि गेइ राजधानी ?",
                  },
                  {
                    id: "qJe7U86HMts",
                    title:
                      "PVC.11 ले., कर्नल ए बी तारापोर परमवीर चक्र. 17 पूने हॉर्स",
                  },
                  {
                    id: "M30wm4KwXdQ",
                    title:
                      "PVC.12 लांस नायक अलबर्ट ऐक्का. परमवीर चक्र.14 गार्ड रेजीमेंट",
                  },
                  {
                    id: "9T2jO3DQVCc",
                    title: "राह दिखाई जिन पथिकों ने...",
                  },
                  {
                    id: "KAqWd7b7los",
                    title: "फूल हंसे वर्षा जब आई, यही वक्त है पौध रोपाई",
                  },
                  {
                    id: "aPQbpMWI3F8",
                    title: "नानतिनाओ रे पिछाड़ि झन रया",
                  },
                  {
                    id: "JiLMeGSwBoQ",
                    title: "17वें मेधावी स्मृति सम्मान 2023",
                  },
                  {
                    id: "-RebicFIOnI",
                    title:
                      "PVC.13 सेकेंड लेफ्टीनेंट अरुण क्षेत्रपाल. परमवीर चक्र. 17 पूने हॉर्स",
                  },
                  {
                    id: "5L8mxZZu-2A",
                    title: "तुम जरूर मनौ पन्नर अगस्त",
                  },
                  {
                    id: "ym4c4vIL-ps",
                    title: "मेधावी  स्मृति सम्मान 2024 के 7 विद्यार्थी",
                  },
                  {
                    id: "eyRr-p-tLL0",
                    title: "माटी की महक में एक मुहल्ले का 15 अगस्त।",
                  },
                  {
                    id: "vgQm1jUOXwo",
                    title: "हम स्वतंत्र हैं, कौन रोकेगा हमें (व्यंग्य)",
                  },
                  {
                    id: "esYFRv3QToc",
                    title:
                      "PVC.14 मेजर होशियार सिंह परमवीर चक्र . 3 ग्रेनेडियर रेजीमेंट",
                  },
                  {
                    id: "JtreSKV3vd8",
                    title: "चूहे, कुत्ते, हा हा व ठक ठक का बखेड़ा",
                  },
                  {
                    id: "A9FpzVBCLLA",
                    title: "घरवाइकि जीत",
                  },
                  {
                    id: "U9JDDVwL4Bs",
                    title: "तिरंगे की शान, बच्चों का स्वतंत्रता दिवस ज्ञान",
                  },
                  {
                    id: "LzZ-Ux7aiIo",
                    title:
                      "रक्षाबंधन 2024 श्रावणपूर्णिमा  शुभ मुहूर्त के वारे में विशेष जानकारी अवश्य श्रवण करें#rakshabandhan",
                  },
                  {
                    id: "kYBR5RCwc-I",
                    title:
                      "PVC.15 फ्लाइंग ऑफिसर निर्मलजीत सिंह सेखूं.परमवीर चक्र.भारतीय वायु सेना",
                  },
                  {
                    id: "opIxNtSjwSI",
                    title: "असीमित रक्षाबंधन में किसकी रक्षा ?",
                  },
                  {
                    id: "4tqtO7I9Wgk",
                    title: "प्रण करणकि और प्रणकैं निभूणकि हिम्मत चैंछ !",
                  },
                  {
                    id: "9UjmrtPDZjk",
                    title: "पोखर के मोती हैं कप्तान साब",
                  },
                  {
                    id: "xo0bI07pXV4",
                    title: "उकाव -होराव में नंदक मिजाट",
                  },
                  {
                    id: "zv3WXVb1dwU",
                    title:
                      "PVC.16 नायब सूबेदार. औ कैप्टन. बाना सिंह परमवीर चक्र.8 J&K लाइट इंफेंट्री",
                  },
                  {
                    id: "hDocfPWAOto",
                    title: "बंजर में अंकुर का बंधुआ हलिया",
                  },
                  {
                    id: "lKEoOwAiQJY",
                    title:
                      "कुत्ता.उल्लू .गनेल .शनि. प्रेत के नाम से डराने वाले ?",
                  },
                  {
                    id: "SU2aT8GAbAY",
                    title:
                      "PVC.17 मेजर रामास्वामी परमेश्वरन. परमवीर चक्र .8 महार रेजीमेन्ट",
                  },
                  {
                    id: "hIaIUfPf0Oc",
                    title: "बीच कमर में बै भैंसाक द्वि हिस्स करीं उनूल ?",
                  },
                  {
                    id: "u4Y1aizbCcY",
                    title:
                      "PVC.18 कैप्टन मनोज कुमार पांडे परमवीर चक्र. 1/11 GR",
                  },
                  {
                    id: "SS9gNo6Cwe8",
                    title: "यथार्थ के आईने में 101 तस्वीर",
                  },
                  {
                    id: "KyyNzv1hGss",
                    title: "शेरदा अनपढ़क द्वि दिनक ड्यर",
                  },
                  {
                    id: "ni018owr7r4",
                    title: "यदि वह श्रीकृष्ण की सुनता तो महाभारत नहीं होता!",
                  },
                  {
                    id: "BOkFmXrIRCM",
                    title: "जन्माष्टमी पर क्या कह रहे हैं श्रीकृष्ण ?",
                  },
                  {
                    id: "W_FS9bnBzpY",
                    title:
                      "जीता 2024 मेधावी सम्मान, बढ़ाया अपने विद्यालय का मान !",
                  },
                  {
                    id: "BjlnqvYsK_0",
                    title: "जिंदगी की जंग में निराला गोताखोर",
                  },
                  {
                    id: "0uIUkDE-KPw",
                    title:
                      "PVC. 19 ग्रेनेडियर (सूबेदार) योगेंद्र सिंह यादव . परमवीर चक्र . 18 ग्रेनेडियर रेजीमेंट",
                  },
                  {
                    id: "s5uhXtx7TLg",
                    title: "उजाले की ओर, पूजास्थलों में चोर",
                  },
                  {
                    id: "p-S1En25UGU",
                    title: "रातिब्याण कै जब डवां में...",
                  },
                  {
                    id: "GoSTt55KSe0",
                    title: "घरवाइ दगै भौनिकाक ऐग्रीमेंट",
                  },
                  {
                    id: "FMBWcqgQCDo",
                    title: "हिम्मत बटोव, टुटिए झन",
                  },
                  {
                    id: "BakenyX6drc",
                    title:
                      "PVC.20 रा. मैन (सूबेदार मेजर) संजय कुमार परमवीर चक्र.13  जे के राइफल्स",
                  },
                  {
                    id: "wjnm3XWnn_I",
                    title: "विधवा - दर्द, कौन सुने सिसकी ?",
                  },
                  {
                    id: "JB-AGbMKS_8",
                    title: "हिम्मतल करो गलतक विद्रोह !",
                  },
                  {
                    id: "PMMXBXg-Ilc",
                    title:
                      "PVC. 21 कैप्टन विक्रम बत्रा परमवीर चक्र . 13 जे के राइफल्स",
                  },
                  {
                    id: "LyaARNndfgk",
                    title: "खद्दर के कफन में लिपटने की चाह",
                  },
                  {
                    id: "uUp-Iw-T2nU",
                    title: "वह बिना पूछे मेरे स्कूटर में बैठ गई",
                  },
                  {
                    id: "ICOt_Qpg4DQ",
                    title: "तमाकु पिहैं भ्यार जौ",
                  },
                  {
                    id: "CIlMO5taV30",
                    title: "बुड़ल करी मजाक, जजल दी सजा ?",
                  },
                  {
                    id: "9zG9wI-6XRE",
                    title: "कुछ बेड़ियां टूट चुकी, कुछ तोड़नी हैं।",
                  },
                  {
                    id: "zsZv5Z13ua4",
                    title: "हरीं सागकि कढै भ्यार च्वटै",
                  },
                  {
                    id: "CfdNpo86BdY",
                    title: "ऊंचे सपने संजोकर, कोचिंग लेने आए वे शहर !",
                  },
                  {
                    id: "hI-pSw_PulM",
                    title: "खिमका आपणि ब्योलि हैं नि बलै सक",
                  },
                  {
                    id: "DA9Uo5WtNUE",
                    title: "शिक्षक दिवस पर एक अद्भुत शिक्षक की गाथा !",
                  },
                  {
                    id: "Ap5wPtkSV_8",
                    title: "कलम-कमेट-पाटी से लेकर आजतक के अनंत शिक्षकों को नमन",
                  },
                  {
                    id: "B9EVFZLXKJw",
                    title: "चालिस वर्ष एक समर्पित शिक्षक बनि बेर रईं उं !",
                  },
                  {
                    id: "2C9xlYUgNjs",
                    title: "सब जगह सुलभ चाहता था वो !",
                  },
                  {
                    id: "ogf6M7lBKnY",
                    title:
                      "स्पेनिश गिटार वादक मदन खंडूरी, गणेश वंदना में संवरे शब्द",
                  },
                  {
                    id: "layf0afJvgY",
                    title: "गणेश जी की आरती के शब्द",
                  },
                  {
                    id: "nQJYZgg-pDo",
                    title: "बात बातों में खालि भड़िकि गोय उ !",
                  },
                  {
                    id: "s5XkupIRuYc",
                    title: "वह झटपट शादी को तैयार हो गई !",
                  },
                  {
                    id: "b3lB3fm33S8",
                    title: "भ्रष्टाचार का अजगर",
                  },
                  {
                    id: "YSqQhV3IJJM",
                    title: "घर जाणता चाण गूड़ मिसिरि गट्ट",
                  },
                  {
                    id: "GG7AkP1G0LQ",
                    title:
                      "ग्रह नक्षत्र भाग्य भगवान, दोषी बतावें मूढ़ अज्ञान !",
                  },
                  {
                    id: "ytGSOXyqMpY",
                    title: "कोई आत्महत्या क्यों करता है ?",
                  },
                  {
                    id: "o7THwezWmsI",
                    title: "तेरी सलामती पर अगिनत हुए कुर्बान",
                  },
                  {
                    id: "ZQ4ryvq0xVo",
                    title: "भैटी भैटिए पटै जानी घुन",
                  },
                  {
                    id: "zkg1cFF1bE4",
                    title: "गणेश जी की आरती के शब्द बदलिए...",
                  },
                  {
                    id: "7ho3I6fH-LA",
                    title: "रामायण महाकाव्य में केकई और मंथरा",
                  },
                  {
                    id: "97AvPZlTL1Q",
                    title: "दिन उजला क्यों रात है काली ?",
                  },
                  {
                    id: "EiO1AH2MVc0",
                    title: "कतु रंगिल कुमाऊं, कतु छबिल गढ़वाल ?",
                  },
                  {
                    id: "jfoBBJ_Iw3U",
                    title:
                      "लोगों ने पार्क में खाना डाला, चूहों ने पार्क खोद डाला।",
                  },
                  {
                    id: "KsMMz7Co1Jk",
                    title: "गौं-गाड़ घर -घर पुजि शराब",
                  },
                  {
                    id: "EK24irqaYmo",
                    title: "महाभारत के मुख्य दस किरदार हमें बता गए !",
                  },
                  {
                    id: "rGj8iGbcpwM",
                    title: "लघु भारत दिल्ली की सैर",
                  },
                  {
                    id: "5KO-CPaDnrQ",
                    title: "बिना सुई लगाए वह नहीं सोया ?",
                  },
                  {
                    id: "Rx_jQBMip3o",
                    title: "डाक्टर बनूंगा, इंजीनियर बनूंगा",
                  },
                  {
                    id: "IlfAS6JM3hM",
                    title: "इतनी शक्ति हमें देना",
                  },
                  {
                    id: "oIGJNzgtDso",
                    title: "एकैकैं माफ करि दे, एकैहैं माफि मांग ल्ही !",
                  },
                  {
                    id: "DkImm13YNCo",
                    title: "हीरा सिंह राणा कैं उनरै गीतों में श्रद्धांजलि",
                  },
                  {
                    id: "eJQTkiEqToI",
                    title: "सच और झूठ के बीच का रास्ता",
                  },
                  {
                    id: "arcscTbTPvY",
                    title: "तिरंगे की आन बान शान के अलबेले पहरेदार !",
                  },
                  {
                    id: "UN56uEq6u7o",
                    title: "हींग लगे ना फिटकरी, भेज मोबाइल कट पेस्ट",
                  },
                  {
                    id: "IkshKj1Pd2o",
                    title: "मासैप चुलफन फैरीं",
                  },
                  {
                    id: "GFz_OhGHbZw",
                    title: "रावण को मैंने नहीं मारा मां !",
                  },
                  {
                    id: "4mDCZVE2jQ0",
                    title: "आंखरोंकि मस्याव छ कविता",
                  },
                  {
                    id: "6V7AR2oN9SQ",
                    title: "एक मेरे कहने -करने से क्या होगा ?",
                  },
                  {
                    id: "Xoz4qq8d1To",
                    title: "लोग कूं रईं काव महैण (काला महीना) लैरौ बल !",
                  },
                  {
                    id: "rt13ZPJ_oAQ",
                    title: "मोबाइल लत ने बना दिया रोबोट",
                  },
                  {
                    id: "KghQIaQlmZc",
                    title: "आलोचना के बीच सराहना",
                  },
                  {
                    id: "0pTJIvf6_Vs",
                    title: "न खुट न हात, निक करूं जिंदगीकि बात !",
                  },
                  {
                    id: "bM4Vcorz68A",
                    title: "मि किलै चणी रनू ?",
                  },
                  {
                    id: "0AlCU070Wtc",
                    title: "कवि सम्मेलन में चार चेलियांकि अद्भुत प्रस्तुति",
                  },
                  {
                    id: "Gx7dHma7xZ4",
                    title: "लड़के रहे कुंआरे, कहां गईं लड़कियां ?",
                  },
                  {
                    id: "vPtJSMRaHbg",
                    title: "सुभाष - टैगोर ने बापू को क्या कहा ?",
                  },
                  {
                    id: "VLmnFWkYJa4",
                    title: "पैली बै मै-बाप नना पर नजर धरछी",
                  },
                  {
                    id: "OsSaZMqT-dM",
                    title: "जूते - चप्पल का भी है एक सलीका  !",
                  },
                  {
                    id: "vqVvXZG7JYQ",
                    title:
                      "कुमाऊँनी रामलीला तालीम ( दशरथ- कैकेयी संवाद) विहाग- जैजैवंती",
                  },
                  {
                    id: "K4EplShOAeM",
                    title:
                      "भरत-कैकई संवाद !! जय काली माँ रामलीला कमेटी !! कालीखोली !! द्वाराहाट !!तालीम !!",
                  },
                  {
                    id: "VXY-3ljLl5M",
                    title: "गंगाक कंकाव, को करल समाव ?",
                  },
                  {
                    id: "qVq59Pikuew",
                    title: "जो पेड़ हमने लगाया पहले...",
                  },
                  {
                    id: "DeKALH2pi68",
                    title: "कसाइ डाक्टरों पास कभैं झन जया !",
                  },
                  {
                    id: "O2FZOIr2QjY",
                    title: "वो व्रत रखकर मरने भी नहीं देती ?",
                  },
                  {
                    id: "NGAtJ2Q38uk",
                    title: "कान लगै बेर भै रईं घर फोड़णी",
                  },
                  {
                    id: "3eQDfZnDef8",
                    title: "गलतफहमी के शिकार, पड़ोसी रिश्तेदार",
                  },
                  {
                    id: "cigqwpmlRyk",
                    title: "हमारा पड़ोसी काम आया या नहीं ?",
                  },
                  {
                    id: "QCTwjrm6XFM",
                    title: "पाणि जंगव जमीन कैं माफिया खैगो",
                  },
                  {
                    id: "Efh74FW0wbQ",
                    title: "ये नियमावली बच्चों को बताओ तो सही !",
                  },
                  {
                    id: "e8tZhpqsgEc",
                    title: "देशकि बात हो देशकि याद हो",
                  },
                  {
                    id: "z7-ubcBWCgY",
                    title: "एक गोली एक दुश्मन",
                  },
                  {
                    id: "WS_jKOiJHCw",
                    title: "चार चेलियांक सामणि ' म्यर सवाल ' ?",
                  },
                  {
                    id: "xgb2OOOsqVQ",
                    title: "कसी बितीं 17 दिन सिलक्यारा सुरंग में ?",
                  },
                  {
                    id: "MG35SAsmaew",
                    title: "सबके चहेते हैं ये दो कौमेडियन !",
                  },
                  {
                    id: "1YM7LbMuQSw",
                    title: "चार प्रकार के मनुष्यों में अपनी श्रेणी खुद देखो ?",
                  },
                  {
                    id: "BbtVR6xRZmI",
                    title: "झिमौड़ अंगनार लै बनि जानी",
                  },
                  {
                    id: "_EjeIjUtRrQ",
                    title: "मैंसूं हैं दाव, सैणियां हैं झोइ ?",
                  },
                  {
                    id: "8S2Yv00tXmM",
                    title:
                      "महालय श्राद्ध पूजा पितृ अमावस 2 October 2024#श्राद्धपक्ष2024 #पितृपक्ष #bhagawat #krishna #durgapuja",
                  },
                  {
                    id: "oxKadqMKOkU",
                    title: "दशरथ माझी के दृढ़ संकल्प ने झुकाया पहाड़",
                  },
                  {
                    id: "N6lZ6oqY6L0",
                    title: "रावणाक तानतोफान और डायलॉग",
                  },
                  {
                    id: "1uG13i2v6n4",
                    title:
                      "🚩शरद नवरात्रि 2024 कलश स्थापना का विशेष मुहूर्त अवश्य श्रवणकरें#durgapuja #dussehra #durgapuja2024🚩🙏",
                  },
                  {
                    id: "xUHfIU1zqJ8",
                    title: "कोट पैंट टाइ क्यों फैंकी उस व्यक्ति ने ?",
                  },
                  {
                    id: "DF2BYNlm9M0",
                    title: "18 बार जेल गए शास्त्री जी !",
                  },
                  {
                    id: "LYRavHusLcA",
                    title: "न बंदर सुधरा और न सांप",
                  },
                  {
                    id: "un0nSdgWx_0",
                    title: "कसी सिखाई जो कुमाउनी भाषा ?",
                  },
                  {
                    id: "-xIaBe5Powo",
                    title: "नवरात्र में हम मां दुर्गा से क्या मांगें ?",
                  },
                  {
                    id: "YeIBKkQTJdw",
                    title: "हमारी रामलीला के बाली और विभीषण",
                  },
                  {
                    id: "GPgheIdFQFY",
                    title: "जब गणतू -पुछ्यारुक लै गोय तुक्क",
                  },
                  {
                    id: "zMqQI9R7VB8",
                    title: "क्या कहती है हर साल रामलीला हमसे ?",
                  },
                  {
                    id: "h4V7poaq6TM",
                    title: "प्रेसर हॉर्न का बेखौप करकस शोर",
                  },
                  {
                    id: "sA-v1tiKUEQ",
                    title: "राजधानी एक दिन जरूर जालि गैरसैण",
                  },
                  {
                    id: "3NI-3apEKDw",
                    title: "कौन हैं अपना बलिदान देकर संसद भवन बचाने वाले ?",
                  },
                  {
                    id: "G7xmZdCQHhY",
                    title: "बिजली बल्ब समेत 1093 पेटेंट थे उसके नाम !",
                  },
                  {
                    id: "JZKN94ed1SE",
                    title: "देवभूमि वीरभूमि राज्य उत्तराखंड",
                  },
                  {
                    id: "PSrvdDh1QyI",
                    title: "ये हैं दानवीरों में महादानी रतन !",
                  },
                  {
                    id: "6ve_EbNOMgo",
                    title:
                      "चतुर्थ दिवस की रामलीला !! कालीखोली !! द्वाराहाट !! उत्तराखण्ड !! दशरथ-कैकई संवाद !! भाग-दो !!",
                  },
                  {
                    id: "ssDfgG-m1lY",
                    title: "टैंसन (तनाव) से बीमार हुई भेड़",
                  },
                  {
                    id: "O2EX8Mb44uM",
                    title: "बारों महैंण त्यारै त्यार, घर ऐ जानी जो छीं भ्यार",
                  },
                  {
                    id: "fPYeizTIKJk",
                    title: "नौर्त, बर्त और लंगण में फरक हुंछ !",
                  },
                  {
                    id: "33CJMTVruuI",
                    title: "जंगे आजादी के कई गुमनाम सिपाही",
                  },
                  {
                    id: "1e4NbQ4XVyo",
                    title: "मेरी यात्रा नागालैंड से गुजरात, अमरनाथ से तमिलनाडु",
                  },
                  {
                    id: "3eplvC6pzbw",
                    title: "वीक मरण पर किलै खुशि हईं लोग ?",
                  },
                  {
                    id: "PSrvdDh1QyI",
                    title: "ये हैं दानवीरों में महादानी रतन !",
                  },
                  {
                    id: "xLUUHukIIJY",
                    title:
                      "कालीखोली!! रामलीला!! द्वाराहाट!! केकेई!!का राजा दशरथ से दो वर मांगना!!",
                  },
                  {
                    id: "Aqd2PWiKNKU",
                    title: "रॉक गार्डन चंडीगढ़ में जिंदा है नेकचंद",
                  },
                  {
                    id: "86C8K7h6ojg",
                    title: "बेबाक रावण का दमदार इंटरव्यू...",
                  },
                  {
                    id: "ViZafAXb-D4",
                    title: "आज लै सैणियां पाट मैंस खेलैं रईं रामलिल में",
                  },
                  {
                    id: "IPa0QiueWNw",
                    title:
                      "न्याय की देवी की आंख पर काली पट्टी, हाथ में तराजू और तलवार क्यों ?",
                  },
                  {
                    id: "Xb_Hpl7SIhQ",
                    title: "सुंदरकांड संचालक का अपना ही राग...",
                  },
                  {
                    id: "qiHyHmrTJGo",
                    title: "घमंड बनै द्यूं शैतान, नम्रता बनै दीं भगवान",
                  },
                  {
                    id: "tGujLL0z2hw",
                    title: "दुर्गापूजा और रामलीला के इन्द्रधनुषी रंग...",
                  },
                  {
                    id: "ARuM_vuP0o4",
                    title: "को छ य चनरदा ?",
                  },
                  {
                    id: "iFrC6Xwb_JQ",
                    title: "दिवंगत को क्यों और कैसे दी जाती है श्रद्धांजलि ?",
                  },
                  {
                    id: "L86X8k2YmGw",
                    title:
                      "चंदन विष व्यापत... बसि कुसंग चाहत...संगत के दो पहलू।",
                  },
                  {
                    id: "RhtLfRm4phk",
                    title: "अंग्रेजी बलै बेर इंप्रेशन बनू ?",
                  },
                  {
                    id: "H8FTfrwaqe0",
                    title:
                      "रामलीला संदेश में शूर्पणखा आचरण, सीता हरण व रावण  मरण...",
                  },
                  {
                    id: "cfHwtRXw_0A",
                    title: "मर्यादा पुरुषोत्तम राजा रामचंद्र की प्रजा...",
                  },
                  {
                    id: "LR1ZtYwpiH4",
                    title: "गोरु - बछांकि बेकदरी किलै हैरै ?",
                  },
                  {
                    id: "IPa0QiueWNw",
                    title:
                      "न्याय की देवी की आंख पर काली पट्टी, हाथ में तराजू और तलवार क्यों ?",
                  },
                  {
                    id: "_TRTrAxtP-A",
                    title: "हाइ ब्लडप्रेशर का जिम्मेदार कौन ?",
                  },
                  {
                    id: "9nnJyKeuMlk",
                    title: "दरवाजे भी बोलते हैं आपके व्यवहार पर ...",
                  },
                  {
                    id: "_Sup23XTmHQ",
                    title: "कैसे बच सकते हैं कैंसर रोग से ?",
                  },
                  {
                    id: "o6jOHud1vCc",
                    title: "एक ब्वारि गोठ जाणी छ, एक धिंगणा हैरै",
                  },
                  {
                    id: "F3P_PURUoYA",
                    title: "वैज्ञानिक अलबर्ट आइंस्टाइन के ड्राइवर का संदेश...",
                  },
                  {
                    id: "cyQYxJUTOY0",
                    title: "मन की व्यथा बताऊं या नहीं बताऊं ?",
                  },
                  {
                    id: "IBDebFr0t5s",
                    title:
                      "विकलांगता को जीतने वाले महान वैज्ञानिक स्टीफन हॉकिंग",
                  },
                  {
                    id: "XZIIz5J9XV8",
                    title: "आस्था श्रद्धा का व्रत करवाचौथ...",
                  },
                  {
                    id: "Hm2OTFcK4y4",
                    title: "ग्वेल ज्यूक न्याय दुनिया जाणिछ",
                  },
                  {
                    id: "YiEIaqmrB-o",
                    title: "द्वि अयाणि ब्वारियांकि सयाणि सासु",
                  },
                  {
                    id: "O2FZOIr2QjY",
                    title: "वो व्रत रखकर मरने भी नहीं देती ?",
                  },
                  {
                    id: "D9rYv03Kzkc",
                    title: "धूम्रपान करने वाले स्कूली बिगड़ैल बच्चे",
                  },
                  {
                    id: "CR3PV-lW06s",
                    title: "ब्रेन डिटॉक्सिफिकेशन अर्थात दिमाग की सफाई...",
                  },
                  {
                    id: "1NfBblmy0OU",
                    title: "समय का महत्व है फास्टेस्ट फिंगर टैस्ट !",
                  },
                  {
                    id: "DdfzH_WYX_Y",
                    title: "बाल व्यक्तित्व निर्माण में बालप्रहरी अल्मोड़ा...",
                  },
                  {
                    id: "MEnQ3A6OtI0",
                    title: "अल्मारी से चुपचाप शराब की चोरी",
                  },
                  {
                    id: "upHig94fukg",
                    title: "म्यार मतलबकि बात छ तो बता !",
                  },
                  {
                    id: "94pCo2-5GWY",
                    title: "हमारी आदतों से परेशान हैं कई लोग",
                  },
                  {
                    id: "pBCZBEdPJeA",
                    title: "सिर्फ पेट भरने का ही लक्ष्य है क्या ?",
                  },
                  {
                    id: "BSB7zOFWw1g",
                    title: "खुल गई न्याय की काली पट्टी !",
                  },
                  {
                    id: "jo0QGi5cciY",
                    title: "दुसरकि भलि ब्वारि तुमार के काम कि ?",
                  },
                  {
                    id: "tIN5xbRkYgw",
                    title: "नवरात्र और विजयादशमी के बाद दस सवाल ?",
                  },
                  {
                    id: "c5gqh209zNs",
                    title:
                      "अंग्रेजोंकि बंदूक देखि नि डर कुमाऊं केसरी बदरीदत्त पांडे !",
                  },
                  {
                    id: "MXLzW3UC5aU",
                    title: "आशा तृष्णा ना मरी...",
                  },
                  {
                    id: "_dq0yX5KXDw",
                    title: "कबूतरों को दाना चूहों से याराना",
                  },
                  {
                    id: "eO_JyC4RqQg",
                    title: "धनतेरस से भैयादूज तक है दीपावली पर्व...",
                  },
                  {
                    id: "bXOM6Qaaetg",
                    title: "पढ़ी-लेखियां कैं गौं में नि मिल वोट",
                  },
                  {
                    id: "3K20k4IkuqQ",
                    title: "कौन नहीं सीख सकता ?",
                  },
                  {
                    id: "LhyeeT5suo4",
                    title: "प्रदूषण के झोल में पटाखों की पोल !",
                  },
                  {
                    id: "bBdMXmvAdyw",
                    title:
                      "गाइक जवाब गाइ नि हुन, मिठ बलै बेर स्यूं -बाग आपण है जानी।",
                  },
                  {
                    id: "liYxFHN9SsQ",
                    title: "मोबाइल पर हमारा उल जलूल देर तक बतियाना",
                  },
                  {
                    id: "m4x2g6got1k",
                    title: "दीपावली पर्व के पांच त्यौहार...",
                  },
                  {
                    id: "ixVPndsmxSw",
                    title: "जनजागृति का 700वां ऐपिसोड, अब तक की जनजागृति !",
                  },
                  {
                    id: "ZjzTeILbN2Q",
                    title: "प्रोटीन कार्बोहाइड्रेट क्या हैं और कहां मिलेंगे ?",
                  },
                  {
                    id: "-qouQelSFew",
                    title:
                      "प्रदूषण के बीच दीपावली में पार्क व तितलियों का जोड़ा...",
                  },
                  {
                    id: "fyxsbJsW-tM",
                    title: "विटामिन बचाते हैं हमें बीमारी से",
                  },
                  {
                    id: "QOVH30DD2X8",
                    title: "सिनेमा के नायक और खलनायक, कपड़े  या कर्म ?",
                  },
                  {
                    id: "eiTb9Lz_fGY",
                    title: "गांधीज्यू चै रौनी आपणि तस्वीर बै",
                  },
                  {
                    id: "EfkqJp-qg68",
                    title: "हमर संविधान हमर ग्रंथ में के लेखी छ ?",
                  },
                  {
                    id: "1Wvkt9f7Mno",
                    title: "खपति उपटापि फसक्या, बिगाड़ु कुबद्दरि चमक्या !",
                  },
                  {
                    id: "W9vmo7U3D4Y",
                    title: "कैसे सीखते हैं गुटका धूम्रपान ?",
                  },
                  {
                    id: "q6egz-bIqHE",
                    title: "भलाई के बदले में बुराई...चूहे ने ऋषि को सिखाई...",
                  },
                  {
                    id: "p5sk_VU5TtU",
                    title:
                      "प्रथम दिवस की रामलीला !! कोटिला !! द्वाराहाट !! अल्मोड़ा !! उत्तराखण्ड !! नारद मोह !! राम जन्म !!",
                  },
                  {
                    id: "VodeF2UAhY0",
                    title: "अग्निवीर बनण लै आसान काम नि हय।",
                  },
                  {
                    id: "ymvPmA7zQkw",
                    title: "बेबी फ़ूड में चीनी का तड़का !",
                  },
                  {
                    id: "jmdrN7NeNXc",
                    title: "आंख -कान विहीन हेलेन कैलर की समाज को सीख...",
                  },
                  {
                    id: "2MItgaq9D0s",
                    title:
                      "म्यर गौं खग्यारक नौं लै जुड़ी छ स्वतंत्रता आंदोलन में",
                  },
                  {
                    id: "1mX9SzIsM9U",
                    title: "मोटे होने का मतलब बीमारी का अलार्म !",
                  },
                  {
                    id: "JZKN94ed1SE",
                    title: "देवभूमि वीरभूमि राज्य उत्तराखंड",
                  },
                  {
                    id: "cV9QRAdISHg",
                    title: "तेइस बरस में बनि गईं राज्य में मुख्यमंत्री दस",
                  },
                  {
                    id: "ni2XZX5DLZU",
                    title: "उत्तराखंड राज्य अस्थित्व के 24 वर्ष...",
                  },
                  {
                    id: "CbYpcONshHk",
                    title:
                      "25वें राज्य स्थापना दिवस पर हिंदी भवन में संगोष्ठी...",
                  },
                  {
                    id: "wiBhij0kbAU",
                    title: "राज निवास दिल्ली पर अद्भुत सांस्कृतिक संगम...",
                  },
                  {
                    id: "y3ks26iMOyU",
                    title: "खूब कीटनाशक और रसायन खा रहे हैं हम ?",
                  },
                  {
                    id: "hUiGa15d8z4",
                    title: "दिल्ली हाट पीतमपुरा में 25वां उत्तराखंड दिवस...",
                  },
                  {
                    id: "xgb2OOOsqVQ",
                    title: "कसी बितीं 17 दिन सिलक्यारा सुरंग में ?",
                  },
                  {
                    id: "lvlirrKuhi8",
                    title: "सिजेरियन डिलीवरी क्यों ?",
                  },
                  {
                    id: "08IG5UXlQKI",
                    title: "राज निवास दिल्ली पर ऑटिज्म बच्चे की वाद्य कला...",
                  },
                  {
                    id: "J4kgj2KcaHY",
                    title: "मतदान करना हमारा संवैधानिक अधिकार",
                  },
                  {
                    id: "YKmYzSrBAeY",
                    title: "ऑटिज्म व अन्य दिव्यांगता से जूझने वाले...",
                  },
                  {
                    id: "xOoxiIGrDkc",
                    title: "बिना कर्म किए अनोखी चाह ?",
                  },
                  {
                    id: "7wPn6XDyD7E",
                    title: "कुटिल खल कामी कौन ?",
                  },
                  {
                    id: "J6QWhiePXJ4",
                    title: "बाल दिवस पर बच्चे और नेहरू...",
                  },
                  {
                    id: "hrUSMqrs74o",
                    title: "जब गुरुनानक साहब काशी गए !",
                  },
                  {
                    id: "2oBhBK-GLzA",
                    title: "कैसे कर सकते हैं नेत्रदान ?",
                  },
                  {
                    id: "ijWTokBOcf8",
                    title: "पहाड़ै खेति बौलै काव, नि करना तो लै कंकाव।",
                  },
                  {
                    id: "4ILhmWm8XLs",
                    title: "व्हटसैप रंग - बिरंगा देखा !",
                  },
                  {
                    id: "i_qT7Wxd26k",
                    title: "परया सैणि कैं चुड़ पैराय, चुड़चुड़ानै गेइ",
                  },
                  {
                    id: "yHFq7SKCt_w",
                    title: "गुरुनानक साहब की लंगर/भंडारे की मर्यादा...",
                  },
                  {
                    id: "xuKOZSHOfZI",
                    title: "समाज क्यों नहीं बदलता ?",
                  },
                  {
                    id: "1OmGG2H3JsQ",
                    title: "घरक माहौलकि जिम्मेदारी कैकि छ ?",
                  },
                  {
                    id: "VU4lIL0rXGg",
                    title: "आपका हैपीनेस रेट, आपके हाथ में...",
                  },
                  {
                    id: "4RmH4BfMVKU",
                    title: "कैसे बचेगी हमारी धरती ?",
                  },
                  {
                    id: "v7RldpfiDec",
                    title: "बच्च हुणि छ नि बतौ, चुपचाप बच्च पैद करिबेर दिखौ",
                  },
                  {
                    id: "BuMGyaJdu1k",
                    title: "नोटों की माला दूल्हे के लिए जोखिम...",
                  },
                  {
                    id: "dLV5UkH1Kco",
                    title: "हमारे सैनिक और हमारे भगवान",
                  },
                  {
                    id: "kL6JU9MoAuo",
                    title: "बनिठनि बेर जैरै हुड़क्याणि जसि",
                  },
                  {
                    id: "TVa_b7TWZog",
                    title: "सयाणाक चुप रौणल हुंछ महाभारत...",
                  },
                  {
                    id: "1GpH1u1EP8Q",
                    title: "अभिवादन का सर्वोत्तम तरीका",
                  },
                  {
                    id: "OrwRfsVks9k",
                    title: "विश्व रक्तदान दिवस 14 जून क्यों ?",
                  },
                  {
                    id: "kITlC1wNuY0",
                    title: "झूठी  प्रशंसा, ऊंट -गधे का किस्सा...",
                  },
                  {
                    id: "9mi0o7SunFk",
                    title: "पापा को दिए गुल्लक के पचास रुपए...",
                  },
                  {
                    id: "StK_8AajfXI",
                    title: "पार्क में प्रकृति का साक्षात दर्शन...",
                  },
                  {
                    id: "MRMzMTNtd2E",
                    title:
                      "128 वर्षीय योग प्रतिमूर्ति पद्मश्री स्वामी शिवानंद जी ...",
                  },
                  {
                    id: "l6c7b07UFKM",
                    title: "सैणि  नाचणी, मैंस हात जोड़णी...",
                  },
                  {
                    id: "jc99bBX3tgM",
                    title: "संविधान को जानें तो सही...",
                  },
                  {
                    id: "EfkqJp-qg68",
                    title: "हमर संविधान हमर ग्रंथ में के लेखी छ ?",
                  },
                  {
                    id: "f1ZCLknsUlY",
                    title: "' सांची ' बढ़ रही है बुलंदी की ओर...",
                  },
                  {
                    id: "Jtmjhe3VlHs",
                    title: "68 दिनक कोरोना लौकडाउन में कसी ज्यौंन रईं शराबि ?",
                  },
                  {
                    id: "f9RFsWvo0IY",
                    title: "रील का चस्का, मौत को दावत...",
                  },
                  {
                    id: "yjjxpUCft14",
                    title: "फोल्डिंग खालि न्हैति यार !",
                  },
                  {
                    id: "aBR8y6H1-PQ",
                    title: "बहस/वार्ता किस विषय पर हो ?",
                  },
                  {
                    id: "xE5C8HzefLM",
                    title:
                      "PVC.6 कैप्टन गुरबचन सिंह सलारिया.परमवीर चक्र.3/I GR",
                  },
                  {
                    id: "DF9MhnSWwu8",
                    title: "दिखावे के लिए एक दिन का पुण्य ?",
                  },
                  {
                    id: "4dYiJth9pf4",
                    title: "कछुआ - खरगोस व गिलहरी - कौआ",
                  },
                  {
                    id: "ZiUHqSVtgvY",
                    title: "रबर और पेंसिल की हमें सीख...",
                  },
                  {
                    id: "hj7WpLl-0UM",
                    title: "हमारे ज्ञान के मुख्य स्रोत...",
                  },
                  {
                    id: "GsGay6lRH_Q",
                    title: "उत्तरकाशी सिलक्यारा सुरंग ने क्या सिखाया ?",
                  },
                  {
                    id: "UOZzk2Li0ME",
                    title: "घर आयी पौण कैं टोकण कि हिम्मत",
                  },
                  {
                    id: "VQFzeiD59Dc",
                    title: "आई आई टी दिल्ली परिसर की एक झलक...",
                  },
                  {
                    id: "a54lKRF0OmA",
                    title: "अगर ये मशीन बन गई तो ?",
                  },
                  {
                    id: "h6ZIXa27C0c",
                    title: "शराब और पेट के कीड़े...",
                  },
                  {
                    id: "D10ksgr3sMY",
                    title: "जां राम वां अजुध्या !",
                  },
                  {
                    id: "hsHcuTsf4Tg",
                    title: "गुस्सम निकई कड़ू आंखर दिल में लगूनी खार...",
                  },
                  {
                    id: "xtQdc7Fgv2k",
                    title: "चूहे, पार्क, वर्षा, बेसमेंट और हम लोग",
                  },
                  {
                    id: "FAh2y_2D44I",
                    title:
                      "अस्कोट -आराकोट छठी यात्रा 2024 : उत्तराखंड में क्या बदलाव आया ?",
                  },
                  {
                    id: "wSw1Z3tUKg4",
                    title: "प्रदूषण के जिम्मेदार कौन ?",
                  },
                  {
                    id: "0o01X4Kcu8M",
                    title: "भीगा बिल्ला बन, पत्नी पर मत तन !!",
                  },
                  {
                    id: "bBdMXmvAdyw",
                    title:
                      "गाइक जवाब गाइ नि हुन, मिठ बलै बेर स्यूं -बाग आपण है जानी।",
                  },
                  {
                    id: "hcGvJsaZmLw",
                    title: "दिल्ली सरकार की हिंदी अकादमी...",
                  },
                  {
                    id: "F_fI_cZ0BP8",
                    title: "फेसबुकिए दोस्त नहीं थे कृष्ण - सुदामा",
                  },
                  {
                    id: "0sUID3r_07E",
                    title:
                      "हमरि गढ़वालि कुमाउनी जौनसारी अकादमी दिल्ली सरकार...",
                  },
                  {
                    id: "U9JDDVwL4Bs",
                    title: "तिरंगे की शान, बच्चों का स्वतंत्रता दिवस ज्ञान",
                  },
                  {
                    id: "CfdNpo86BdY",
                    title: "ऊंचे सपने संजोकर, कोचिंग लेने आए वे शहर !",
                  },
                  {
                    id: "zsJRZAPBdbg",
                    title: "हमरि ग. कु. जौ. अकादमी दिल्ली सरकार (हिंदी वीडियो)",
                  },
                  {
                    id: "p7MRT0BBZKE",
                    title: "अंधविश्वासी प्रथाओंल फैद कैक हुंछ ?",
                  },
                  {
                    id: "s5XkupIRuYc",
                    title: "वह झटपट शादी को तैयार हो गई !",
                  },
                  {
                    id: "J9diHVCjNdg",
                    title: "हाथों की दस अंगुलियों में बड़ा कौन ?",
                  },
                  {
                    id: "wngVYvsXP9c",
                    title: "कुकुरां है बेडर बानर घरों में घुसैं रईं",
                  },
                  {
                    id: "GG7AkP1G0LQ",
                    title:
                      "ग्रह नक्षत्र भाग्य भगवान, दोषी बतावें मूढ़ अज्ञान !",
                  },
                  {
                    id: "LgOZR_pKz5c",
                    title: "हथेली में चाकू से बनाई भाग्य रेखा...",
                  },
                  {
                    id: "EK24irqaYmo",
                    title: "महाभारत के मुख्य दस किरदार हमें बता गए !",
                  },
                  {
                    id: "SxBdRLbYZII",
                    title: "इग्नौर करण सिखण पड़ल",
                  },
                  {
                    id: "3JSYzyb_0bs",
                    title: "पत्नी से भूल के भी न लड़ें...",
                  },
                  {
                    id: "5KO-CPaDnrQ",
                    title: "बिना सुई लगाए वह नहीं सोया ?",
                  },
                  {
                    id: "MyzAdyiXRIY",
                    title:
                      "मरचूला उत्तराखंड बस दुर्घटना में 36 मौत का जिम्मेदार कौन ?",
                  },
                  {
                    id: "QKLTklv-V0E",
                    title: "गाली देना कुंठित लोगों की आवाज...",
                  },
                  {
                    id: "eJQTkiEqToI",
                    title: "सच और झूठ के बीच का रास्ता",
                  },
                  {
                    id: "IgMnj8N4mIY",
                    title: "हमारी बारह बड़ी समस्याएं...",
                  },
                  {
                    id: "gIZ6DYEZPcU",
                    title: "दिखावकि मुंडन कैक लिजी ?",
                  },
                  {
                    id: "rH6Wr0t17zs",
                    title: "उन्होंने ठुकराया मुख्यमंत्री पद...",
                  },
                  {
                    id: "ytGSOXyqMpY",
                    title: "कोई आत्महत्या क्यों करता है ?",
                  },
                  {
                    id: "KghQIaQlmZc",
                    title: "आलोचना के बीच सराहना",
                  },
                  {
                    id: "zeIIcSyNQus",
                    title: "ओम जय जगदीश हरे, सही तथ्य...",
                  },
                  {
                    id: "wqTI7Nsduxw",
                    title: "फलों से लदे वृक्ष का संदेश...",
                  },
                  {
                    id: "3eHIr0TZy3c",
                    title: "कौछी मौछी बात सुणि बेर वगै रौ उ...",
                  },
                  {
                    id: "3eQDfZnDef8",
                    title: "गलतफहमी के शिकार, पड़ोसी रिश्तेदार",
                  },
                  {
                    id: "Efh74FW0wbQ",
                    title: "ये नियमावली बच्चों को बताओ तो सही !",
                  },
                  {
                    id: "DHEGHM6E-i4",
                    title: "समाज सुधारक रहीम के दिनों का फेर ...",
                  },
                  {
                    id: "MG35SAsmaew",
                    title: "सबके चहेते हैं ये दो कौमेडियन !",
                  },
                  {
                    id: "lThFlN-ZEoc",
                    title: "कुंभ म्यल में के देखौ उनूल ?",
                  },
                  {
                    id: "8Lk1MreWLIM",
                    title: "मनुष्य के लिए मांसाहार या शाकाहार ?",
                  },
                  {
                    id: "G7xmZdCQHhY",
                    title: "बिजली बल्ब समेत 1093 पेटेंट थे उसके नाम !",
                  },
                  {
                    id: "_sBUpY2s4ns",
                    title: "क्या हैं डाक्टर की रंगीन गोलियां ?",
                  },
                  {
                    id: "DF2BYNlm9M0",
                    title: "18 बार जेल गए शास्त्री जी !",
                  },
                  {
                    id: "lHTfMtTFtLE",
                    title: "बेडर चोर उचक्के जेबकतरे...",
                  },
                  {
                    id: "3qeTNyNuYHc",
                    title: "टकि टोड़ि बेर खैगो उ प्यौलपिटारक माल...",
                  },
                  {
                    id: "U2o72-mIWLs",
                    title: "अमर शहीद भगत सिंह और बोघा सफाईवाला",
                  },
                  {
                    id: "rMXjASspOhU",
                    title: "नदियों को माता कह कर गंदा करते हैं लोग...",
                  },
                  {
                    id: "9nnJyKeuMlk",
                    title: "दरवाजे भी बोलते हैं आपके व्यवहार पर ...",
                  },
                  {
                    id: "VgSO62iXaPk",
                    title: "अनेकता में एकता को समझने का तरीका...",
                  },
                  {
                    id: "cfHwtRXw_0A",
                    title: "मर्यादा पुरुषोत्तम राजा रामचंद्र की प्रजा...",
                  },
                  {
                    id: "l1bQZ_00DRM",
                    title: "रिमझिम बरसा मेघ दिल्ली में...",
                  },
                  {
                    id: "BSB7zOFWw1g",
                    title: "खुल गई न्याय की काली पट्टी !",
                  },
                  {
                    id: "PeSRAwRLAuA",
                    title: "मनमोहन की याद, जाने के बाद...",
                  },
                  {
                    id: "YG20DdVIqAo",
                    title: "नित जारी रख अपना संघर्ष...",
                  },
                  {
                    id: "DFKTozDKXa0",
                    title: "चार प्रकार के सुख की कामना...",
                  },
                  {
                    id: "Zdo278a6cQs",
                    title:
                      "अंतरराष्ट्रीय नववर्ष 2024 में विक्रम संवत और शक संवत ?",
                  },
                  {
                    id: "LL3RHe41cOw",
                    title: "खुली आंखों से सपने देखूं...",
                  },
                  {
                    id: "-3J6o_MpDjw",
                    title: "किरमोई तराण लगौ संस्कृति बचौ।",
                  },
                  {
                    id: "q6egz-bIqHE",
                    title: "भलाई के बदले में बुराई...चूहे ने ऋषि को सिखाई...",
                  },
                  {
                    id: "D0rDyv9GapU",
                    title: "खाणी निखाणी बागसर देखियाल...",
                  },
                  {
                    id: "BuMGyaJdu1k",
                    title: "नोटों की माला दूल्हे के लिए जोखिम...",
                  },
                  {
                    id: "VrzfGuBvSUo",
                    title: "पहरे जीने की तमन्ना के ...",
                  },
                  {
                    id: "fE0OuUKC3ZU",
                    title: "अन्यासाक गांठ समाउणकि आदत छ हमरि",
                  },
                  {
                    id: "unPeY7WUPuA",
                    title: "बुलंद इरादे छुओ आकाश...",
                  },
                  {
                    id: "m3pLXphTIRI",
                    title: "आदमी मुसाफिर है, बंजारा है ...",
                  },
                  {
                    id: "h6ZIXa27C0c",
                    title: "शराब और पेट के कीड़े...",
                  },
                  {
                    id: "Wt1Xp-Pllq0",
                    title: "घुघुत खजूर छऊ चिलाड़ दौड़पुरि बेड़ू...",
                  },
                  {
                    id: "KOCWmdFe_4k",
                    title: "प्रयाग में त्रिवेणी संगम दर्शन...",
                  },
                  {
                    id: "J34dX4DO0NM",
                    title: "न सृजन न सवाल, खालि ठन ठन गोपाल",
                  },
                  {
                    id: "KOCWmdFe_4k",
                    title: "प्रयाग में त्रिवेणी संगम दर्शन...",
                  },
                  {
                    id: "c2pp2GkUzMM",
                    title: "यौन शिक्षा बहुत जरूरी...",
                  },
                  {
                    id: "IlfAS6JM3hM",
                    title: "इतनी शक्ति हमें देना",
                  },
                  {
                    id: "TiJf5tl4NNI",
                    title: "मैने क्या लिखा, क्यों लिखा, कितना लिखा ?",
                  },
                  {
                    id: "02Xasq4pHE0",
                    title: "मूर्ति विसर्जन का विकल्प",
                  },
                  {
                    id: "OVLLp-JdTf4",
                    title: "किस बात का गर्व है हमें ?",
                  },
                  {
                    id: "3q9l8JhkBKY",
                    title: "वह आग से खेला",
                  },
                  {
                    id: "Fn5ONiSzuTs",
                    title: "रिश्तेदारों परै हिंछ पार्टी में रौनक",
                  },
                  {
                    id: "7Jvie26AYGk",
                    title: "झिड़क कर नहीं, प्यार से समझेंगे बच्चे...",
                  },
                  {
                    id: "hcGvJsaZmLw",
                    title: "दिल्ली सरकार की हिंदी अकादमी...",
                  },
                  {
                    id: "xKNl6m5X0z0",
                    title: "चाट भले ही तू मुंह उसका",
                  },
                  {
                    id: "tTTZ0tboV_Q",
                    title: "म्यर धूं देखौ वील आंख ताणि बेर...",
                  },
                  {
                    id: "7l0EI2xK62s",
                    title: "उत्तरैणि/मकरैणि, घुघुति त्यारकि एक लोक कांथ",
                  },
                  {
                    id: "rGvaj9KOVe0",
                    title: "28वां उत्तरैणी  कौतिक बुराड़ी दिल्ली -(1)",
                  },
                  {
                    id: "m2MJaNFlYtY",
                    title: "दोस्ती की भोर",
                  },
                  {
                    id: "tHpNfVVNFas",
                    title: "मकर संक्रांति (उत्तरैणि) एक लोकपर्व...",
                  },
                  {
                    id: "QI2IQeaGfoM",
                    title: "स्मृति लहर की पांच महामनीषियां",
                  },
                  {
                    id: "c5gqh209zNs",
                    title:
                      "अंग्रेजोंकि बंदूक देखि नि डर कुमाऊं केसरी बदरीदत्त पांडे !",
                  },
                  {
                    id: "1e4NbQ4XVyo",
                    title: "मेरी यात्रा नागालैंड से गुजरात, अमरनाथ से तमिलनाडु",
                  },
                  {
                    id: "n4_W02EDQBI",
                    title: "उत्तराखंड लोक संस्कृति मंच रोहिणी उत्तरैणी महोत्सव",
                  },
                  {
                    id: "9UjmrtPDZjk",
                    title: "पोखर के मोती हैं कप्तान साब",
                  },
                  {
                    id: "fN2V3qgfhxs",
                    title:
                      "ग. कु.जौ.अकादमी गणतंत्र दिवस राष्ट्रीय कवि सम्मेलन(1. हिंदी)",
                  },
                  {
                    id: "SS9gNo6Cwe8",
                    title: "यथार्थ के आईने में 101 तस्वीर",
                  },
                  {
                    id: "FZwyOqNpEwA",
                    title:
                      "ग.कु.जौ.अकादमी गणतंत्र दिवस राष्ट्रीय कवि सम्मेलन (2. कुमाउनी )",
                  },
                  {
                    id: "XnU58Czh8zM",
                    title:
                      '10 हजार से ज्यादा लोगों की जान बचाने वाले "बजरंगी भाईजान" | AAP KI BAAT | GIRISH PANT | SAMVAAD 365',
                  },
                  {
                    id: "s5uhXtx7TLg",
                    title: "उजाले की ओर, पूजास्थलों में चोर",
                  },
                  {
                    id: "MazL3Sl-Pgo",
                    title: "जिंदगी की जंग में हम ही बन गए हैं धृतराष्ट्र",
                  },
                  {
                    id: "4jJ_Kzsg28Q",
                    title: "रिश्तेदारों के घर कैसे रहें बच्चे ?",
                  },
                  {
                    id: "cAjG5IeEf2Y",
                    title: "सुन लो पर किसी से कहना मत",
                  },
                  {
                    id: "ONUMxXsaKBo",
                    title: "समझ समझ कर समझ को समझो...",
                  },
                  {
                    id: "xxd4Kd2HG7I",
                    title: "परंपरा के नाम पशुबलि मन्नत ? हम भी बदलें।",
                  },
                  {
                    id: "wKtSmhg7MOI",
                    title: "नौ मन तेल के बिना भी राधा नाचेगी...",
                  },
                  {
                    id: "jj7P27sAeZA",
                    title: "हिन्द का सैनिक न्यारा",
                  },
                  {
                    id: "kNR23eHM-aY",
                    title:
                      "पार्क में खेलने आए बच्चों द्वारा गणतंत्र की रिहर्सल...",
                  },
                  {
                    id: "aPQbpMWI3F8",
                    title: "नानतिनाओ रे पिछाड़ि झन रया",
                  },
                  {
                    id: "VLp3c-k4_Rc",
                    title: "26 जनवरी गणतंत्र दिवस गाथा...",
                  },
                  {
                    id: "KJZ9bz8T9As",
                    title: "पार्क के बच्चों का अपना गणतंत्र 2025...",
                  },
                  {
                    id: "b3lB3fm33S8",
                    title: "भ्रष्टाचार का अजगर",
                  },
                  {
                    id: "kfec8-7IcHU",
                    title: "आपण सुन ख्वट, परखणी के दोष ?",
                  },
                  {
                    id: "ruu8gPiAzkE",
                    title:
                      "76वें गणतंत्र दिवस पर गुरुग्राम के बच्चे भी हुए कामयाब...",
                  },
                  {
                    id: "TN4q0FR1nJs",
                    title:
                      "सेक्टर 15 रोहिणी दिल्ली महिला योग साधिकाओं का गणतंत्र समारोह (2)",
                  },
                  {
                    id: "HDtultv5Bv4",
                    title: "बापू जी को क्यों नहीं मिला 'नोबेल पुरस्कार ' ?",
                  },
                  {
                    id: "UrvXCe_LG-w",
                    title: "कै बेर मन हल्क है जां पर कूं कैहूं ?",
                  },
                  {
                    id: "xkdCuWO9_p0",
                    title: "75 वर्षक हमर गणतंत्र...",
                  },
                  {
                    id: "ctHLz842RkY",
                    title: "क्या कहती है रेल?",
                  },
                  {
                    id: "YEdH0iUIq_Y",
                    title:
                      "PVC.1 मेजर सोमनाथ शर्मा.परमवीर चक्र.4 कुमाऊं रेजिमेंट",
                  },
                  {
                    id: "aGL99mJ7vsI",
                    title:
                      "हमारे जमाने की पिकनिक चौबटिया गार्डन रानीखेत में...",
                  },
                  {
                    id: "KqRa_OSS7ag",
                    title: "के छोड़ि गछै निसाणि शेरुवा दुनिय में...",
                  },
                  {
                    id: "QuOKUf2ZHAI",
                    title: "",
                  },
                  {
                    id: "pBCZBEdPJeA",
                    title: "सिर्फ पेट भरने का ही लक्ष्य है क्या ?",
                  },
                  {
                    id: "KOCWmdFe_4k",
                    title: "प्रयाग में त्रिवेणी संगम दर्शन...",
                  },
                  {
                    id: "-yhAo6jYOw0",
                    title: "बापू को गाली देने वालों की चिट्ठी...",
                  },
                  {
                    id: "94pCo2-5GWY",
                    title: "हमारी आदतों से परेशान हैं कई लोग",
                  },
                  {
                    id: "twEsEkZwnt0",
                    title: "' सांचि ' बचुलि, झुटि जनुलि",
                  },
                  {
                    id: "QVMUTZq0Zqs",
                    title: "विटामिन पी बहुत जरूरी है जीने के लिए...",
                  },
                  {
                    id: "fvuW0fxb3cQ",
                    title: "फुरसत के क्षण में सोचो तो सही !",
                  },
                  {
                    id: "v7RldpfiDec",
                    title: "बच्च हुणि छ नि बतौ, चुपचाप बच्च पैद करिबेर दिखौ",
                  },
                  {
                    id: "fyHKpYiqUd8",
                    title: "आज होली का मतलब हो गया है ?",
                  },
                  {
                    id: "1HXzTv7IUWQ",
                    title: "खाणता लाग फंक, ब्वारि पर सासुक हंक ?",
                  },
                  {
                    id: "KIVkTdh_6WU",
                    title: "प्यार का नाम बदनाम ना करो....",
                  },
                  {
                    id: "fgRCwFc7NiY",
                    title: "मातृभाषा दिवस पर हमरि भाषा",
                  },
                  {
                    id: "TrPIXQ1ccxI",
                    title: "सुद्दै नि है रय नना कैं अब्बल बनूण ?",
                  },
                  {
                    id: "4L-0Tq6dc9A",
                    title: "जैसा गुरु वैसा चेला, एक दूजे को गर्त में ठेला...",
                  },
                  {
                    id: "ymvPmA7zQkw",
                    title: "बेबी फ़ूड में चीनी का तड़का !",
                  },
                  {
                    id: "NRCS5SDbKmw",
                    title: "उत्तराखंड युवा मंच महाकौतिक 2025 (1)",
                  },
                  {
                    id: "y3ks26iMOyU",
                    title: "खूब कीटनाशक और रसायन खा रहे हैं हम ?",
                  },
                  {
                    id: "1BJG-BIJ-68",
                    title: "अहा रे ! सबूं हैं हइ मुकस्यार",
                  },
                  {
                    id: "sz6xPAbbbE4",
                    title:
                      "Indian History TRUTH & LIES वामपंथियों का भंडाफोड़ | Ft. Meenakshi Jain|The Raunac Podcast|Rj Raunak",
                  },
                  {
                    id: "GHqInWxGPF4",
                    title: "शिवजी के नाम पर भांग और नशा सेवन ...",
                  },
                  {
                    id: "wFbNuk4-pac",
                    title: "किससे होती हैं प्रतिदिन दो हजार सात सौ मौत ?",
                  },
                  {
                    id: "JgrLh7j1Pe4",
                    title: "महाकौतिक 2025 उत्तराखंड युवा मंच रोहिणी (2)",
                  },
                  {
                    id: "7wPn6XDyD7E",
                    title: "कुटिल खल कामी कौन ?",
                  },
                  {
                    id: "Mlu5bpsYeio",
                    title: "गफलत की नीद में तू अनजान सो रहा है...",
                  },
                  {
                    id: "xuKOZSHOfZI",
                    title: "समाज क्यों नहीं बदलता ?",
                  },
                  {
                    id: "zXr65IFakYE",
                    title: "उ डाड़ लै नि मारैं रैछी",
                  },
                  {
                    id: "mgJ-f1LNiiE",
                    title: "जागर उपन्यास का नाट्य मंचन ...",
                  },
                  {
                    id: "clvRyhF8PBU",
                    title: "आटपाट रिवाज मुसीबत ठाड़ करनी",
                  },
                  {
                    id: "K3_rxW_Jr_8",
                    title: "विष्णु शर्मा का पंचतंत्र और रहीम का शतरंज...",
                  },
                  {
                    id: "1GpH1u1EP8Q",
                    title: "अभिवादन का सर्वोत्तम तरीका",
                  },
                  {
                    id: "Qw4mUGRGWao",
                    title: "नाट्य मंचन जागर उपन्यास भाग - एक,  1/7",
                  },
                  {
                    id: "BakenyX6drc",
                    title:
                      "PVC.20 रा. मैन (सूबेदार मेजर) संजय कुमार परमवीर चक्र.13  जे के राइफल्स",
                  },
                  {
                    id: "he6EyoSO9WA",
                    title: "कपटी मित्र खीरा जैसे",
                  },
                  {
                    id: "eAHU98rphME",
                    title: "हमारी धरोहर, विश्व विरासत",
                  },
                  {
                    id: "3r8VzGLuMyc",
                    title: "मैं तुझे मानता हूं परंतु तेरी नहीं मानता !",
                  },
                  {
                    id: "KbA_4XV0P54",
                    title: "नाट्य मंचन जागर उपन्यास भाग - चार, 4/7",
                  },
                  {
                    id: "2ETzuW10gGw",
                    title: "उपन्यास जागर मंचन भाग - पांच, 5/7",
                  },
                  {
                    id: "HZNO0AVm7Kw",
                    title: "मुझे भी खेला करना पड़ा",
                  },
                  {
                    id: "Rs6hxt74HmM",
                    title: "जागर उपन्यास मंचन भाग - छै, 6/7",
                  },
                  {
                    id: "IGgjGSGcirc",
                    title: "जागर उपन्यास मंचन भाग - सात, 7/7",
                  },
                  {
                    id: "GqkaPxJ-7cw",
                    title: "संजोकर रखी हैं प्यार-सम्मान की निशानियां",
                  },
                  {
                    id: "yv7DbeVfKjo",
                    title:
                      "चीर बंधन कैसे होता है ! कुमाऊनी होली ! ग्राम -गवाड़ !द्वाराहाट ! Kumaoni Holi ! होली का ध्वजारोहण !",
                  },
                  {
                    id: "eD4ZMvEI1JU",
                    title: "दिन में होली, रात दिवाली मनती देखी...",
                  },
                  {
                    id: "5DL97aOqPR4",
                    title:
                      "चीर बंधन एवं रंगभरी एकादशी से रंगभरी होली की शुरुआत",
                  },
                  {
                    id: "OLheHwNlNKc",
                    title: "विनाशकारी हैं मनुष्य के छै दुर्गुण...",
                  },
                  {
                    id: "a54lKRF0OmA",
                    title: "अगर ये मशीन बन गई तो ?",
                  },
                  {
                    id: "Db2djBONkO0",
                    title: "धीरे धीरे होली का रंग चढने लगा है",
                  },
                  {
                    id: "Db2djBONkO0",
                    title: "धीरे धीरे होली का रंग चढने लगा है",
                  },
                  {
                    id: "s7-sUMJS3N0",
                    title: "मनुष्य को कितनी जमीन चाहिए ?",
                  },
                  {
                    id: "xZytyEpy3Co",
                    title:
                      "विमान्डेश्वर राम मंदिर में हमारे गांव गवाड़  कि शानदार होली ,होली के असली रंग सभी गांव वासियों के संग",
                  },
                  {
                    id: "G9Tp6zDn9rs",
                    title:
                      "होली की चतुर्दशी पर शिवालय में होली !! गवाड़ गाँव के होल्यार पहुंचे श्री विभांडेश्वर महादेव मंदिर !!",
                  },
                  {
                    id: "ZuyD-jSejGM",
                    title: "लैरौ होइक रंगिल त्यौहार...",
                  },
                  {
                    id: "i7FIhCxGdxQ",
                    title: "कभैं यां तुश्यार जौ लागूं कभैं तात मु्छ्याव...",
                  },
                  {
                    id: "0DavxMax_tA",
                    title:
                      "2082( सिद्धार्थी) नामक संवत्सर कुछ राशियों के लिए अति शुभ है अवश्य श्रवण करें 🚩pandit hemraj shastri",
                  },
                  {
                    id: "W_FS9bnBzpY",
                    title:
                      "जीता 2024 मेधावी सम्मान, बढ़ाया अपने विद्यालय का मान !",
                  },
                  {
                    id: "uUp-Iw-T2nU",
                    title: "वह बिना पूछे मेरे स्कूटर में बैठ गई",
                  },
                  {
                    id: "9QWTguIG7pM",
                    title: "काफल चैत में पकना शुरू...और बेड़ू ?",
                  },
                  {
                    id: "CfdNpo86BdY",
                    title: "ऊंचे सपने संजोकर, कोचिंग लेने आए वे शहर !",
                  },
                  {
                    id: "2aBMpppgH0Q",
                    title: "क्यों कहा, कब कहा, किसने कहा, किससे कहा ?",
                  },
                  {
                    id: "2C9xlYUgNjs",
                    title: "सब जगह सुलभ चाहता था वो !",
                  },
                  {
                    id: "GG7AkP1G0LQ",
                    title:
                      "ग्रह नक्षत्र भाग्य भगवान, दोषी बतावें मूढ़ अज्ञान !",
                  },
                  {
                    id: "v1rDtWV3ys4",
                    title: "टी बी (क्षय रोग) है बचि सकूं इंसान",
                  },
                  {
                    id: "hK85QntB-ps",
                    title:
                      "उत्तराखंड के धरातल का देव -भूत, एल टी जी नई दिल्ली में...",
                  },
                  {
                    id: "EK24irqaYmo",
                    title: "महाभारत के मुख्य दस किरदार हमें बता गए !",
                  },
                  {
                    id: "b8Ppd-2pXMg",
                    title: "झुटि तारिफ में फुरमिण नि चैन",
                  },
                  {
                    id: "5KO-CPaDnrQ",
                    title: "बिना सुई लगाए वह नहीं सोया ?",
                  },
                  {
                    id: "zkg1cFF1bE4",
                    title: "गणेश जी की आरती के शब्द बदलिए...",
                  },
                  {
                    id: "3hjFV5r_nuw",
                    title: "हमूल सही फैसाल करण चैंछ",
                  },
                  {
                    id: "C3UYaA9OafI",
                    title: "मेरी आत्मकथा के सजग पारखी...",
                  },
                  {
                    id: "06brON9cQ6g",
                    title: "जीवन के पड़ाव का एक खास दिन 28 मार्च",
                  },
                  {
                    id: "f9TsaVKS5AA",
                    title: "पुजपाठ कर्मकांड तय करी टैम पर हुण चैंछ",
                  },
                  {
                    id: "eJQTkiEqToI",
                    title: "सच और झूठ के बीच का रास्ता",
                  },
                  {
                    id: "ytGSOXyqMpY",
                    title: "कोई आत्महत्या क्यों करता है ?",
                  },
                  {
                    id: "fE0OuUKC3ZU",
                    title: "अन्यासाक गांठ समाउणकि आदत छ हमरि",
                  },
                  {
                    id: "1s4oFWilMl0",
                    title: "मोबाइल पर क्या क्या देखा ?",
                  },
                  {
                    id: "IBDebFr0t5s",
                    title:
                      "विकलांगता को जीतने वाले महान वैज्ञानिक स्टीफन हॉकिंग",
                  },
                  {
                    id: "mUuLIi5VK7w",
                    title: "तुम नि डरो रे",
                  },
                  {
                    id: "HSqs0VFci5w",
                    title: "पार्टी में गुलाबजामुन जरूर खाऊंगा...",
                  },
                  {
                    id: "oAJpBuuFzjY",
                    title: "कक्षा 8 परीक्षा में कम अंक किलै ?",
                  },
                  {
                    id: "1NfBblmy0OU",
                    title: "समय का महत्व है फास्टेस्ट फिंगर टैस्ट !",
                  },
                  {
                    id: "yHFq7SKCt_w",
                    title: "गुरुनानक साहब की लंगर/भंडारे की मर्यादा...",
                  },
                  {
                    id: "uiPcPTR6RHA",
                    title: "देखो ओ दीवानो तुम ये काम ना करो...",
                  },
                  {
                    id: "kuC4-LsWLUY",
                    title: "स्वस्थ व्यक्ति किसे माना जाता है ?",
                  },
                  {
                    id: "08IG5UXlQKI",
                    title: "राज निवास दिल्ली पर ऑटिज्म बच्चे की वाद्य कला...",
                  },
                  {
                    id: "SxBdRLbYZII",
                    title: "इग्नौर करण सिखण पड़ल",
                  },
                  {
                    id: "RoypCCadZYM",
                    title: "झूठ बोलने की मजबूरी...",
                  },
                  {
                    id: "hrUSMqrs74o",
                    title: "जब गुरुनानक साहब काशी गए !",
                  },
                  {
                    id: "07r-20XRiJU",
                    title: "उड़नखटोले की रोप टूटते ही 11 लोग हवा में लटक गए...",
                  },
                  {
                    id: "f9RFsWvo0IY",
                    title: "रील का चस्का, मौत को दावत...",
                  },
                  {
                    id: "RtWJsKkldb8",
                    title: "अंग्रेजी बलाण क्वे ठुलि बात नि हइ",
                  },
                  {
                    id: "xJtz2H1JXeM",
                    title: "अपनी मर्जी का विवाह कितना सफल ?",
                  },
                  {
                    id: "aBR8y6H1-PQ",
                    title: "बहस/वार्ता किस विषय पर हो ?",
                  },
                  {
                    id: "aD1igz92CKk",
                    title: "नीट पेपरा लिजी रुपैं कां बै आईं ?",
                  },
                  {
                    id: "ac_YQmPOa4I",
                    title: "बिना बच्चों के पति - पत्नी...",
                  },
                  {
                    id: "eOU8UdG7Xwk",
                    title: "चीलक बच्च मुर्गी चुफुलां दगाड़ ?",
                  },
                  {
                    id: "6D7byKoNr3M",
                    title: "देशाका सिपाइ हमारा जो बौडर  तैनात छीं...",
                  },
                  {
                    id: "h6ZIXa27C0c",
                    title: "शराब और पेट के कीड़े...",
                  },
                  {
                    id: "R4TIssQYgss",
                    title: "ठाड़ि बजार राणिखेत में पाणि बचूणी कमईका",
                  },
                  {
                    id: "6HcsFTfqZv0",
                    title: "आयोजन के चीफ गेस्ट की प्रतीक्षा ...",
                  },
                  {
                    id: "J9diHVCjNdg",
                    title: "हाथों की दस अंगुलियों में बड़ा कौन ?",
                  },
                  {
                    id: "N839FWvo84c",
                    title: "जंक फूड और नमक से परेशान है किडनी...",
                  },
                  {
                    id: "QKLTklv-V0E",
                    title: "गाली देना कुंठित लोगों की आवाज...",
                  },
                  {
                    id: "e2Tf90yHzug",
                    title: "मूर्खों हैं बै उमीद करण ठुलि मूर्खता हइ",
                  },
                  {
                    id: "LgOZR_pKz5c",
                    title: "हथेली में चाकू से बनाई भाग्य रेखा...",
                  },
                  {
                    id: "1VP05evHYl0",
                    title: "कतु शराब पिनी हमार देशाक लोग ?",
                  },
                  {
                    id: "SpzYqY5TbDw",
                    title:
                      "वर्दी का सम्मान,शहीदों का बलिदान और तिरंगे की शान...",
                  },
                  {
                    id: "IgMnj8N4mIY",
                    title: "हमारी बारह बड़ी समस्याएं...",
                  },
                  {
                    id: "M1UvVwbNIws",
                    title: "ननाकि गलत तरफदारी नि करो !",
                  },
                  {
                    id: "rH6Wr0t17zs",
                    title: "उन्होंने ठुकराया मुख्यमंत्री पद...",
                  },
                  {
                    id: "wUlwfKQ1o1I",
                    title: "वजन बढ़िगो, कमर में मोटापा चढ़िगो",
                  },
                  {
                    id: "XwPEl6Ap7v4",
                    title: "आदर्शवाद की पीड़ा तो सहनी पड़ेगी...",
                  },
                  {
                    id: "CpW5r0k5zHs",
                    title: "पार्क में आने वाले बच्चों को सिखाने का प्रयास...",
                  },
                  {
                    id: "DHEGHM6E-i4",
                    title: "समाज सुधारक रहीम के दिनों का फेर ...",
                  },
                  {
                    id: "hIaIUfPf0Oc",
                    title: "बीच कमर में बै भैंसाक द्वि हिस्स करीं उनूल ?",
                  },
                  {
                    id: "9vuGgGK3WyY",
                    title:
                      "कौन हैं ग्लोबल वार्मिंग के जिम्मेदार ? पृथ्वी दिवस का सवाल ?",
                  },
                  {
                    id: "iZ84Y2U0fUQ",
                    title: "संत रविदास को दूसरा कंगन कठौती से मिला...",
                  },
                  {
                    id: "GoSTt55KSe0",
                    title: "घरवाइ दगै भौनिकाक ऐग्रीमेंट",
                  },
                  {
                    id: "CIlMO5taV30",
                    title: "बुड़ल करी मजाक, जजल दी सजा ?",
                  },
                  {
                    id: "Zj1lqcsPWiE",
                    title: "महिलाओं से हंस हंस कर बोलने वाले मीटू ( कुमाउनी)",
                  },
                  {
                    id: "lHTfMtTFtLE",
                    title: "बेडर चोर उचक्के जेबकतरे...",
                  },
                  {
                    id: "FtT7diCBCpc",
                    title: "बेताल पच्चीसी और चुड़ैल...",
                  },
                  {
                    id: "HT_ZrFizJgs",
                    title: "गांधारिल आखां पर पट्टी नि बादण चैंछी !",
                  },
                  {
                    id: "7qvFGelQ9iQ",
                    title: "कुंए की बाल्टी और फल लदी डाल...",
                  },
                  {
                    id: "K5cLFqKqBP0",
                    title: "विघ्नों के बार बार आने पर भी...",
                  },
                  {
                    id: "YG20DdVIqAo",
                    title: "नित जारी रख अपना संघर्ष...",
                  },
                  {
                    id: "EiO1AH2MVc0",
                    title: "कतु रंगिल कुमाऊं, कतु छबिल गढ़वाल ?",
                  },
                  {
                    id: "VDREPNxYZZ4",
                    title:
                      "घुरुवै कै पिसी घुरुवै कै तेल, सबूंकैं  द्वि द्वि घुरुकैं डेढ़...",
                  },
                  {
                    id: "VrzfGuBvSUo",
                    title: "पहरे जीने की तमन्ना के ...",
                  },
                  {
                    id: "DFKTozDKXa0",
                    title: "चार प्रकार के सुख की कामना...",
                  },
                  {
                    id: "tfHqdT5OLuM",
                    title: "अंडा तोड़ने की लड़ाई...",
                  },
                  {
                    id: "7b07EEryK2o",
                    title: "पहली पत्नी गांव में और दूसरी शहर में...",
                  },
                  {
                    id: "OVLLp-JdTf4",
                    title: "किस बात का गर्व है हमें ?",
                  },
                  {
                    id: "3eplvC6pzbw",
                    title: "वीक मरण पर किलै खुशि हईं लोग ?",
                  },
                  {
                    id: "gzN6y_YdyY4",
                    title: "जब बाछि बाग लि गोय तब हु घालण सिख...",
                  },
                  {
                    id: "4jJ_Kzsg28Q",
                    title: "रिश्तेदारों के घर कैसे रहें बच्चे ?",
                  },
                  {
                    id: "7Jvie26AYGk",
                    title: "झिड़क कर नहीं, प्यार से समझेंगे बच्चे...",
                  },
                  {
                    id: "33oPTKIBkgs",
                    title: "अस्पताल के डाक्टर साब और बेचारा रोगी...",
                  },
                  {
                    id: "fPYeizTIKJk",
                    title: "नौर्त, बर्त और लंगण में फरक हुंछ !",
                  },
                  {
                    id: "by-t2KptiY0",
                    title: "नदियों को पूजने का सही अर्थ...",
                  },
                  {
                    id: "jj7P27sAeZA",
                    title: "हिन्द का सैनिक न्यारा",
                  },
                  {
                    id: "IJ4oHUMsOBE",
                    title: "भारतीय सैन्यबल को बहुत बड़ा सैल्यूट...",
                  },
                  {
                    id: "3u-m9KS-KO8",
                    title: "लोकविश्वास, अंधविश्वास और वैज्ञानिक सत्य...",
                  },
                  {
                    id: "jEDJb5Ukvoc",
                    title: "तिरंगे की शान के लिए सेना के फौलादी इरादे...",
                  },
                  {
                    id: "YG20DdVIqAo",
                    title: "नित जारी रख अपना संघर्ष...",
                  },
                  {
                    id: "wngVYvsXP9c",
                    title: "कुकुरां है बेडर बानर घरों में घुसैं रईं",
                  },
                  {
                    id: "eQRla__7n_o",
                    title: "याद होगा तुम्हें 1971 का 14 दिन का युद्ध...",
                  },
                  {
                    id: "k617NmuOO0g",
                    title: "मां के कर्ज से कोई उऋण नहीं हो सकता",
                  },
                  {
                    id: "YC_Tjwy-h3c",
                    title: "इजक कर्ज है क्वे उऋण नि है सकन",
                  },
                  {
                    id: "-yhAo6jYOw0",
                    title: "बापू को गाली देने वालों की चिट्ठी...",
                  },
                  {
                    id: "QA7uu0ay49I",
                    title: "हमारे सैन्य बल ने दिया हुआ टास्क पूरा किया...",
                  },
                  {
                    id: "o9-5PevvunM",
                    title: "बुद्धिवाला ही बलवान है...",
                  },
                  {
                    id: "YiEIaqmrB-o",
                    title: "द्वि अयाणि ब्वारियांकि सयाणि सासु",
                  },
                  {
                    id: "yhHiJjbPwVQ",
                    title: "जब दुश्मण बंदूक छोड़ि बेर भाजौ...",
                  },
                  {
                    id: "LlYk5RhZGIw",
                    title: "वाणी से घाव भी और वाणी से दवा भी...",
                  },
                  {
                    id: "A7PuBE1abjA",
                    title: "क्या आप अपनी पत्नी को समझ पाए ?",
                  },
                  {
                    id: "s7-sUMJS3N0",
                    title: "मनुष्य को कितनी जमीन चाहिए ?",
                  },
                  {
                    id: "8NXFNYli4_o",
                    title:
                      "आशा,अपेक्षा या उम्मीद करना मनुष्य की बहुत बड़ी कमजोरी...",
                  },
                  {
                    id: "sugGN0cV4fk",
                    title: "सच्ची तीर्थ यात्रा क्या है ?  जानिए तो सही...",
                  },
                  {
                    id: "SEfzVZ9FesE",
                    title: "सासु -ब्वारिक झगड़ करूनी पाखंडी बाबा...",
                  },
                  {
                    id: "DngrUaDIzxo",
                    title: "पुलवामा - पहलगाम कांड का मुंहतोड़ जवाब...",
                  },
                  {
                    id: "Hs3yy6dGkR8",
                    title:
                      "बेटियों/बहनों के लिए भिटोइ भेजना रिश्तों को सीचने जैसा है ...",
                  },
                  {
                    id: "TVa_b7TWZog",
                    title: "सयाणाक चुप रौणल हुंछ महाभारत...",
                  },
                  {
                    id: "AE-KKQ3lAWU",
                    title: "पी पी पी पी हैं मूर्ख और गंवार पति...",
                  },
                  {
                    id: "PoH6rCZT7dE",
                    title: "गुसैं, लक्ष्मण छि सुमित्रा नंदन पंत",
                  },
                  {
                    id: "0-sDq8iwgLc",
                    title: "एक बहुचर्चित बेमिसाल बलिदान...",
                  },
                  {
                    id: "VsUXc2LhzTg",
                    title:
                      "पच्चीस साल बाद शुरू हुई रामलीला !! गवाड़ !! द्वाराहाट !! उत्तराखण्ड !! जून में होगी रामलीला !!",
                  },
                  {
                    id: "7PjPk80Urc8",
                    title: "उकसाने भड़काने वाले रिश्तेदार...",
                  },
                  {
                    id: "l6c7b07UFKM",
                    title: "सैणि  नाचणी, मैंस हात जोड़णी...",
                  },
                  {
                    id: "jNOtblyg5OM",
                    title: "इंद्रधनुषी रंग की शरीर में रंगत...",
                  },
                  {
                    id: "pwpbzQ8cAnk",
                    title: "दुर्योधन और युधिष्ठिर की बुद्धि परख...",
                  },
                  {
                    id: "07r-20XRiJU",
                    title: "उड़नखटोले की रोप टूटते ही 11 लोग हवा में लटक गए...",
                  },
                  {
                    id: "i7FIhCxGdxQ",
                    title: "कभैं यां तुश्यार जौ लागूं कभैं तात मु्छ्याव...",
                  },
                  {
                    id: "Y8m8-ex2MXE",
                    title: "चाहते तो सब हैं परन्तु काम कौन करेगा ?",
                  },
                  {
                    id: "xJtz2H1JXeM",
                    title: "अपनी मर्जी का विवाह कितना सफल ?",
                  },
                  {
                    id: "TVmv8wjlLsA",
                    title: "ऑफिस में ब्याव 5 बजी बाद शराब पार्टी...",
                  },
                  {
                    id: "7A-nc71LsT8",
                    title: "ये रात को कहां जाते हैं पूजा करने ...",
                  },
                  {
                    id: "6HcsFTfqZv0",
                    title: "आयोजन के चीफ गेस्ट की प्रतीक्षा ...",
                  },
                  {
                    id: "JRP9_Jw4TRI",
                    title: "बाबा साहेब अम्बेडकर को अध्ययन सहयोग किसने किया ?",
                  },
                  {
                    id: "KUNf770MoEE",
                    title: "भूख नींद खुशी संस्कार,  नहीं मिलते कभी बाजार...",
                  },
                  {
                    id: "3fm8peHAyew",
                    title: "यौवन भरे गुड़हल संग मिर्च और तुलसी की जुगलबंदी...",
                  },
                  {
                    id: "rmu9_58o5PQ",
                    title: "कसाई के कहने से बैल नहीं मरते...",
                  },
                  {
                    id: "SpzYqY5TbDw",
                    title:
                      "वर्दी का सम्मान,शहीदों का बलिदान और तिरंगे की शान...",
                  },
                  {
                    id: "Umqw20-P1jk",
                    title: "झल्लू कुकुर और बानरोंकि याद...",
                  },
                  {
                    id: "Z0zFEzgMx4g",
                    title: "भीम - हनुमान बहस, फिर जीता कौन ?",
                  },
                  {
                    id: "p_CwiIrpwG0",
                    title: "बासी भोजन, कितने घंटे का बासी ?",
                  },
                  {
                    id: "FtT7diCBCpc",
                    title: "बेताल पच्चीसी और चुड़ैल...",
                  },
                  {
                    id: "CQlfYtencno",
                    title: "बैंड पार्टीक ऑडिट",
                  },
                  {
                    id: "62xlV8nPakQ",
                    title: "शारीरिक संबंध, HIV. AIDS. STD.VD और यौन शिक्षा...",
                  },
                  {
                    id: "7qvFGelQ9iQ",
                    title: "कुंए की बाल्टी और फल लदी डाल...",
                  },
                  {
                    id: "mX4acsWnTIg",
                    title: "हिम्मत बटोव में उ खतरनाक मंजर",
                  },
                  {
                    id: "GE61cVgkU_4",
                    title: "बाबा रूपी बहुरूपिए देखे तो होंगे ही...",
                  },
                  {
                    id: "K5cLFqKqBP0",
                    title: "विघ्नों के बार बार आने पर भी...",
                  },
                  {
                    id: "WQAH5Bkt4BE",
                    title: "मिकैं के खबर न्हैती",
                  },
                  {
                    id: "vvUpA_MJBwE",
                    title:
                      "हमार कलाकारों में एक छी लोकगायक/कवि हीरा सिंह राणा...",
                  },
                  {
                    id: "CpW5r0k5zHs",
                    title: "पार्क में आने वाले बच्चों को सिखाने का प्रयास...",
                  },
                  {
                    id: "eeulsZ2NZB4",
                    title: "बड़ा हुआ पेट फैटी लीवर होने की संभावना ?",
                  },
                  {
                    id: "O8_DoV4U2WQ",
                    title: "प्रकृति का नजारा फूल और वृक्ष मचान के संग...",
                  },
                  {
                    id: "9vuGgGK3WyY",
                    title:
                      "कौन हैं ग्लोबल वार्मिंग के जिम्मेदार ? पृथ्वी दिवस का सवाल ?",
                  },
                  {
                    id: "sLMgwL2d4X0",
                    title: "चंबल रीवर फ्रंट कोटा का अद्भुत दृश्य -1",
                  },
                  {
                    id: "tfHqdT5OLuM",
                    title: "अंडा तोड़ने की लड़ाई...",
                  },
                  {
                    id: "3_RsCBd71pg",
                    title: "कोटा राजस्थान चंबल रीवर फ्रंट दृश्य - 2",
                  },
                  {
                    id: "hfPrr_I18E8",
                    title: "राजा बड़ा या विद्वान ?",
                  },
                  {
                    id: "i79s417Z9BY",
                    title: "' उज्याव' में पंच प्रयाग, चार धाम।",
                  },
                  {
                    id: "QvBXvLm595w",
                    title: "स्थानीय आकर्षण और बतखों का अद्भुत अनुशासन...",
                  },
                  {
                    id: "pwpbzQ8cAnk",
                    title: "दुर्योधन और युधिष्ठिर की बुद्धि परख...",
                  },
                  {
                    id: "5bAP4q25ZHk",
                    title: "भाग्याक भरौस पर तमगा नि मिलन...",
                  },
                  {
                    id: "oAgKhOAD-os",
                    title: "कैसे चलेगी गृहस्थी की गाड़ी ?",
                  },
                  {
                    id: "M3VgGbFJv-E",
                    title: "प्यौलपिटार में हमरि भाषाक जेवर",
                  },
                  {
                    id: "exiz2xF_mEY",
                    title: "आखिर ये लोगबाग है कौन ?",
                  },
                  {
                    id: "FMBWcqgQCDo",
                    title: "हिम्मत बटोव, टुटिए झन",
                  },
                  {
                    id: "65-3MPr8Gw8",
                    title: "वो लड़की ठीक थी, ये सही नहीं निकली...",
                  },
                  {
                    id: "Li072WDR-lY",
                    title: "बंदर बगुले बतख मोर, प्रकृति करती आत्मविभोर...",
                  },
                  {
                    id: "ICOt_Qpg4DQ",
                    title: "तमाकु पिहैं भ्यार जौ",
                  },
                  {
                    id: "BgrcOG5M2qU",
                    title: "तब की पिकनिक और अब की पिकनिक...",
                  },
                  {
                    id: "jEDJb5Ukvoc",
                    title: "तिरंगे की शान के लिए सेना के फौलादी इरादे...",
                  },
                  {
                    id: "hI-pSw_PulM",
                    title: "खिमका आपणि ब्योलि हैं नि बलै सक",
                  },
                  {
                    id: "c2l_HRx-o5s",
                    title: "रिमझिम बरसे मेह, सीटी बजाती रेल...",
                  },
                  {
                    id: "6ni7e_ZA5Hs",
                    title: "सबूंक अलग द्याप्त अलग मंदिर",
                  },
                  {
                    id: "uI2fKke8omc",
                    title: "खुदान भी  हो रहा है और कटान भी हो रहा है...",
                  },
                  {
                    id: "QA7uu0ay49I",
                    title: "हमारे सैन्य बल ने दिया हुआ टास्क पूरा किया...",
                  },
                  {
                    id: "27RIVL_5Fwg",
                    title: "बारिश से मौसम बदला, तेज हवा से पेड़ गिरे...",
                  },
                  {
                    id: "AE-KKQ3lAWU",
                    title: "पी पी पी पी हैं मूर्ख और गंवार पति...",
                  },
                  {
                    id: "UPnN62FNbYQ",
                    title: "कोरोनाल सतै गंगा",
                  },
                  {
                    id: "tr3l2mYNX3o",
                    title: "बहस क्यों हो और कितनी देर हो ?",
                  },
                  {
                    id: "MUrfhEI_Gi0",
                    title: "कुछ बनने के लिए छिणी - हथौड़े की चोट...",
                  },
                  {
                    id: "v035RNobjms",
                    title: "झिटघड़ि लै इज बण नि जो।",
                  },
                  {
                    id: "8NqjEtlx1XY",
                    title: "कैंची धाम के ट्रैफिक भंवर में जाम ही जाम...",
                  },
                  {
                    id: "DngrUaDIzxo",
                    title: "पुलवामा - पहलगाम कांड का मुंहतोड़ जवाब...",
                  },
                  {
                    id: "aSJWyTk9k3U",
                    title: "शहीदोंकि माटि छ यां वीरोंकि पलटन",
                  },
                  {
                    id: "AMkp30awKQ0",
                    title: "क्या डाक्टर भगवान का रूप है ?",
                  },
                  {
                    id: "pwpbzQ8cAnk",
                    title: "दुर्योधन और युधिष्ठिर की बुद्धि परख...",
                  },
                  {
                    id: "Ogbdk7tXjgU",
                    title: "नना दगै गणतंत्र तिरंगकि बात",
                  },
                  {
                    id: "Sv6dGL7LB_E",
                    title: "क्या आपको इस बात का पछतावा है ?",
                  },
                  {
                    id: "iayFN0K9O4M",
                    title: "झरने के पानी  ने समझाया सही अर्थ...",
                  },
                  {
                    id: "IkshKj1Pd2o",
                    title: "मासैप चुलफन फैरीं",
                  },
                  {
                    id: "3gjyxFCDDyY",
                    title: "अमरनाथ यात्रा बालटाल से या पहलगाम से...",
                  },
                  {
                    id: "dWuuC4OiDPQ",
                    title: "चाटुकार दरबारियों से राजा कैसे सजग रहे ?",
                  },
                  {
                    id: "HDwIf27MIlA",
                    title: "शर्मा जी की जिद के आगे...",
                  },
                  {
                    id: "JbbZ1q3o20k",
                    title: "वीडियो देखने वाले बच्चे अक्रामक व बेकाबू",
                  },
                  {
                    id: "Umqw20-P1jk",
                    title: "झल्लू कुकुर और बानरोंकि याद...",
                  },
                  {
                    id: "B0GfviyLoGk",
                    title: "भूत भिसूण जसि फोटो, जसि शकल उसि फोटो...",
                  },
                  {
                    id: "-ClA8rd-QoA",
                    title: "कुत्ते के काटने से वह बच गया...",
                  },
                  {
                    id: "Y8m8-ex2MXE",
                    title: "चाहते तो सब हैं परन्तु काम कौन करेगा ?",
                  },
                  {
                    id: "8RouWcJdoLA",
                    title: "इसे इज्जत लुट गई मत कहो...",
                  },
                  {
                    id: "hYMw1LdSgAU",
                    title: "जब उन्होंने मुझे जोर से थप्पड़ मारा...",
                  },
                  {
                    id: "ipaiMrJz7n0",
                    title: "बाहर के लोग छोड़ो, घर के ही करते हैं तमाशा...",
                  },
                  {
                    id: "4L-0Tq6dc9A",
                    title: "जैसा गुरु वैसा चेला, एक दूजे को गर्त में ठेला...",
                  },
                  {
                    id: "59p6eTAbogc",
                    title: "हमारा गुरु कैसा हो ?",
                  },
                  {
                    id: "Z0zFEzgMx4g",
                    title: "भीम - हनुमान बहस, फिर जीता कौन ?",
                  },
                  {
                    id: "QCTwjrm6XFM",
                    title: "पाणि जंगव जमीन कैं माफिया खैगो",
                  },
                  {
                    id: "mIWFMj985xk",
                    title: "केक के ऊपर मोमबत्ती जलाने का रिवाज...",
                  },
                  {
                    id: "vwTmAI89rgk",
                    title: "दुनिया में अतिवृष्टि और बाड़ के जिम्मेदार कौन ?",
                  },
                  {
                    id: "B8JWmApwNmE",
                    title: "क्या बच्चों ने हमारी भाषा सीखी ?",
                  },
                  {
                    id: "GE61cVgkU_4",
                    title: "बाबा रूपी बहुरूपिए देखे तो होंगे ही...",
                  },
                  {
                    id: "8cxPInarLLk",
                    title: "देवि नि खानि तुमार बोकियां कैं",
                  },
                  {
                    id: "Ymas0EHm3us",
                    title: "हमारी ग्राम पंचायत के प्रधान जी...",
                  },
                  {
                    id: "WmxN8ypTycs",
                    title: "लोकपर्व हरेला पौध रोपण उत्सव",
                  },
                  {
                    id: "znmYETqRPMo",
                    title: "हरेले के त्यौहार पर पौध रोपण",
                  },
                  {
                    id: "RDyrLfvW2ZQ",
                    title:
                      "हरयाव (हरेला) जी रया जागि रया, ऋतु मास भेटनै रया...",
                  },
                  {
                    id: "GoSTt55KSe0",
                    title: "घरवाइ दगै भौनिकाक ऐग्रीमेंट",
                  },
                  {
                    id: "61-94WEBLlE",
                    title: "उत्सर्जन बढ़ा, जलवायु चक्र बिगड़ा",
                  },
                  {
                    id: "DHN64zSE98M",
                    title:
                      "ग्रुप कैप्टन शुभांशु शुक्ला की प्रेरक अंतरिक्ष यात्रा...",
                  },
                  {
                    id: "fu6IEfoSFGs",
                    title: "च्यल -चेलिक भेदभाव जरूर मिटल",
                  },
                  {
                    id: "fzsod8q3Q5A",
                    title: "लालच की मृगतृष्णा है लाटरी",
                  },
                  {
                    id: "MMDFhTvsuvo",
                    title: "सभी कांवड़िए उपद्रवी नहीं होते...",
                  },
                  {
                    id: "OYV0SFIafO8",
                    title: "पगड़ीधारी तूफान फौजा सिंह...",
                  },
                  {
                    id: "rt13ZPJ_oAQ",
                    title: "मोबाइल लत ने बना दिया रोबोट",
                  },
                  {
                    id: "Fn5ONiSzuTs",
                    title: "रिश्तेदारों परै हिंछ पार्टी में रौनक",
                  },
                  {
                    id: "myCiabKUXCk",
                    title: "हमारे शरीर का सबसे गंदा अंग...",
                  },
                  {
                    id: "l5X6oaPM8VU",
                    title: "दानपात्र है श्रद्धा सहयोग का पात्र",
                  },
                  {
                    id: "RK8yNA5SrLU",
                    title: "राजघाट में ज्यौंनै छीं गांधी ज्यू",
                  },
                  {
                    id: "5E8hV5zp6RA",
                    title: "कितने बम फोड़े उसने..",
                  },
                  {
                    id: "MEnQ3A6OtI0",
                    title: "अल्मारी से चुपचाप शराब की चोरी",
                  },
                  {
                    id: "qiHyHmrTJGo",
                    title: "घमंड बनै द्यूं शैतान, नम्रता बनै दीं भगवान",
                  },
                  {
                    id: "DqeIqUozzFo",
                    title: "हमें टोकने वाले हमारे अपने...",
                  },
                  {
                    id: "8jNE0W12OvA",
                    title: "कारगिल युद्ध 1999 भी याद होगा तुम्हें...",
                  },
                  {
                    id: "BakenyX6drc",
                    title:
                      "PVC.20 रा. मैन (सूबेदार मेजर) संजय कुमार परमवीर चक्र.13  जे के राइफल्स",
                  },
                  {
                    id: "23DvKFChVzg",
                    title: "जलेबी- समोसा में कितनी चीनी और कितना नमक...",
                  },
                  {
                    id: "PMMXBXg-Ilc",
                    title:
                      "PVC. 21 कैप्टन विक्रम बत्रा परमवीर चक्र . 13 जे के राइफल्स",
                  },
                  {
                    id: "sGP17y3kIio",
                    title: "भोजन में गुणवत्ता या स्वाद...",
                  },
                  {
                    id: "u4Y1aizbCcY",
                    title:
                      "PVC.18 कैप्टन मनोज कुमार पांडे परमवीर चक्र. 1/11 GR",
                  },
                  {
                    id: "qJe7U86HMts",
                    title:
                      "PVC.11 ले., कर्नल ए बी तारापोर परमवीर चक्र. 17 पूने हॉर्स",
                  },
                  {
                    id: "bXOM6Qaaetg",
                    title: "पढ़ी-लेखियां कैं गौं में नि मिल वोट",
                  },
                  {
                    id: "Khmb3kS7wjw",
                    title: "पड़ी रहन दो म्यान...",
                  },
                  {
                    id: "xE5C8HzefLM",
                    title:
                      "PVC.6 कैप्टन गुरबचन सिंह सलारिया.परमवीर चक्र.3/I GR",
                  },
                  {
                    id: "6AZ49zNdSsU",
                    title: "सब कुछ बदलि गो पर... य लै बदलण चैंछ।",
                  },
                  {
                    id: "vcwlP28gaB0",
                    title: "तुलसी के राम रघुबीर...",
                  },
                  {
                    id: "M30wm4KwXdQ",
                    title:
                      "PVC.12 लांस नायक अलबर्ट ऐक्का. परमवीर चक्र.14 गार्ड रेजीमेंट",
                  },
                  {
                    id: "0NZvqXfLYHI",
                    title: "बिसनी देवी किलै गे जेल ?",
                  },
                  {
                    id: "_s9ZTjkSv_k",
                    title: "पढ़ाई का कीड़ा काटे तो सही...",
                  },
                  {
                    id: "esYFRv3QToc",
                    title:
                      "PVC.14 मेजर होशियार सिंह परमवीर चक्र . 3 ग्रेनेडियर रेजीमेंट",
                  },
                  {
                    id: "opIxNtSjwSI",
                    title: "असीमित रक्षाबंधन में किसकी रक्षा ?",
                  },
                  {
                    id: "hYWtd6KtZ98",
                    title: "झाड़फूक का तीर तुक्का...",
                  },
                  {
                    id: "SU2aT8GAbAY",
                    title:
                      "PVC.17 मेजर रामास्वामी परमेश्वरन. परमवीर चक्र .8 महार रेजीमेन्ट",
                  },
                  {
                    id: "VodeF2UAhY0",
                    title: "अग्निवीर बनण लै आसान काम नि हय।",
                  },
                  {
                    id: "-4A0xyb3ONM",
                    title: "धराली उत्तरकाशी खीरगंगा जल प्रलय...",
                  },
                  {
                    id: "_dq0yX5KXDw",
                    title: "कबूतरों को दाना चूहों से याराना",
                  },
                  {
                    id: "YJB9zRFreTo",
                    title: "ट्रक ड्राइवरोंल करी  वीकि मधत",
                  },
                  {
                    id: "U3Ut8IdKQwo",
                    title: "कैसे हुआ अपराध प्रायश्चित...",
                  },
                  {
                    id: "fyxsbJsW-tM",
                    title: "विटामिन बचाते हैं हमें बीमारी से",
                  },
                  {
                    id: "0y8nmtZ3QyM",
                    title: "खोलो इनरि पोलपट्टी नि फलण द्यो भ्रष्टाचार",
                  },
                  {
                    id: "UaKywORV_W4",
                    title: "महाभारत पर एक नजर (1 ) दुष्यंत से पांडु तक...",
                  },
                  {
                    id: "DZRc8cwVV3o",
                    title:
                      "स्वतंत्रता आंदोलन में उत्तराखंड, खुमाड़ सालम बागसर सल्ट।",
                  },
                  {
                    id: "d_RB5aLIizQ",
                    title: "महाभारत पर एक नजर (2) पांडव जन्म से युद्ध तक...",
                  },
                  {
                    id: "w3sK00rcCkY",
                    title: "रहे 15 अगस्त अमर हमारा, कथा नहीं विसरानी ये",
                  },
                  {
                    id: "5L8mxZZu-2A",
                    title: "तुम जरूर मनौ पन्नर अगस्त",
                  },
                  {
                    id: "HT_ZrFizJgs",
                    title: "गांधारिल आखां पर पट्टी नि बादण चैंछी !",
                  },
                  {
                    id: "aFLkVxt1b9U",
                    title: "महाभारत के कृष्ण अर्जुन भीष्म विदुर...",
                  },
                  {
                    id: "Z0zFEzgMx4g",
                    title: "भीम - हनुमान बहस, फिर जीता कौन ?",
                  },
                  {
                    id: "nLWxMgMwym4",
                    title:
                      "स्वतंत्रता दिवस 2025, मेधावी सम्मानित विद्यार्थी ( 1 )..",
                  },
                  {
                    id: "4ILhmWm8XLs",
                    title: "व्हटसैप रंग - बिरंगा देखा !",
                  },
                  {
                    id: "-W2Wr61IXFs",
                    title: "रोज रोज बजार के लिजी जांछा ?",
                  },
                  {
                    id: "AWCsdYlq12g",
                    title: "तिरिया चरित्र...",
                  },
                  {
                    id: "he6EyoSO9WA",
                    title: "कपटी मित्र खीरा जैसे",
                  },
                  {
                    id: "oSPnlFAGIvU",
                    title: "जैल गवै गत, वीकि हइ पट",
                  },
                  {
                    id: "Ab0v8UItYjk",
                    title: "धतूरे से गहने नहीं बनते...",
                  },
                  {
                    id: "3r8VzGLuMyc",
                    title: "मैं तुझे मानता हूं परंतु तेरी नहीं मानता !",
                  },
                  {
                    id: "vxKIPjW93HA",
                    title: "सत्संग भीड़ में जैबेर के ज्ञान मिलौ ?",
                  },
                  {
                    id: "6nu9QcVoPbk",
                    title: "उत्तराखंड का गेठी दिल्ली में...",
                  },
                  {
                    id: "34dmR0-Fo_Q",
                    title: "कामवाली, मनमर्जी का काम, कामवाली रहकर ही खुश ?",
                  },
                  {
                    id: "6z3eBTZOTMw",
                    title: "उत्तराखंड में किसान कसी करो खेति ?",
                  },
                  {
                    id: "TrPIXQ1ccxI",
                    title: "सुद्दै नि है रय नना कैं अब्बल बनूण ?",
                  },
                  {
                    id: "aUrhZA5PCRw",
                    title: "मेधावी स्मृति सम्मान ( 2 ) स्वतंत्रता दिवस 2025...",
                  },
                  {
                    id: "xuSjFD_qMdI",
                    title: "हारे को हरिनाम...",
                  },
                  {
                    id: "Y03-r7f5ee0",
                    title: "द्याप्तांकैं भांग धतुर शराब किलै चढ़ूंछा ...?",
                  },
                  {
                    id: "sG8VgMndASM",
                    title: "बिस्मिल के आशिकों का जमघट...",
                  },
                  {
                    id: "4dYiJth9pf4",
                    title: "कछुआ - खरगोस व गिलहरी - कौआ",
                  },
                  {
                    id: "zXr65IFakYE",
                    title: "उ डाड़ लै नि मारैं रैछी",
                  },
                  {
                    id: "U9JDDVwL4Bs",
                    title: "तिरंगे की शान, बच्चों का स्वतंत्रता दिवस ज्ञान",
                  },
                  {
                    id: "jg4lqPnd0NI",
                    title: "काकोरी कांड के चार फांसी चूमने वाले...",
                  },
                  {
                    id: "HbgIQ7efE7Y",
                    title: "पौण पर मन हुनौ, चुल पर आग हुन",
                  },
                  {
                    id: "2C9xlYUgNjs",
                    title: "सब जगह सुलभ चाहता था वो !",
                  },
                  {
                    id: "OsSaZMqT-dM",
                    title: "जूते - चप्पल का भी है एक सलीका  !",
                  },
                  {
                    id: "SQhYINwh6o4",
                    title: "कभैं झन करिया हल्लाबड़ी !",
                  },
                  {
                    id: "Efh74FW0wbQ",
                    title: "ये नियमावली बच्चों को बताओ तो सही !",
                  },
                  {
                    id: "EZgMt-dZTSA",
                    title: "बंदरों का मानव जीवन में दखल...",
                  },
                  {
                    id: "fE0OuUKC3ZU",
                    title: "अन्यासाक गांठ समाउणकि आदत छ हमरि",
                  },
                  {
                    id: "3ISbUB7j9N8",
                    title: "आंसुओं की जुबान...",
                  },
                  {
                    id: "xUHfIU1zqJ8",
                    title: "कोट पैंट टाइ क्यों फैंकी उस व्यक्ति ने ?",
                  },
                  {
                    id: "Wt1Xp-Pllq0",
                    title: "घुघुत खजूर छऊ चिलाड़ दौड़पुरि बेड़ू...",
                  },
                  {
                    id: "mGzKPPqUS2U",
                    title: "सोने के घड़े का पानी...",
                  },
                  {
                    id: "4Kcn9sOJrak",
                    title: "राम कहानी सुंदरकांड जुबानी...",
                  },
                  {
                    id: "rZvIgq6Ggt8",
                    title: "धात लगै पुछै रौ शिल्पकार...",
                  },
                  {
                    id: "zMqQI9R7VB8",
                    title: "क्या कहती है हर साल रामलीला हमसे ?",
                  },
                  {
                    id: "6Phh9Im-jB8",
                    title: "बच्चियों में हिस्टीरिया...",
                  },
                  {
                    id: "J34dX4DO0NM",
                    title: "न सृजन न सवाल, खालि ठन ठन गोपाल",
                  },
                  {
                    id: "W9Rqm7vYBn0",
                    title: "सेवाभाव के प्रतीक हैं हनुमान...",
                  },
                  {
                    id: "G7xmZdCQHhY",
                    title: "बिजली बल्ब समेत 1093 पेटेंट थे उसके नाम !",
                  },
                  {
                    id: "Ap5wPtkSV_8",
                    title: "कलम-कमेट-पाटी से लेकर आजतक के अनंत शिक्षकों को नमन",
                  },
                  {
                    id: "U2o72-mIWLs",
                    title: "अमर शहीद भगत सिंह और बोघा सफाईवाला",
                  },
                  {
                    id: "iBEESNGhhnM",
                    title:
                      "हात जोड़ै द्याप्तां थान, कां हय मनचित कां हय ध्यान ?",
                  },
                  {
                    id: "U1t2su1Fja8",
                    title: "प्रवचनों का कितना प्रभाव...",
                  },
                  {
                    id: "Pte88aLedEU",
                    title: "तीर - तुक्का, द्विए हात लड्डू !",
                  },
                  {
                    id: "oSvRcUNK5Ko",
                    title: "इंतकाम की भयंकर आग...",
                  },
                  {
                    id: "DsOBXuSZKxI",
                    title: "हल्के किरदार भारी विशेषण...",
                  },
                  {
                    id: "SxBdRLbYZII",
                    title: "इग्नौर करण सिखण पड़ल",
                  },
                  {
                    id: "Keb4ebSydXE",
                    title: "लीक तोड़ने की हिम्मत...",
                  },
                  {
                    id: "jmdrN7NeNXc",
                    title: "आंख -कान विहीन हेलेन कैलर की समाज को सीख...",
                  },
                  {
                    id: "vw_UuZACGVE",
                    title: "' चुड़ैल ' सिर्फ डराने के लिए...",
                  },
                  {
                    id: "VU4lIL0rXGg",
                    title: "आपका हैपीनेस रेट, आपके हाथ में...",
                  },
                  {
                    id: "8_gscNh3MQ0",
                    title: "मैंस पीं रईं देशि शराब !",
                  },
                  {
                    id: "GXtM99P029A",
                    title: "1942 में अल्मोड़ा जनपद की क्रांति...",
                  },
                  {
                    id: "ZGeMS1tfEzg",
                    title: "सोचो भगवान कहां है ?",
                  },
                  {
                    id: "zMqQI9R7VB8",
                    title: "क्या कहती है हर साल रामलीला हमसे ?",
                  },
                  {
                    id: "aTF0FVuqXNQ",
                    title: "मनखियक भाग्य ठुल छ या कर्म ?",
                  },
                  {
                    id: "nFtprBHmY78",
                    title: "कां लै रौली राता...",
                  },
                  {
                    id: "U2o72-mIWLs",
                    title: "अमर शहीद भगत सिंह और बोघा सफाईवाला",
                  },
                  {
                    id: "klA2fUESTls",
                    title: "वसंत की महक में ग्लोबल वार्मिंग की दस्तक...",
                  },
                  {
                    id: "l10YCtKj4Qg",
                    title: "संस्कारों का प्रसार करता आर्यसमाज...",
                  },
                  {
                    id: "yHFq7SKCt_w",
                    title: "गुरुनानक साहब की लंगर/भंडारे की मर्यादा...",
                  },
                  {
                    id: "t84zHsWprFw",
                    title: "उत्तराखंड में स्यैणियांकि व्यथा",
                  },
                  {
                    id: "anhq2rEu0ng",
                    title: "उत्तराखंड में सालम सल्ट खुमाड़ क्रांति...",
                  },
                  {
                    id: "1VP05evHYl0",
                    title: "कतु शराब पिनी हमार देशाक लोग ?",
                  },
                  {
                    id: "Fx0G06LJmN4",
                    title: "आत्महत्या के कारण...",
                  },
                  {
                    id: "kITlC1wNuY0",
                    title: "झूठी  प्रशंसा, ऊंट -गधे का किस्सा...",
                  },
                  {
                    id: "M1UvVwbNIws",
                    title: "ननाकि गलत तरफदारी नि करो !",
                  },
                  {
                    id: "LAZkQo-S4lc",
                    title: "KBC में SDM आयुषी IAS...",
                  },
                  {
                    id: "Q3aqGb9Y6KI",
                    title: "बंदर आए हमने बुलाए...",
                  },
                  {
                    id: "cGILn0P-Glw",
                    title: "कहां किया जाए शवदाह  ?",
                  },
                  {
                    id: "YUX-Go8ZAfo",
                    title:
                      "कर्मकाण्ड, पाखंड और आडंबर का विरोध किया उन्होंने...",
                  },
                  {
                    id: "9mi0o7SunFk",
                    title: "पापा को दिए गुल्लक के पचास रुपए...",
                  },
                  {
                    id: "4tqtO7I9Wgk",
                    title: "प्रण करणकि और प्रणकैं निभूणकि हिम्मत चैंछ !",
                  },
                  {
                    id: "ZiUHqSVtgvY",
                    title: "रबर और पेंसिल की हमें सीख...",
                  },
                  {
                    id: "hIaIUfPf0Oc",
                    title: "बीच कमर में बै भैंसाक द्वि हिस्स करीं उनूल ?",
                  },
                  {
                    id: "1pJg-lKGu70",
                    title: "मानव जीवन में प्लास्टिक का दखल घातक...",
                  },
                  {
                    id: "hj7WpLl-0UM",
                    title: "हमारे ज्ञान के मुख्य स्रोत...",
                  },
                  {
                    id: "GoSTt55KSe0",
                    title: "घरवाइ दगै भौनिकाक ऐग्रीमेंट",
                  },
                  {
                    id: "Kq95RieNvBA",
                    title: "तीर्थयात्रा प्रबंधन में सुधार होना जरूरी...",
                  },
                  {
                    id: "J9diHVCjNdg",
                    title: "हाथों की दस अंगुलियों में बड़ा कौन ?",
                  },
                  {
                    id: "iRiGQP69KlA",
                    title:
                      "अल्जाइमर ने ही बताया अल्जाइमर (भुल्लकड़ी)क्यों होती है...",
                  },
                  {
                    id: "QKLTklv-V0E",
                    title: "गाली देना कुंठित लोगों की आवाज...",
                  },
                  {
                    id: "nQJYZgg-pDo",
                    title: "बात बातों में खालि भड़िकि गोय उ !",
                  },
                  {
                    id: "CJT7-OSxdoE",
                    title: "खौलते पानी में प्रतिबिंब...",
                  },
                  {
                    id: "z96IJOC8RqM",
                    title: "शहीद भगत सिंह की 116 दिन जेल में भूख हड़ताल...",
                  },
                  {
                    id: "NDpRjkopCas",
                    title: "समाज कैं भड़कूणी नेता...",
                  },
                  {
                    id: "Xoz4qq8d1To",
                    title: "लोग कूं रईं काव महैण (काला महीना) लैरौ बल !",
                  },
                  {
                    id: "dydu2mExUAk",
                    title: "विश्व शांति की वास्तविक चाह !",
                  },
                  {
                    id: "LgOZR_pKz5c",
                    title: "हथेली में चाकू से बनाई भाग्य रेखा...",
                  },
                  {
                    id: "u2k5SUfWMY8",
                    title: "बचपन से नजर आती है पर्सनलिटी...",
                  },
                  {
                    id: "IgMnj8N4mIY",
                    title: "हमारी बारह बड़ी समस्याएं...",
                  },
                  {
                    id: "3eplvC6pzbw",
                    title: "वीक मरण पर किलै खुशि हईं लोग ?",
                  },
                  {
                    id: "KaSobYAbRx8",
                    title: "2 अक्टूबर 2 महापुरुष",
                  },
                  {
                    id: "p-uVjuHWK7g",
                    title: "विजयादशमी और दशहरा में अंतर...",
                  },
                  {
                    id: "KqRa_OSS7ag",
                    title: "के छोड़ि गछै निसाणि शेरुवा दुनिय में...",
                  },
                  {
                    id: "LzsL_F5JwZs",
                    title: "क्या उस दिन गणेश जी ने वास्तव में दूध पीया ?",
                  },
                  {
                    id: "BcPvD2ntsnY",
                    title: "एक अंगुली से लड्डू नहीं बनता..",
                  },
                  {
                    id: "8cRCW9lyVB4",
                    title: "हमार नीति नियंताओंल करौ पहाड़ खालि !",
                  },
                  {
                    id: "3EhgcmcBk38",
                    title: "हिल गई अंधविश्वास की चूल...",
                  },
                  {
                    id: "hsHcuTsf4Tg",
                    title: "गुस्सम निकई कड़ू आंखर दिल में लगूनी खार...",
                  },
                  {
                    id: "m3pLXphTIRI",
                    title: "आदमी मुसाफिर है, बंजारा है ...",
                  },
                  {
                    id: "3eHIr0TZy3c",
                    title: "कौछी मौछी बात सुणि बेर वगै रौ उ...",
                  },
                  {
                    id: "KlJifccFjM4",
                    title: "बिजली और पानी का मूल्य...",
                  },
                  {
                    id: "3qeTNyNuYHc",
                    title: "टकि टोड़ि बेर खैगो उ प्यौलपिटारक माल...",
                  },
                  {
                    id: "unPeY7WUPuA",
                    title: "बुलंद इरादे छुओ आकाश...",
                  },
                  {
                    id: "fvoFm3-mRBk",
                    title: "सांचों में बंद गहने",
                  },
                  {
                    id: "9_-SmhaRsZk",
                    title: "कलाम साहब व सैम मानेकशॉ, दोनों को सैल्यूट",
                  },
                  {
                    id: "m4eD0qMgFkw",
                    title: "बड़े अद्भुत, अनोखे और निराले थे कलाम साहब !",
                  },
                  {
                    id: "cIm24jXdf08",
                    title: "स्वास्थ्य के लिए सिर्फ 10 अक्षर...",
                  },
                  {
                    id: "c2pp2GkUzMM",
                    title: "यौन शिक्षा बहुत जरूरी...",
                  },
                  {
                    id: "D0rDyv9GapU",
                    title: "खाणी निखाणी बागसर देखियाल...",
                  },
                  {
                    id: "r5OaICd3wbY",
                    title: "कुमाउनी कुमाउनी हिंदी में किलै ?",
                  },
                  {
                    id: "OVLLp-JdTf4",
                    title: "किस बात का गर्व है हमें ?",
                  },
                  {
                    id: "tTTZ0tboV_Q",
                    title: "म्यर धूं देखौ वील आंख ताणि बेर...",
                  },
                  {
                    id: "WW0JTHUncVk",
                    title: "लाडलों को भी दिखाओ किचन...",
                  },
                  {
                    id: "JRL4L0wCvPs",
                    title: "मिलावट ही मिलावट, दिल में भी मिलावट...",
                  },
                  {
                    id: "TsknncWF3e0",
                    title: "पार्कों में जीवन की संजीवनी...",
                  },
                  {
                    id: "qCvlT6GTWcQ",
                    title: "चनिकाकि घरवाइ बिन पुछिए बतै दीं कतु बात...",
                  },
                  {
                    id: "eO_JyC4RqQg",
                    title: "धनतेरस से भैयादूज तक है दीपावली पर्व...",
                  },
                  {
                    id: "Z2d-jf9JrhI",
                    title: "आतिशबाजी से जो मिलता है...",
                  },
                  {
                    id: "LhyeeT5suo4",
                    title: "प्रदूषण के झोल में पटाखों की पोल !",
                  },
                  {
                    id: "oaYU1EnVpzI",
                    title: "विश्व में कितने हैं भूखे रहने वाले लोग ?",
                  },
                  {
                    id: "4jJ_Kzsg28Q",
                    title: "रिश्तेदारों के घर कैसे रहें बच्चे ?",
                  },
                  {
                    id: "i7FIhCxGdxQ",
                    title: "कभैं यां तुश्यार जौ लागूं कभैं तात मु्छ्याव...",
                  },
                  {
                    id: "wKtSmhg7MOI",
                    title: "नौ मन तेल के बिना भी राधा नाचेगी...",
                  },
                  {
                    id: "7A-nc71LsT8",
                    title: "ये रात को कहां जाते हैं पूजा करने ...",
                  },
                  {
                    id: "ylY1cxIprUo",
                    title: "कामवाली अर्थात् घर के काम में मददगार महिला...",
                  },
                  {
                    id: "Wr-BrrJqNS4",
                    title:
                      "खुशी.नीद. भूख. स्वास्थ्य.  ये बाजार में नहीं मिलते...",
                  },
                  {
                    id: "5bAP4q25ZHk",
                    title: "भाग्याक भरौस पर तमगा नि मिलन...",
                  },
                  {
                    id: "o9-5PevvunM",
                    title: "बुद्धिवाला ही बलवान है...",
                  },
                  {
                    id: "t4cibq7_4Iw",
                    title: "सूर्य उपासना व सामाजिक एकता का पर्व छठ...",
                  },
                  {
                    id: "kd9PUQLBfCU",
                    title: "प्रयाग कुंभ 2025 में आई आई टी बाबा...",
                  },
                  {
                    id: "ZP8Gslw__B4",
                    title: "बेडू पाको सांस्कृतिक नृत्य प्रस्तुति...",
                  },
                  {
                    id: "1BAaDWEVzOY",
                    title: "देशप्रेम के गीत अब कोई सुनाता है नहीं...",
                  },
                  {
                    id: "QI2IQeaGfoM",
                    title: "स्मृति लहर की पांच महामनीषियां",
                  },
                  {
                    id: "VOaLmnwkF1c",
                    title: "नन्हे कलाकार कंकरिया मार के...",
                  },
                  {
                    id: "Umqw20-P1jk",
                    title: "झल्लू कुकुर और बानरोंकि याद...",
                  },
                  {
                    id: "kQTLg6mQ-fY",
                    title: "पधान बनहैं क्वे लै राजि नि हय...",
                  },
                  {
                    id: "c7WjFkL3hbE",
                    title: "गली मुहल्ला सड़क शौचालय, लाल किया तूने नादान...",
                  },
                  {
                    id: "j3xDtpDCM4I",
                    title: "कुमाउनी भाषा सम्मेलन/संगोष्ठी में हिंदी किलै ?",
                  },
                  {
                    id: "8pPJb6BxBiA",
                    title: "आखिर कूपमण्डूक होता क्या है ?",
                  },
                  {
                    id: "Cw0ihs7MOL0",
                    title: "गलत का साथ देने वाला भी गलत...",
                  },
                  {
                    id: "KIVkTdh_6WU",
                    title: "प्यार का नाम बदनाम ना करो....",
                  },
                  {
                    id: "AeqK0mj8gkA",
                    title: "घरवाइक घमोरियल घैल सुरिय कका पास गो...",
                  },
                  {
                    id: "eZX64HZKjCA",
                    title: "असोज दशैं कातिक बग्वाव...",
                  },
                  {
                    id: "rURA9MWqCdQ",
                    title: "मन के जीते जीत...",
                  },
                  {
                    id: "leExFGvHI_8",
                    title: "पंजाब च रैके पंजाबी बोलण दि कोशिश भी किती",
                  },
                  {
                    id: "rZvIgq6Ggt8",
                    title: "धात लगै पुछै रौ शिल्पकार...",
                  },
                  {
                    id: "nFtprBHmY78",
                    title: "कां लै रौली राता...",
                  },
                  {
                    id: "lGnTvI3-OuU",
                    title: "रिश्तों के ताने -बाने में जीवन की बेल...",
                  },
                  {
                    id: "NDpRjkopCas",
                    title: "समाज कैं भड़कूणी नेता...",
                  },
                  {
                    id: "89XONZOfVZw",
                    title: "मासिक पीरियड आना सृष्टि का नियम...",
                  },
                  {
                    id: "OLheHwNlNKc",
                    title: "विनाशकारी हैं मनुष्य के छै दुर्गुण...",
                  },
                  {
                    id: "ni2XZX5DLZU",
                    title: "उत्तराखंड राज्य अस्थित्व के 24 वर्ष...",
                  },
                  {
                    id: "2wEBwE9IRUU",
                    title:
                      "25 वर्ष में उत्तराखंडाक हाल, जनता पुछैंरै सवालै सवाल...",
                  },
                  {
                    id: "ZwahFwd4efU",
                    title: "कालिंदी कुंज दिल्ली की यमुना...",
                  },
                  {
                    id: "mgJ-f1LNiiE",
                    title: "जागर उपन्यास का नाट्य मंचन ...",
                  },
                  {
                    id: "r5OaICd3wbY",
                    title: "कुमाउनी कुमाउनी हिंदी में किलै ?",
                  },
                  {
                    id: "HZlY-ZVWfVI",
                    title:
                      "खुशी आने की उम्मीद होती है परंतु दुख आने का पता नहीं होता...",
                  },
                  {
                    id: "llU0mJXvnSw",
                    title: "प्रसव पीड़िता की जान बचानी है मुझे...",
                  },
                  {
                    id: "sugGN0cV4fk",
                    title: "सच्ची तीर्थ यात्रा क्या है ?  जानिए तो सही...",
                  },
                  {
                    id: "GIVmSEV7S00",
                    title: "मिजाइल मैन कलाम और फील्ड मार्शल मानेकशॉ",
                  },
                  {
                    id: "02Xasq4pHE0",
                    title: "मूर्ति विसर्जन का विकल्प",
                  },
                  {
                    id: "bWuObUmcigw",
                    title: "उसने भारत में पहला कन्या विद्यालय खोला...",
                  },
                  {
                    id: "J6QWhiePXJ4",
                    title: "बाल दिवस पर बच्चे और नेहरू...",
                  },
                  {
                    id: "kpcf-t9WZqU",
                    title: "हमरि भाषा हमरि पछ्याण",
                  },
                  {
                    id: "RWaHhI3Cfek",
                    title: "उत्तराखंड में सैणियांकि व्यथा...",
                  },
                  {
                    id: "0-sDq8iwgLc",
                    title: "एक बहुचर्चित बेमिसाल बलिदान...",
                  },
                  {
                    id: "-3J6o_MpDjw",
                    title: "किरमोई तराण लगौ संस्कृति बचौ।",
                  },
                  {
                    id: "5cNeaqtEnjk",
                    title:
                      "बच्चे पढ़ाने से पहले मां का इंटरव्यू ... मेंहदी रंग लाती है...",
                  },
                  {
                    id: "9QWTguIG7pM",
                    title: "काफल चैत में पकना शुरू...और बेड़ू ?",
                  },
                  {
                    id: "4AUctDokrF0",
                    title: "किरिया करम, जप तप, जोग, संन्यास...",
                  },
                  {
                    id: "jNOtblyg5OM",
                    title: "इंद्रधनुषी रंग की शरीर में रंगत...",
                  },
                  {
                    id: "ORibp2yRd0I",
                    title: "क्यों याद करें नेहरू को ?",
                  },
                  {
                    id: "2aBMpppgH0Q",
                    title: "क्यों कहा, कब कहा, किसने कहा, किससे कहा ?",
                  },
                  {
                    id: "U6xxvkZpoWQ",
                    title: "हमने ही बिगाड़े हैं बच्चे...",
                  },
                  {
                    id: "CFzB4e27Jls",
                    title: "एक टांग कट गई फिर भी ऐवरेस्ट विजय...",
                  },
                  {
                    id: "AI2DULgb1Q0",
                    title: "क्या हम कभी सुधरेंगे ?",
                  },
                  {
                    id: "1s4oFWilMl0",
                    title: "मोबाइल पर क्या क्या देखा ?",
                  },
                  {
                    id: "e8tZhpqsgEc",
                    title: "देशकि बात हो देशकि याद हो",
                  },
                  {
                    id: "nG39YXccjyo",
                    title: "ब्या दिन ब्योलि कैं झेलण पड़ रिवाज...",
                  },
                  {
                    id: "C3UYaA9OafI",
                    title: "मेरी आत्मकथा के सजग पारखी...",
                  },
                  {
                    id: "zeFjVkj7CrI",
                    title: "मसमसै सब रईं जोरैल क्वे के नि कूं रय।",
                  },
                  {
                    id: "4m2-azWenpY",
                    title: "दुर्योधन का साथ देना कर्ण की मजबूरी...",
                  },
                  {
                    id: "DnrtLtUPTrI",
                    title: "अखबारों में देवी -देवताओं के चित्र...",
                  },
                  {
                    id: "eX9Qa4cKjEE",
                    title: "LIMBO | Oasis '25 | Mime Club | BITS Pilani",
                  },
                  {
                    id: "eX9Qa4cKjEE",
                    title: "LIMBO | Oasis '25 | Mime Club | BITS Pilani",
                  },
                  {
                    id: "8GNzNKV25as",
                    title: "क्वे नि समझन विधावकि पीड़ कैं...",
                  },
                  {
                    id: "V8b5Pkh0ToQ",
                    title: "भीष्म. द्रोण. कृपाचार्य और विदुर की चुप्पी...",
                  },
                  {
                    id: "HSqs0VFci5w",
                    title: "पार्टी में गुलाबजामुन जरूर खाऊंगा...",
                  },
                  {
                    id: "ibu-YK7GEMM",
                    title: "हमरि दुदबोलिक पैरोकार मथुरा दत मठपाल",
                  },
                  {
                    id: "egaFUugd_G0",
                    title: "छोलिया नृत्य व देशी बैंड की जुगलबंदी...",
                  },
                  {
                    id: "RoypCCadZYM",
                    title: "झूठ बोलने की मजबूरी...",
                  },
                  {
                    id: "CeJ0eOWUFUs",
                    title: "म्यार आंखरोंकि खरि खरि",
                  },
                  {
                    id: "EfkqJp-qg68",
                    title: "हमर संविधान हमर ग्रंथ में के लेखी छ ?",
                  },
                  {
                    id: "C1utwS3PyV0",
                    title: "नहीं मिला महात्मा गांधी को नोबेल पुरस्कार...",
                  },
                  {
                    id: "J0pa6cZMsBI",
                    title: "जै बोलो बेईमान की, फिकर नहीं अपमान की...",
                  },
                  {
                    id: "7Jvie26AYGk",
                    title: "झिड़क कर नहीं, प्यार से समझेंगे बच्चे...",
                  },
                  {
                    id: "Q5yV2Vfzx-s",
                    title: "अल्मड़क खबरचि कुर्मांचल अखबार",
                  },
                  {
                    id: "sIm6CQYAnIY",
                    title: "संगत का असर तो होगा ही...",
                  },
                  {
                    id: "2xhBLNH3LrA",
                    title: "बच्चों को पाकेट मनी मिले या नहीं ?",
                  },
                  {
                    id: "f9HErUBVsF0",
                    title: "पटवारि. वकील. कछरि. देखि नि डरि सांचि बचुलि...",
                  },
                  {
                    id: "3EhgcmcBk38",
                    title: "हिल गई अंधविश्वास की चूल...",
                  },
                  {
                    id: "6HcsFTfqZv0",
                    title: "आयोजन के चीफ गेस्ट की प्रतीक्षा ...",
                  },
                  {
                    id: "5j8dgtwJ2Xo",
                    title: "हल्दी समारोह में फूलों की मनमोहक सजावट...",
                  },
                  {
                    id: "N839FWvo84c",
                    title: "जंक फूड और नमक से परेशान है किडनी...",
                  },
                  {
                    id: "DKf8KZKjzp0",
                    title: "नारी के बहुरूप न्यारे...",
                  },
                  {
                    id: "KUNf770MoEE",
                    title: "भूख नींद खुशी संस्कार,  नहीं मिलते कभी बाजार...",
                  },
                  {
                    id: "A2tykKuP510",
                    title: "बच्चों को सिखाओ ये पांच गीत...",
                  },
                  {
                    id: "SpzYqY5TbDw",
                    title:
                      "वर्दी का सम्मान,शहीदों का बलिदान और तिरंगे की शान...",
                  },
                  {
                    id: "hJhASEXT2f8",
                    title: "रामायण और महाभारत में अंतर...",
                  },
                  {
                    id: "ge6mnGgERgA",
                    title:
                      "मसाण उद्योग में दास.डंगरी. गणतू. पुछ्यारि रावघोव...",
                  },
                  {
                    id: "uDqD9DojbZ0",
                    title: "डाक्टर कसाई बने भ्रूण हत्या कर रहे",
                  },
                  {
                    id: "kh8DEPvJDco",
                    title: "बच्चों की स्कूल पीटीएम में शिकायत...",
                  },
                  {
                    id: "LJY8MksM1vE",
                    title: "जिंदगी जीने के लिए या काटने के लिए ?",
                  },
                  {
                    id: "geZoMuQ_H_E",
                    title: "बाकर काटो, शिकार खाणक जुगाड़ देव पूजा नाम पर...",
                  },
                  {
                    id: "geZoMuQ_H_E",
                    title: "बाकर काटो, शिकार खाणक जुगाड़ देव पूजा नाम पर...",
                  },
                  {
                    id: "VJSqSgvimYk",
                    title: "गृहणियों का यह कैसा मिशन...",
                  },
                  {
                    id: "jM1yz2I9Gus",
                    title: "किलै हिंछ सड़क दुर्घटना ?",
                  },
                  {
                    id: "j7Eu3tUygjQ",
                    title: "विलाप क्यों करते हो, वापस जाओ...",
                  },
                  {
                    id: "8jNE0W12OvA",
                    title: "कारगिल युद्ध 1999 भी याद होगा तुम्हें...",
                  },
                  {
                    id: "8NXFNYli4_o",
                    title:
                      "आशा,अपेक्षा या उम्मीद करना मनुष्य की बहुत बड़ी कमजोरी...",
                  },
                  {
                    id: "YY25LG8oOO0",
                    title: "देखा जो सपना वह साकार हुआ...",
                  },
                  {
                    id: "sG8VgMndASM",
                    title: "बिस्मिल के आशिकों का जमघट...",
                  },
                  {
                    id: "2MItgaq9D0s",
                    title:
                      "म्यर गौं खग्यारक नौं लै जुड़ी छ स्वतंत्रता आंदोलन में",
                  },
                  {
                    id: "fDsuJ2sZYXE",
                    title: "मांसाहार के समर्थक बनाम शाकाहारी...",
                  },
                  {
                    id: "YJB9zRFreTo",
                    title: "ट्रक ड्राइवरोंल करी  वीकि मधत",
                  },
                  {
                    id: "AE-KKQ3lAWU",
                    title: "पी पी पी पी हैं मूर्ख और गंवार पति...",
                  },
                  {
                    id: "QA7uu0ay49I",
                    title: "हमारे सैन्य बल ने दिया हुआ टास्क पूरा किया...",
                  },
                  {
                    id: "8exImmBgP4s",
                    title: "कौन सिखाएगा हमें सिविक सैंस...",
                  },
                  {
                    id: "MUrfhEI_Gi0",
                    title: "कुछ बनने के लिए छिणी - हथौड़े की चोट...",
                  },
                  {
                    id: "UL979ZbfbQw",
                    title: "सिक्ख संगत की सीख...",
                  },
                  {
                    id: "iayFN0K9O4M",
                    title: "झरने के पानी  ने समझाया सही अर्थ...",
                  },
                  {
                    id: "83Jbgy0lV1c",
                    title:
                      "जो न्हैगो वीकि याद में के भल काम करो, सूतक- क्वड़ कम करो",
                  },
                  {
                    id: "4qjz6tnPCMk",
                    title: "एक पव्वा रोज, छत्तीस हजार की डोज...",
                  },
                  {
                    id: "jC-tdVsb-Hs",
                    title: "अकड़ने वाला धड़ाम से गिरेगा ही...",
                  },
                  {
                    id: "QNWAnbxU0Yw",
                    title: "शादी में मंत्र का मखौल, कैमरा वीडियो की चौल...",
                  },
                  {
                    id: "dWuuC4OiDPQ",
                    title: "चाटुकार दरबारियों से राजा कैसे सजग रहे ?",
                  },
                  {
                    id: "VRyTtgzS-10",
                    title: "इंडिया गेट दिल्ली में देखौ भेल...",
                  },
                  {
                    id: "HDwIf27MIlA",
                    title: "शर्मा जी की जिद के आगे...",
                  },
                  {
                    id: "-ClA8rd-QoA",
                    title: "कुत्ते के काटने से वह बच गया...",
                  },
                  {
                    id: "zhoiOqrMoyU",
                    title: "मौन रहना मतलब डरपोक नहीं...",
                  },
                  {
                    id: "Y8m8-ex2MXE",
                    title: "चाहते तो सब हैं परन्तु काम कौन करेगा ?",
                  },
                  {
                    id: "6z3eBTZOTMw",
                    title: "उत्तराखंड में किसान कसी करो खेति ?",
                  },
                  {
                    id: "Y03-r7f5ee0",
                    title: "द्याप्तांकैं भांग धतुर शराब किलै चढ़ूंछा ...?",
                  },
                  {
                    id: "e5sYOFgJk58",
                    title:
                      "Bala Goriya | गोल्ज्यू देवता | Official Kumaoni Movie Teaser 🔔 | Out Now ⚡",
                  },
                  {
                    id: "iobK8wzQCcI",
                    title: "हमारे इर्द -गिर्द गूंजते प्रश्न...",
                  },
                  {
                    id: "DFKTozDKXa0",
                    title: "चार प्रकार के सुख की कामना...",
                  },
                  {
                    id: "Jtmjhe3VlHs",
                    title: "68 दिनक कोरोना लौकडाउन में कसी ज्यौंन रईं शराबि ?",
                  },
                  {
                    id: "aCYwpiNlHP8",
                    title: "साल 2025 को कैसे याद किया जाएगा ?",
                  },
                  {
                    id: "Z0zFEzgMx4g",
                    title: "भीम - हनुमान बहस, फिर जीता कौन ?",
                  },
                  {
                    id: "p7MRT0BBZKE",
                    title: "अंधविश्वासी प्रथाओंल फैद कैक हुंछ ?",
                  },
                  {
                    id: "UxtukbSiaZY",
                    title: "नववर्ष का स्वर्णिम सपना...",
                  },
                  {
                    id: "AeqK0mj8gkA",
                    title: "घरवाइक घमोरियल घैल सुरिय कका पास गो...",
                  },
                  {
                    id: "6kRNkO3lFxA",
                    title: "गांधी ज्यूक बार मेें कएक बात नि जाणन हाम...",
                  },
                  {
                    id: "IkG8efmjogQ",
                    title: "बस आइबै ज्यूजा पैलाग, ढोकोइ भिटोइ",
                  },
                  {
                    id: "8ttZgLImgJ4",
                    title: "अंधभक्ति, अंधश्रद्धा और अंधानुकरण...",
                  },
                  {
                    id: "bWuObUmcigw",
                    title: "उसने भारत में पहला कन्या विद्यालय खोला...",
                  },
                  {
                    id: "7i0S4Blxwlo",
                    title: "रात कै टिटियां (टिटिहरी) खुट अगासकि तरफ ?",
                  },
                  {
                    id: "o-LhDGxVyoc",
                    title: "निगमबोध घाट दिल्ली की परंपरा...",
                  },
                  {
                    id: "GE61cVgkU_4",
                    title: "बाबा रूपी बहुरूपिए देखे तो होंगे ही...",
                  },
                  {
                    id: "HLmo3F7nQw4",
                    title: "दुर्योधन कैं कुसंटी दिणी एक उपटापि छी शकुनि",
                  },
                  {
                    id: "c3knBrlbuPA",
                    title: "कहां है प्रयाग कुंभ का आई आई टी बाबा...",
                  },
                  {
                    id: "1I8wDUw4iZc",
                    title: "भिक्षा मांगना अपराध है या नहीं ?",
                  },
                  {
                    id: "tr3l2mYNX3o",
                    title: "बहस क्यों हो और कितनी देर हो ?",
                  },
                  {
                    id: "KZGTfQNHdQc",
                    title: "बौज्यू (पिता जी) मिकैं बामण बनूण चांछी !",
                  },
                  {
                    id: "Sv6dGL7LB_E",
                    title: "क्या आपको इस बात का पछतावा है ?",
                  },
                  {
                    id: "e5sYOFgJk58",
                    title:
                      "Bala Goriya | गोल्ज्यू देवता | Official Kumaoni Movie Teaser 🔔 | Out Now ⚡",
                  },
                  {
                    id: "rZSl8oe6KAc",
                    title: "पैस सब कुछ नहैंति...",
                  },
                  {
                    id: "6obqw6j5-Sc",
                    title: "शुरुआत में हर काम कठिन...",
                  },
                  {
                    id: "RtWJsKkldb8",
                    title: "अंग्रेजी बलाण क्वे ठुलि बात नि हइ",
                  },
                  {
                    id: "_1PLre7Nby8",
                    title: "गोरख, कबीर और नानक...",
                  },
                  {
                    id: "AMkp30awKQ0",
                    title: "क्या डाक्टर भगवान का रूप है ?",
                  },
                  {
                    id: "JW09S-BDedY",
                    title: "उत्तरैणी कौतिक 2026 संत नगर बुराड़ी भाग -1",
                  },
                  {
                    id: "TtOWkH0jQs0",
                    title: "यात्रा में सुन - चांदिक जेवर और झपटमार",
                  },
                  {
                    id: "nk_RJTvag3c",
                    title:
                      "उत्तरैणी कौतिक 2026 कुमाऊं सा.कला मंच बुराड़ी भाग - 2",
                  },
                  {
                    id: "8_gscNh3MQ0",
                    title: "मैंस पीं रईं देशि शराब !",
                  },
                  {
                    id: "UvWfAjqryMk",
                    title: "काले कौआ ऐजा, घुघुति माव ख़ैजा",
                  },
                  {
                    id: "59p6eTAbogc",
                    title: "हमारा गुरु कैसा हो ?",
                  },
                  {
                    id: "eOU8UdG7Xwk",
                    title: "चीलक बच्च मुर्गी चुफुलां दगाड़ ?",
                  },
                  {
                    id: "VNLJ668H6ww",
                    title:
                      "बुराड़ी दिल्ली उत्तरैणी कौतिक में गर्जिया महिला कीर्तन मंडली दिल्ली दगाड़ बातचीत।",
                  },
                  {
                    id: "5m9dltIj6dA",
                    title:
                      "देवभूमि उत्तराखण्ड धार्मिक सामाजिक संगठन दिल्ली उत्तरैणी 2026",
                  },
                  {
                    id: "mIWFMj985xk",
                    title: "केक के ऊपर मोमबत्ती जलाने का रिवाज...",
                  },
                  {
                    id: "khqA0cDlX-M",
                    title: "मेरी आत्मकथा का अंतिम पन्ना...",
                  },
                  {
                    id: "_Hkoqs72yEA",
                    title:
                      "उत्तरैणी कौतिक 2026 कुमाऊं सा. कला मंच संतनगर बुराड़ी.भाग -3",
                  },
                  {
                    id: "Ymas0EHm3us",
                    title: "हमारी ग्राम पंचायत के प्रधान जी...",
                  },
                  {
                    id: "e2Tf90yHzug",
                    title: "मूर्खों हैं बै उमीद करण ठुलि मूर्खता हइ",
                  },
                  {
                    id: "9Alw4w3rT0s",
                    title: "कलश कलाश्री ने बुलाए LGT में कौवे - 1",
                  },
                  {
                    id: "myCiabKUXCk",
                    title: "हमारे शरीर का सबसे गंदा अंग...",
                  },
                  {
                    id: "BpmgW1vq6jU",
                    title: "गणतंत्र दिवस परेड विजय चौक से लालकिला...",
                  },
                  {
                    id: "5E8hV5zp6RA",
                    title: "कितने बम फोड़े उसने..",
                  },
                  {
                    id: "OWPgmnGDY-U",
                    title: "यादास्त कम या भुल्लकड़ी होने पर ...",
                  },
                  {
                    id: "KqRa_OSS7ag",
                    title: "के छोड़ि गछै निसाणि शेरुवा दुनिय में...",
                  },
                  {
                    id: "g7QdyR7m_-Q",
                    title: "संताप हरण स्तुति, आर्य समाज भाग - 1",
                  },
                  {
                    id: "23DvKFChVzg",
                    title: "जलेबी- समोसा में कितनी चीनी और कितना नमक...",
                  },
                  {
                    id: "EiO1AH2MVc0",
                    title: "कतु रंगिल कुमाऊं, कतु छबिल गढ़वाल ?",
                  },
                  {
                    id: "f15Oyj0B2zs",
                    title: "आर्य धर्म, चार वेदों के संदर्भ, भाग - 2",
                  },
                  {
                    id: "NVGmyc4Nd1g",
                    title: "सुबह अगरबत्ती जली, शाम को नलकी तली...",
                  },
                  {
                    id: "Xoz4qq8d1To",
                    title: "लोग कूं रईं काव महैण (काला महीना) लैरौ बल !",
                  },
                  {
                    id: "LfZLssqH2PM",
                    title: "सिर्फ वेद ही सत्य, सत्य धर्म भाग - 3",
                  },
                  {
                    id: "-yhAo6jYOw0",
                    title: "बापू को गाली देने वालों की चिट्ठी...",
                  },
                  {
                    id: "6kRNkO3lFxA",
                    title: "गांधी ज्यूक बार मेें कएक बात नि जाणन हाम...",
                  },
                  {
                    id: "WvjcWqa--y0",
                    title: "परोपकार है मुक्ति साधन, आर्य समाज भाग - 4",
                  },
                  {
                    id: "aFLkVxt1b9U",
                    title: "महाभारत के कृष्ण अर्जुन भीष्म विदुर...",
                  },
                  {
                    id: "Koi-b7N8gsw",
                    title: "कवि सम्मेलन में स्वागत -सम्मान और पुरस्कार - 5",
                  },
                  {
                    id: "UVPTmFkeVik",
                    title: "क्विज प्रतियोगिता नियम और नैवेद्य",
                  },
                  {
                    id: "cpOnbi5xxNU",
                    title: "रिश्तेदार हरैगीं",
                  },
                  {
                    id: "3XqBxli_FXM",
                    title: "कौन हैं ये भारतीय सेना के परमवीर...",
                  },
                  {
                    id: "-4A0xyb3ONM",
                    title: "धराली उत्तरकाशी खीरगंगा जल प्रलय...",
                  },
                  {
                    id: "tTTZ0tboV_Q",
                    title: "म्यर धूं देखौ वील आंख ताणि बेर...",
                  },
                  {
                    id: "2QIGd_FStqg",
                    title:
                      "Episode 3: Bajrangi Bhaijaan for Indians staying Abroad | Wisdom Talk",
                  },
                  {
                    id: "Ab0v8UItYjk",
                    title: "धतूरे से गहने नहीं बनते...",
                  },
                  {
                    id: "qCvlT6GTWcQ",
                    title: "चनिकाकि घरवाइ बिन पुछिए बतै दीं कतु बात...",
                  },
                  {
                    id: "Y03-r7f5ee0",
                    title: "द्याप्तांकैं भांग धतुर शराब किलै चढ़ूंछा ...?",
                  },
                  {
                    id: "EZgMt-dZTSA",
                    title: "बंदरों का मानव जीवन में दखल...",
                  },
                  {
                    id: "7FrGoWwVdJM",
                    title: "ये हमेशा चर्चित रहे और रहेंगे...",
                  },
                  {
                    id: "3ISbUB7j9N8",
                    title: "आंसुओं की जुबान...",
                  },
                  {
                    id: "OaPDV1aTEKE",
                    title: "मांघ फागुण राग बसंत, ऋतु चैत बैसाग बसंत...",
                  },
                  {
                    id: "oSvRcUNK5Ko",
                    title: "इंतकाम की भयंकर आग...",
                  },
                  {
                    id: "FqgY7djAy_o",
                    title: "कर्मकाण्ड और मूर्ति पूजा पर क्या कहा उन्होंने...",
                  },
                  {
                    id: "qFrZFlY-oMY",
                    title: "भौतै भल ब्यौल हय म्यर ...",
                  },
                  {
                    id: "TOKdpzB3t_8",
                    title: "कुत्ते ही कुत्ते, यत्र तत्र सर्वत्र कुत्ते...",
                  },
                  {
                    id: "i7FIhCxGdxQ",
                    title: "कभैं यां तुश्यार जौ लागूं कभैं तात मु्छ्याव...",
                  },
                  {
                    id: "0n_yC6-n_1A",
                    title: "सबसे बड़ा चमत्कार है ये ...",
                  },
                  {
                    id: "5bAP4q25ZHk",
                    title: "भाग्याक भरौस पर तमगा नि मिलन...",
                  },
                  {
                    id: "U1t2su1Fja8",
                    title: "प्रवचनों का कितना प्रभाव...",
                  },
                  {
                    id: "6D7byKoNr3M",
                    title: "देशाका सिपाइ हमारा जो बौडर  तैनात छीं...",
                  },
                  {
                    id: "oi58uhIfACE",
                    title: "बेवजह का पति -पत्नी द्रुत संग्राम...",
                  },
                  {
                    id: "Keb4ebSydXE",
                    title: "लीक तोड़ने की हिम्मत...",
                  },
                  {
                    id: "yhHiJjbPwVQ",
                    title: "जब दुश्मण बंदूक छोड़ि बेर भाजौ...",
                  },
                  {
                    id: "vw_UuZACGVE",
                    title: "' चुड़ैल ' सिर्फ डराने के लिए...",
                  },
                  {
                    id: "txsUoLGwpFE",
                    title: "कैले बांधी चीर रघुनंदन होली - 1/3",
                  },
                  {
                    id: "Umqw20-P1jk",
                    title: "झल्लू कुकुर और बानरोंकि याद...",
                  },
                  {
                    id: "ofL-x3GOamQ",
                    title: "वील मेरि जेब टटोई और सौ रुपैं झटकि लेईं ...",
                  },
                  {
                    id: "MiYZI82Oycg",
                    title: "होली खेलें गिरजापति नन्दन होली - 2/3",
                  },
                  {
                    id: "jodSBNTbjQ0",
                    title: "होली ऐगे उत्तराखंड सदन होली - 3/3",
                  },
                  {
                    id: "B0GfviyLoGk",
                    title: "भूत भिसूण जसि फोटो, जसि शकल उसि फोटो...",
                  },
                  {
                    id: "6xDMhpdEQKw",
                    title: "मोबाइल से कई इस तरह हुए बरबाद...",
                  },
                  {
                    id: "anhq2rEu0ng",
                    title: "उत्तराखंड में सालम सल्ट खुमाड़ क्रांति...",
                  },
                  {
                    id: "Ocqa5zpzRu0",
                    title: "शब्द के फूल और शब्द के शूल...",
                  },
                  {
                    id: "ZGeMS1tfEzg",
                    title: "सोचो भगवान कहां है ?",
                  },
                  {
                    id: "Cwi2KNmsCiA",
                    title: "गाजर के हलुवे में मीठा जहर...",
                  },
                  {
                    id: "QqdmXvJ6Q88",
                    title: "न्याय प्रणाली के 2 अनसुलझे रहस्यमय केस...",
                  },
                  {
                    id: "LAxwUjfqOL8",
                    title: "छलड़ि दिन मस्कूनी अबीर गुलाल...",
                  },
                  {
                    id: "AmteGZve2II",
                    title: "सब नाचैं रईं हुड़दंगी चाल, होइक मचि रौ धमाल...",
                  },
                  {
                    id: "ZPjvb6tFdBw",
                    title: "होली त्यौहार पर कुछ दारूबाजों के दर्शन...",
                  },
                  {
                    id: "LAxwUjfqOL8",
                    title: "छलड़ि दिन मस्कूनी अबीर गुलाल...",
                  },
                  {
                    id: "r5OaICd3wbY",
                    title: "कुमाउनी कुमाउनी हिंदी में किलै ?",
                  },
                  {
                    id: "PAAdvhmjXgw",
                    title: "तेरी ताक में भूखे नरपिशाच, बचे आबरू आए न आंच...",
                  },
                  {
                    id: "jF21Gw-TOEY",
                    title: "रोना नहीं, रह नहीं गए आंसू पोछने वाले...",
                  },
                  {
                    id: "P5I5H58xBb8",
                    title: "पेइंग गेस्ट की मजबूरी, पेमेंट पूरी की पूरी...",
                  },
                  {
                    id: "iRiGQP69KlA",
                    title:
                      "अल्जाइमर ने ही बताया अल्जाइमर (भुल्लकड़ी)क्यों होती है...",
                  },
                  {
                    id: "j3xDtpDCM4I",
                    title: "कुमाउनी भाषा सम्मेलन/संगोष्ठी में हिंदी किलै ?",
                  },
                  {
                    id: "bWuObUmcigw",
                    title: "उसने भारत में पहला कन्या विद्यालय खोला...",
                  },
                  {
                    id: "-VkLLKX4yL4",
                    title: "मध्यपूर्व युद्ध से महाविनाश ! जिम्मेदार कौन ?",
                  },
                  {
                    id: "5cNeaqtEnjk",
                    title:
                      "बच्चे पढ़ाने से पहले मां का इंटरव्यू ... मेंहदी रंग लाती है...",
                  },
                  {
                    id: "4AUctDokrF0",
                    title: "किरिया करम, जप तप, जोग, संन्यास...",
                  },
                  {
                    id: "ge6mnGgERgA",
                    title:
                      "मसाण उद्योग में दास.डंगरी. गणतू. पुछ्यारि रावघोव...",
                  },
                  {
                    id: "cf1Am7bUZKc",
                    title: "कौन है ये फैजल खान...जो KBC में पहुंच गया...",
                  },
                  {
                    id: "cf1Am7bUZKc",
                    title: "कौन है ये फैजल खान...जो KBC में पहुंच गया...",
                  },
                  {
                    id: "UgaXvlhHzBg",
                    title: "आजादिकि लड़ैक 32 उत्तराखंडी सेनानी...",
                  },
                  {
                    id: "7a2XFCl4ccw",
                    title: "फूल धेई, छम्मा धेई, तेरी धेई नमस्कार..",
                  },
                  {
                    id: "ORibp2yRd0I",
                    title: "क्यों याद करें नेहरू को ?",
                  },
                  {
                    id: "8bk8nqx4_Jg",
                    title: "बसंत में कुदरत के इंद्रधनुषी रंग...",
                  },
                  {
                    id: "CFzB4e27Jls",
                    title: "एक टांग कट गई फिर भी ऐवरेस्ट विजय...",
                  },
                  {
                    id: "Hs3yy6dGkR8",
                    title:
                      "बेटियों/बहनों के लिए भिटोइ भेजना रिश्तों को सीचने जैसा है ...",
                  },
                  {
                    id: "59-1FtdwZ9s",
                    title: "गु -मूत और गाइ -ढाइ लै छ भाषा में...",
                  },
                  {
                    id: "e5sYOFgJk58",
                    title:
                      "Bala Goriya | गोल्ज्यू देवता | Official Kumaoni Movie Teaser 🔔 | Out Now ⚡",
                  },
                  {
                    id: "-rfDelo2_Jc",
                    title: "इस व्यक्ति का चित्र अलग और चरित्र अलग...",
                  },
                  {
                    id: "QxZiSKLWO_8",
                    title: "वेशधारी पाखंडियों की बुरी नजर...",
                  },
                  {
                    id: "6kRNkO3lFxA",
                    title: "गांधी ज्यूक बार मेें कएक बात नि जाणन हाम...",
                  },
                  {
                    id: "-xIaBe5Powo",
                    title: "नवरात्र में हम मां दुर्गा से क्या मांगें ?",
                  },
                  {
                    id: "Wr-BrrJqNS4",
                    title:
                      "खुशी.नीद. भूख. स्वास्थ्य.  ये बाजार में नहीं मिलते...",
                  },
                  {
                    id: "ofL-x3GOamQ",
                    title: "वील मेरि जेब टटोई और सौ रुपैं झटकि लेईं ...",
                  },
                  {
                    id: "C1utwS3PyV0",
                    title: "नहीं मिला महात्मा गांधी को नोबेल पुरस्कार...",
                  },
                  {
                    id: "XMFXck2LS_A",
                    title: "कुमाउनी भाषा सम्मेलनकि सातूं झलकि समापन - 7",
                  },
                  {
                    id: "qFrZFlY-oMY",
                    title: "भौतै भल ब्यौल हय म्यर ...",
                  },
                  {
                    id: "AhPBpsAakiY",
                    title:
                      "गुमानी, गौरदा, गिरदा, शेरदा, कै गईं एक च्वखि बात...",
                  },
                  {
                    id: "zkg1cFF1bE4",
                    title: "गणेश जी की आरती के शब्द बदलिए...",
                  },
                  {
                    id: "3EhgcmcBk38",
                    title: "हिल गई अंधविश्वास की चूल...",
                  },
                  {
                    id: "Us5qvUAV7JE",
                    title: "मन और बुद्धि के संग्राम में जीता कौन ?",
                  },
                  {
                    id: "DnrtLtUPTrI",
                    title: "अखबारों में देवी -देवताओं के चित्र...",
                  },
                  {
                    id: "HVTioKo5_SU",
                    title: "सबसे बड़ा मित्र और सबसे बड़ा शत्रु...",
                  },
                  {
                    id: "WW0JTHUncVk",
                    title: "लाडलों को भी दिखाओ किचन...",
                  },
                  {
                    id: "MiYZI82Oycg",
                    title: "होली खेलें गिरजापति नन्दन होली - 2/3",
                  },
                  {
                    id: "1A13RTasdck",
                    title: "नवरात्र के नौ संकल्प...",
                  },
                  {
                    id: "uiPcPTR6RHA",
                    title: "देखो ओ दीवानो तुम ये काम ना करो...",
                  },
                  {
                    id: "AQX4Lv-3Ows",
                    title: "चैत की भिटोली अर्थात भिटोई की संस्कृति....",
                  },
                  {
                    id: "2aBMpppgH0Q",
                    title: "क्यों कहा, कब कहा, किसने कहा, किससे कहा ?",
                  },
                  {
                    id: "ivoL8cGLhhM",
                    title: "सैणी सामणि के कामकै नि हय करमू ...",
                  },
                  {
                    id: "5bAP4q25ZHk",
                    title: "भाग्याक भरौस पर तमगा नि मिलन...",
                  },
                  {
                    id: "EuGmsUwreSw",
                    title: "स्नेह और सद्भावनाओं की स्मृति है वर्षगांठ...",
                  },
                  {
                    id: "VL4I7FS3h2s",
                    title: "संगोष्ठी में शराब पिंडदान लै हौछ...",
                  },
                  {
                    id: "oaYU1EnVpzI",
                    title: "विश्व में कितने हैं भूखे रहने वाले लोग ?",
                  },
                  {
                    id: "AQX4Lv-3Ows",
                    title: "चैत की भिटोली अर्थात भिटोई की संस्कृति....",
                  },
                  {
                    id: "F5d7NHCC2Gw",
                    title: "किसी के घर जाने से पहले...",
                  },
                  {
                    id: "i79s417Z9BY",
                    title: "' उज्याव' में पंच प्रयाग, चार धाम।",
                  },
                  {
                    id: "evUB-y9sEKc",
                    title: "देर हो जायेगी",
                  },
                  {
                    id: "dT2TIYKHVgE",
                    title:
                      "मध्यपूर्व ( खाड़ी ) महायुद्ध के 35 दिन में मानव मौत...",
                  },
                  {
                    id: "lGnTvI3-OuU",
                    title: "रिश्तों के ताने -बाने में जीवन की बेल...",
                  },
                  {
                    id: "PZ7oXm-bB3Q",
                    title: "101 पाथरोंकि बुनैद",
                  },
                  {
                    id: "p9DtP3RpkuI",
                    title: "रंगमंच दिवस पर नाचे सभी कलाकार...",
                  },
                  {
                    id: "DEShRE1nnjg",
                    title: "'बटौव' पाँख लगै बेर उड़ण चानू",
                  },
                  {
                    id: "ZrQ0kbsNxXY",
                    title: "ठांगर में भल फरफरा लगुल",
                  },
                  {
                    id: "5kCDTAdplv8",
                    title: "एक प्रखर कवयित्री को सुर - संगीत श्रद्धांजलि - 1",
                  },
                  {
                    id: "GIVmSEV7S00",
                    title: "मिजाइल मैन कलाम और फील्ड मार्शल मानेकशॉ",
                  },
                  {
                    id: "yCcYzMmnnmo",
                    title: "Rohit Ko Fever Aa Gaya 😔😔",
                  },
                  {
                    id: "3AC6R4M6fOA",
                    title:
                      "बड़ी प्रखर व सटीक कविताएं थीं उनकी, विनम्र श्रद्धांजलि - 2",
                  },
                  {
                    id: "ORibp2yRd0I",
                    title: "क्यों याद करें नेहरू को ?",
                  },
                  {
                    id: "M3VgGbFJv-E",
                    title: "प्यौलपिटार में हमरि भाषाक जेवर",
                  },
                  {
                    id: "dEi8NbXoK9o",
                    title: "Bhagte Bhagte Pakdi School Bus",
                  },
                  {
                    id: "JIzU1NOVxyk",
                    title: "लोग बोले, अच्छा हुआ वह मर गया...",
                  },
                  {
                    id: "U6xxvkZpoWQ",
                    title: "हमने ही बिगाड़े हैं बच्चे...",
                  },
                  {
                    id: "6ni7e_ZA5Hs",
                    title: "सबूंक अलग द्याप्त अलग मंदिर",
                  },
                  {
                    id: "GW5S0nTt3mI",
                    title: "मुकद्दर के करल ? आपणि करनी देखो...",
                  },
                  {
                    id: "CFzB4e27Jls",
                    title: "एक टांग कट गई फिर भी ऐवरेस्ट विजय...",
                  },
                  {
                    id: "kqGfrwrJz0s",
                    title: "कुंवारी लड़कियों को शादी से डर...",
                  },
                  {
                    id: "VkJZhv_jfRE",
                    title: "Aaj Se Walk Start Kar Di",
                  },
                  {
                    id: "rwwgeIcznZA",
                    title: "भारतीय योग संस्थान स्थापना दिवस - 1/2",
                  },
                  {
                    id: "e5sYOFgJk58",
                    title:
                      "Bala Goriya | गोल्ज्यू देवता | Official Kumaoni Movie Teaser 🔔 | Out Now ⚡",
                  },
                  {
                    id: "bWuObUmcigw",
                    title: "उसने भारत में पहला कन्या विद्यालय खोला...",
                  },
                  {
                    id: "EVlcxDyoLFc",
                    title: "Bhaiya Ghar Aaye.. Mere Liye Ye Laye",
                  },
                  {
                    id: "YkNFBEEqVM4",
                    title: "करते हैं हम शुरू आज का काम प्रभू - 2/2",
                  },
                  {
                    id: "nG39YXccjyo",
                    title: "ब्या दिन ब्योलि कैं झेलण पड़ रिवाज...",
                  },
                  {
                    id: "V8b5Pkh0ToQ",
                    title: "भीष्म. द्रोण. कृपाचार्य और विदुर की चुप्पी...",
                  },
                  {
                    id: "eiTb9Lz_fGY",
                    title: "गांधीज्यू चै रौनी आपणि तस्वीर बै",
                  },
                  {
                    id: "GvEX6g7tYcM",
                    title:
                      "Car Se Mili Ladies hair Clip.. BIWI Ne Laga Di Class",
                  },
                  {
                    id: "wA8BO1AjV8Q",
                    title: "समाज सुधारक बी आर अंबेडकर और बैसाखी...",
                  },
                  {
                    id: "kwNl-7DIPZ8",
                    title: "बाबा साहेब बैसाखी चैतला फूलधेई स्याल्दे बिखोती",
                  },
                  {
                    id: "ZQ4ryvq0xVo",
                    title: "भैटी भैटिए पटै जानी घुन",
                  },
                  {
                    id: "StW5uqlhWbQ",
                    title: "2525 कि मी लंबी गंगा का संताप",
                  },
                  {
                    id: "UvjahKafET0",
                    title: "द्वि हजार बीस में पैल लौकडाउन",
                  },
                  {
                    id: "QxZiSKLWO_8",
                    title: "वेशधारी पाखंडियों की बुरी नजर...",
                  },
                  {
                    id: "UPnN62FNbYQ",
                    title: "कोरोनाल सतै गंगा",
                  },
                  {
                    id: "YaPGHs0pQzM",
                    title: "सैमधार जैनोली कौतिक में 'ओ संता पंजाबी संता...'",
                  },
                  {
                    id: "TIp1fjuALz8",
                    title:
                      "कॉकरोच का आतंक खत्म! 😱 ये ट्रिक सच में काम कर गई | Family Vlog |",
                  },
                  {
                    id: "sIm6CQYAnIY",
                    title: "संगत का असर तो होगा ही...",
                  },
                  {
                    id: "KsMMz7Co1Jk",
                    title: "गौं-गाड़ घर -घर पुजि शराब",
                  },
                  {
                    id: "3GiPMbYeYpA",
                    title: "मानवता का तू है मसीहा...",
                  },
                  {
                    id: "1B_xNXd6X7k",
                    title:
                      "👉 Bina Order Paneer Roll Delivered?! 😱 | Delivery Boy Ki Galti 😂 | Family Vlog |",
                  },
                  {
                    id: "DKf8KZKjzp0",
                    title: "नारी के बहुरूप न्यारे...",
                  },
                  {
                    id: "LYO5yCFZRnY",
                    title: "शहतूत ज्योंही पेड़ से गिरा, समझो बीमारी से भरा...",
                  },
                  {
                    id: "j3NA0ollML0",
                    title:
                      "Raghav Chaddha के बताए रेस्टोरेंट में Lunch 😍 | Worth It या Overhyped?",
                  },
                  {
                    id: "eeulsZ2NZB4",
                    title: "बड़ा हुआ पेट फैटी लीवर होने की संभावना ?",
                  },
                  {
                    id: "wUlwfKQ1o1I",
                    title: "वजन बढ़िगो, कमर में मोटापा चढ़िगो",
                  },
                  {
                    id: "ndFdbvth16A",
                    title:
                      "द्वाराहाट के शाल्दे मेले के लिए गवाड़ गाँव का प्रस्थान",
                  },
                ]
                  .map(
                    (video) => `
                    <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
    
    <!-- Thumbnail Container -->
    <div 
        class="relative w-full aspect-video bg-black cursor-pointer youtube-player"
        data-id="${video.id}"
    >
        <img 
            src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
            class="w-full h-full object-cover"
            loading="lazy"
        />

        <!-- Play Button -->
        <!-- Play Button Overlay -->
<div class="absolute inset-0 flex items-center justify-center group">
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>

    <!-- Play Button -->
    <div class="
        relative
        flex items-center justify-center
        w-20 h-20
        rounded-full
        bg-red-600/90
        backdrop-blur-md
        shadow-2xl
        transition-all duration-300
        group-hover:scale-110
        group-hover:bg-red-700
    ">
        <!-- Triangle -->
        <div class="
            ml-1
            w-0 h-0
            border-t-[12px] border-t-transparent
            border-b-[12px] border-b-transparent
            border-l-[20px] border-l-white
        "></div>
    </div>
</div>
    </div>

    <div class="p-6">
        <h3 class="font-bold text-slate-800 text-lg">${video.title}</h3>
        <p class="text-slate-500 text-sm mt-1">
            Galaxy of UK Stars Official/Partner/Public Channel
        </p>
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

// youtube video player
document.addEventListener("click", function (e) {
  const player = e.target.closest(".youtube-player");

  if (!player) return;

  const videoId = player.dataset.id;

  player.innerHTML = `
        <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    `;
});

// const videosPerPage = 20;
// let visible = 20;

// function renderVideos() {
//     const sliced = videos.slice(0, visible);

//     document.getElementById("videos").innerHTML =
//         sliced.map(video => `...`).join("");
// }

// document.getElementById("loadMore").addEventListener("click", () => {
//     visible += 20;
//     renderVideos();
// });

// renderVideos();
// Handle browser navigation (Back/Forward)
window.addEventListener("popstate", handleRouting);

// INITIAL LOAD: This is what makes the content visible on first open
document.addEventListener("DOMContentLoaded", handleRouting);

window.toggleDescription = (index) => {
  const desc = document.getElementById(`desc-${index}`);
  const btn = document.getElementById(`btn-${index}`);

  if (desc.classList.contains("line-clamp-5")) {
    desc.classList.remove("line-clamp-5");
    btn.innerText = "Read Less";
  } else {
    desc.classList.add("line-clamp-5");
    btn.innerText = "Read More";
  }
};
