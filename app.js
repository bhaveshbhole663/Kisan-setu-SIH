/* Kisan Setu Application Core Logic - Multi-Language & Sequential Workflow */

// ==========================================
// CONSTANTS & MULTI-LANGUAGE I18N DICTIONARY
// ==========================================
const PROCUREMENT_CENTRES = [
  { id: "PC-APMC-01", name: "Pune Central APMC Mandi", district: "Pune" },
  { id: "NR-GHUB-02", name: "Nashik Regional Grain Hub", district: "Nashik" },
  { id: "NP-CMANDI-03", name: "Nagpur Pulse & Cotton Centre", district: "Nagpur" },
  { id: "KA-HUB-04", name: "Kolhapur Agricultural Hub", district: "Kolhapur" },
  { id: "AG-PROC-05", name: "Amravati Grain Procurement Centre", district: "Amravati" }
];

const CROP_CATEGORIES = {
  Grains: [
    { name: "Wheat (गहू / गेहूं)", msp: 2275 },
    { name: "Rice / Paddy (तांदूळ / चावल)", msp: 2183 },
    { name: "Maize (मका / मक्का)", msp: 2090 },
    { name: "Bajra (बाजरी / बाजरा)", msp: 2500 },
    { name: "Jowar (ज्वारी / ज्वार)", msp: 3180 }
  ],
  Pulses: [
    { name: "Chana / Gram (हरभरा / चना)", msp: 5440 },
    { name: "Tur / Arhar (तूर / अरहर)", msp: 7000 },
    { name: "Moong (मूग / मूंग)", msp: 8558 },
    { name: "Urad (उडीद / उड़द)", msp: 6950 }
  ],
  Fibres: [
    { name: "Cotton (कापूस / कपास)", msp: 6620 },
    { name: "Jute (ज्यूट)", msp: 5050 }
  ]
};

const I18N = {
  en: {
    badge_simulation: "Simulation Portal",
    tagline: "Government Procurement & Support Network",
    nav_farmer_portal: "Farmer Portal",
    nav_slot_booking: "Slot Booking",
    nav_admin_portal: "Admin Portal",
    nav_status_check: "Farmer Status",
    hub_label: "Hub:",
    reg_portal_tag: "Unified Farmer Registration Portal",
    reg_portal_title: "Welcome to Kisan Setu Registration",
    reg_portal_desc: "Register your profile to unlock smooth slot bookings at government procurement centres. Choose standard form filling or experience our interactive AI voice/chat assistant.",
    mode_trad_badge: "Traditional Form",
    mode_trad_title: "Standard Online Form",
    mode_trad_desc: "Fill out personal, land, and bank details manually step by step with instant field validation.",
    mode_ai_badge: "AI Assisted",
    mode_ai_title: "Conversation with AI",
    mode_ai_desc: "Simply chat or speak with our AI Assistant. It asks questions and automatically fills the registration form for you!",
    form_heading: "Farmer Profile Registration Form",
    form_subheading: "Please enter accurate details to generate your unique Kisan Setu ID.",
    btn_demo_fill: "Fill Demo Data",
    sec_farmer_details: "Farmer Details",
    lbl_name: "Full Name",
    lbl_aadhar: "Aadhar Number (12 Digits)",
    lbl_mobile: "Mobile Number",
    lbl_dob: "Date of Birth",
    lbl_district: "District",
    lbl_taluka: "Taluka",
    lbl_village: "Village",
    lbl_address: "Full Address",
    sec_land_details: "Land Details",
    lbl_gat: "Gat Number (Survey No.)",
    lbl_saatbaara: "Saatbaara (7/12) Detail",
    lbl_total_acres: "Total Acres of Land",
    lbl_cultivation_acres: "Cultivation Area (Acres)",
    sec_bank_details: "Bank Account Details",
    lbl_bank_name: "Bank Name",
    lbl_account_holder: "Account Holder Name",
    lbl_account_number: "Account Number",
    lbl_ifsc: "IFSC Code",
    btn_register_submit: "Register & Generate Kisan Setu ID",
    slot_banner_badge: "Procurement Slot Reservation System",
    slot_banner_title: "Book Your Procurement Slot",
    slot_banner_desc: "Verify your Kisan Setu ID first, select a nearby procurement centre, then choose any of the 4 booking simulations below to reserve your arrival token.",
    slot_step1_title: "Step 1: Enter / Select Kisan Setu ID",
    slot_step1_sub: "Verification is required before booking a slot.",
    btn_verify_id: "Verify ID",
    verified_farmer_title: "Verified Farmer Profile",
    id_active_badge: "ID Active",
    ai_slot_heading: "AI Slot Booking Conversation",
    ai_slot_sub: "Interactive voice/text slot assistant",
    web_slot_heading: "Web Slot Booking Portal",
    web_slot_sub: "Select a nearby procurement centre, crop category, date, and time slot.",
    lbl_select_centre: "Select Nearby Procurement Centre",
    lbl_crop_category: "Crop Category",
    lbl_crop_name: "Crop Name",
    lbl_quantity: "Approximate Quantity (in Quintals)",
    lbl_preferred_date: "Preferred Arrival Date",
    lbl_time_slot: "Select Time Slot",
    btn_issue_slot_token: "Confirm Slot & Issue Attendance Token",
    admin_list_heading: "Procurement Enquiries & Active Batches",
    admin_list_sub: "Sequential step-by-step unlocking logic enforced.",
    btn_walkin_add: "+ Walk-in Registration & Instant Token",
    stat_farmers: "Total Farmers Registered",
    stat_booked: "Booked Slots & Tokens",
    stat_weight: "Total Weighed",
    stat_payout: "Total Payout Disbursed",
    lbl_filter_category: "Filter Category:",
    status_banner_badge: "Live Procurement Tracker",
    status_banner_title: "Check Your Procurement Status",
    status_banner_desc: "Enter your Kisan Setu ID, Attendance Token ID, or registered mobile number to view real-time sequential progress.",
    btn_track: "Track",
    timeline_heading: "Procurement Lifecycle Stepper",
    step1_title: "Farmer Registration",
    step2_title: "Slot & Token",
    step3_title: "Attendance Check-in",
    step4_title: "Weighing Produce",
    step5_title: "Quality Check",
    step6_title: "Approved for Sale",
    step7_title: "Payment Disbursal",
    btn_reset: "Reset",
    btn_send: "Send",
    ai_extracted_label: "Live Data Extracted",
    btn_finalize_ai: "Finalize AI Registration",
    ai_agent_sub: "Interactive Voice/Text Assistant",
    btn_reset_chat: "Reset Chat"
  },
  mr: {
    badge_simulation: "सिम्युलेशन पोर्टल",
    tagline: "शासकीय धान्य खरेदी व शेतकरी सहाय्य प्रणाली",
    nav_farmer_portal: "शेतकरी पोर्टल",
    nav_slot_booking: "स्लॉट बुकिंग",
    nav_admin_portal: "ॲडमिन पोर्टल",
    nav_status_check: "खरेदी स्थिती",
    hub_label: "केंद्र:",
    reg_portal_tag: "एकछत्री शेतकरी नोंदणी पोर्टल",
    reg_portal_title: "किसान सेतु नोंदणी पोर्टलवर आपले स्वागत आहे",
    reg_portal_desc: "शासकीय धान्य खरेदी केंद्रांवर स्लॉट बुक करण्यासाठी आपली नोंदणी पूर्ण करा. पारंपारिक फॉर्म किंवा AI संवाद सहाय्यक निवडा.",
    mode_trad_badge: "पारंपारिक फॉर्म",
    mode_trad_title: "मानक ऑनलाइन फॉर्म",
    mode_trad_desc: "वैयक्तिक, जमीन आणि बँक खात्याची माहिती स्वतः भरून नोंदणी करा.",
    mode_ai_badge: "AI सहाय्यक",
    mode_ai_title: "AI शी संभाषण करा",
    mode_ai_desc: "आमच्या AI सहाय्यकाशी बोला किंवा चॅट करा. ते प्रश्न विचारून फॉर्म आपोआप भरेल!",
    form_heading: "शेतकरी माहिती नोंदणी अर्ज",
    form_subheading: "आपला युनिक किसान सेतु आयडी मिळवण्यासाठी अचूक माहिती भरा.",
    btn_demo_fill: "नमूना माहिती भरा",
    sec_farmer_details: "१. शेतकऱ्याचा तपशील",
    lbl_name: "पूर्ण नाव",
    lbl_aadhar: "आधार नंबर (१२ अंक)",
    lbl_mobile: "मोबाईल नंबर",
    lbl_dob: "जन्म तारीख",
    lbl_district: "जिल्हा",
    lbl_taluka: "तालुका",
    lbl_village: "गाव",
    lbl_address: "पूर्ण पत्ता",
    sec_land_details: "२. जमिनीचा तपशील",
    lbl_gat: "गट नंबर / सर्व्हे नंबर",
    lbl_saatbaara: "७/१२ उतारा तपशील (ऐच्छिक)",
    lbl_total_acres: "एकूण जमीन (एकर)",
    lbl_cultivation_acres: "पिकाखालील क्षेत्र (एकर)",
    sec_bank_details: "३. बँक खात्याचा तपशील",
    lbl_bank_name: "बँकेचे नाव",
    lbl_account_holder: "खातेदाराचे नाव",
    lbl_account_number: "बँक खाते क्रमांक",
    lbl_ifsc: "IFSC कोड",
    btn_register_submit: "नोंदणी करा व किसान सेतु ID मिळवा",
    slot_banner_badge: "धान्य खरेदी स्लॉट बुकिंग प्रणाली",
    slot_banner_title: "आपला धान्य खरेदी स्लॉट बुक करा",
    slot_banner_desc: "प्रथम आपला किसान सेतु ID पडताळा, जवळचे खरेदी केंद्र निवडा आणि हजेरी टोकन मिळवा.",
    slot_step1_title: "पायरी १: किसान सेतु ID प्रविष्ट करा / निवडा",
    slot_step1_sub: "स्लॉट बुकिंगपूर्वी पडताळणी आवश्यक आहे.",
    btn_verify_id: "ID पडताळा",
    verified_farmer_title: "पडताळणी झालेला शेतकरी",
    id_active_badge: "ID सक्रिय",
    ai_slot_heading: "AI द्वारे स्लॉट बुकिंग संवाद",
    ai_slot_sub: "व्हॉइस व चॅट स्लॉट सहाय्यक",
    web_slot_heading: "वेब स्लॉट बुकिंग पोर्टल",
    web_slot_sub: "खरेदी केंद्र, पिकाचा वर्ग, तारीख आणि वेळ निवडा.",
    lbl_select_centre: "जवळचे धान्य खरेदी केंद्र निवडा",
    lbl_crop_category: "पिकाचा वर्ग",
    lbl_crop_name: "पिकाचे नाव",
    lbl_quantity: "अंदाजे प्रमाण (क्विंटलमध्ये)",
    lbl_preferred_date: "खरेदीची तारीख",
    lbl_time_slot: "वेळेचा स्लॉट निवडा",
    btn_issue_slot_token: "स्लॉट निश्चित करा व हजेरी टोकन मिळवा",
    admin_list_heading: "खरेदी नोंदणी व टप्प्यावार प्रगती",
    admin_list_sub: "टप्प्याटप्प्याने लॉकिंग आणि अनलोकिंग नियम लागू.",
    btn_walkin_add: "+ थेट हजेरी (Walk-in) व इन्स्टंट टोकन",
    stat_farmers: "एकूण नोंदणीकृत शेतकरी",
    stat_booked: "बुक केलेले स्लॉट व टोकन्स",
    stat_weight: "एकूण मोजलेले वजन",
    stat_payout: "एकूण दिलेले वाटप (₹)",
    lbl_filter_category: "पिकानुसार फिल्टर:",
    status_banner_badge: "थेट खरेदी प्रगती ट्रॅकर",
    status_banner_title: "आपल्या धान्य खरेदीची स्थिती तपासा",
    status_banner_desc: "किसान सेतु ID, टोकन ID किंवा मोबाईल नंबर टाकून ७ टप्प्यांची थेट प्रगती पहा.",
    btn_track: "शोधा",
    timeline_heading: "धान्य खरेदी टप्पे (Lifecycle)",
    step1_title: "शेतकरी नोंदणी",
    step2_title: "स्लॉट व टोकन",
    step3_title: "केंद्रावर हजेरी (Check-in)",
    step4_title: "वजन मोजणी",
    step5_title: "गुणवत्ता तपासणी",
    step6_title: "विक्रीस मंजुरी",
    step7_title: "बँक पेमेंट",
    btn_reset: "पुन्हा सुरू करा",
    btn_send: "पाठवा",
    ai_extracted_label: "प्राप्त झालेली माहिती",
    btn_finalize_ai: "AI नोंदणी पूर्ण करा",
    ai_agent_sub: "संवादी व्हॉइस/चॅट सहाय्यक",
    btn_reset_chat: "चॅट रीसेट करा"
  },
  hi: {
    badge_simulation: "सिमुलेशन पोर्टल",
    tagline: "सरकारी खरीद एवं किसान सहायता नेटवर्क",
    nav_farmer_portal: "किसान पोर्टल",
    nav_slot_booking: "स्लॉट बुकिंग",
    nav_admin_portal: "एडमिन पोर्टल",
    nav_status_check: "खरीद स्थिति",
    hub_label: "केंद्र:",
    reg_portal_tag: "एकीकृत किसान पंजीकरण पोर्टल",
    reg_portal_title: "किसान सेतु पंजीकरण में आपका स्वागत है",
    reg_portal_desc: "सरकारी खरीद केंद्रों पर स्लॉट बुक करने के लिए पंजीकरण करें। सामान्य फॉर्म या AI संवाद सहायक चुनें।",
    mode_trad_badge: "पारंपरिक फॉर्म",
    mode_trad_title: "मानक ऑनलाइन फॉर्म",
    mode_trad_desc: "व्यक्तिगत, भूमि और बैंक विवरण स्वयं भरकर पंजीकरण करें।",
    mode_ai_badge: "AI सहायक",
    mode_ai_title: "AI से बातचीत करें",
    mode_ai_desc: "हमारे AI सहायक से बात या चैट करें। वह प्रश्न पूछकर फॉर्म अपने आप भर देगा!",
    form_heading: "किसान प्रोफाइल पंजीकरण फॉर्म",
    form_subheading: "अपनी विशिष्ट किसान सेतु आईडी प्राप्त करने के लिए सही विवरण भरें।",
    btn_demo_fill: "डेमो डेटा भरें",
    sec_farmer_details: "१. किसान विवरण",
    lbl_name: "पूरा नाम",
    lbl_aadhar: "आधार नंबर (१२ अंक)",
    lbl_mobile: "मोबाइल नंबर",
    lbl_dob: "जन्म तिथि",
    lbl_district: "जिला",
    lbl_taluka: "तहसील / तालुका",
    lbl_village: "गांव",
    lbl_address: "पूरा पता",
    sec_land_details: "२. भूमि विवरण",
    lbl_gat: "गट नंबर / सर्वे नंबर",
    lbl_saatbaara: "७/१२ खसरा विवरण (वैकल्पिक)",
    lbl_total_acres: "कुल भूमि (एकड़)",
    lbl_cultivation_acres: "कृषि क्षेत्र (एकड़)",
    sec_bank_details: "३. बैंक खाता विवरण",
    lbl_bank_name: "बैंक का नाम",
    lbl_account_holder: "खाताधारक का नाम",
    lbl_account_number: "बैंक खाता संख्या",
    lbl_ifsc: "IFSC कोड",
    btn_register_submit: "पंजीकरण करें और किसान सेतु ID पाएं",
    slot_banner_badge: "उपज खरीद स्लॉट बुकिंग प्रणाली",
    slot_banner_title: "अपनी उपज खरीद का स्लॉट बुक करें",
    slot_banner_desc: "पहले अपनी किसान सेतु ID सत्यापित करें, निकटतम खरीद केंद्र चुनें और उपस्थिति टोकन पाएं।",
    slot_step1_title: "चरण १: किसान सेतु ID दर्ज करें / चुनें",
    slot_step1_sub: "स्लॉट बुकिंग से पहले सत्यापन आवश्यक है।",
    btn_verify_id: "ID सत्यापित करें",
    verified_farmer_title: "सत्यापित किसान प्रोफाइल",
    id_active_badge: "ID सक्रिय",
    ai_slot_heading: "AI द्वारा स्लॉट बुकिंग बातचीत",
    ai_slot_sub: "वॉइस एवं चैट स्लॉट सहायक",
    web_slot_heading: "वेब स्लॉट बुकिंग पोर्टल",
    web_slot_sub: "खरीद केंद्र, फसल श्रेणी, तिथि और समय चुनें।",
    lbl_select_centre: "निकटतम उपज खरीद केंद्र चुनें",
    lbl_crop_category: "फसल की श्रेणी",
    lbl_crop_name: "फसल का नाम",
    lbl_quantity: "अनुमानित मात्रा (क्विंटल में)",
    lbl_preferred_date: "खरीद की तारीख",
    lbl_time_slot: "समय का स्लॉट चुनें",
    btn_issue_slot_token: "स्लॉट पुष्टि करें और उपस्थिति टोकन पाएं",
    admin_list_heading: "खरीद पूछताछ एवं क्रमिक प्रगति",
    admin_list_sub: "चरणबद्ध अनलॉकिंग नियम लागू।",
    btn_walkin_add: "+ प्रत्यक्ष उपस्थिति (Walk-in) व तत्काल टोकन",
    stat_farmers: "कुल पंजीकृत किसान",
    stat_booked: "बुक किए गए स्लॉट व टोकन",
    stat_weight: "कुल तौला गया वजन",
    stat_payout: "कुल भुगतान (₹)",
    lbl_filter_category: "फसल श्रेणी फ़िल्टर:",
    status_banner_badge: "लाइव खरीद स्थिति ट्रैकर",
    status_banner_title: "अपनी उपज खरीद की स्थिति जांचें",
    status_banner_desc: "किसान सेतु ID, टोकन ID या मोबाइल नंबर डालकर ७ चरणों की लाइव प्रगति देखें।",
    btn_track: "ट्रैक करें",
    timeline_heading: "उपज खरीद चरण (Lifecycle)",
    step1_title: "किसान पंजीकरण",
    step2_title: "स्लॉट एवं टोकन",
    step3_title: "केंद्र पर उपस्थिति (Check-in)",
    step4_title: "वजन तौलना",
    step5_title: "गुणवत्ता जांच",
    step6_title: "बिक्री हेतु स्वीकृत",
    step7_title: "बैंक भुगतान",
    btn_reset: "रीसेट",
    btn_send: "भेजें",
    ai_extracted_label: "प्राप्त डेटा",
    btn_finalize_ai: "AI पंजीकरण पूरा करें",
    ai_agent_sub: "सवांदनात्मक वॉइस/चैट सहायक",
    btn_reset_chat: "चैट रीसेट करें"
  }
};

const INITIAL_FARMERS = [
  {
    id: "KS-2026-9842",
    name: "Ramesh Kumar Patil",
    aadhar: "548912348765",
    mobile: "9823012345",
    dob: "1982-05-14",
    district: "Pune",
    taluka: "Haveli",
    village: "Wagholi",
    address: "Gat No 142/A, Wagholi, Pune",
    gat: "142/A",
    saatbaara: "7-12-MH-2026-881",
    totalAcres: 5.5,
    cultivationAcres: 4.0,
    bankName: "State Bank of India",
    accountHolder: "Ramesh Kumar Patil",
    accountNumber: "30948572019",
    ifsc: "SBIN0001234",
    registrationDate: "2026-09-01",
    slot: {
      centre: "Pune Central APMC Mandi",
      centreId: "PC-APMC-01",
      category: "Grains",
      crop: "Wheat (गहू / गेहूं)",
      quantity: 45,
      date: "2026-09-12",
      timeSlot: "Morning Slot (08:00 AM - 11:00 AM)",
      bookedVia: "Web Portal",
      tokenId: "TK-PUNE-8942"
    },
    workflow: {
      step1: true,  // Farmer Registration
      step2: true,  // Slot & Token Issued
      step3: true,  // Walk-in Attendance Check-in
      step4: { done: true, weight: 45 }, // Weighing
      step5: { done: true, grade: "Grade A", moisture: 11.5 }, // Quality Check
      step6: { done: true, approved: true, payout: 102375 }, // Sale Approval
      step7: { done: false, status: "Pending Disbursal", utr: "" } // Payment
    }
  },
  {
    id: "KS-2026-4109",
    name: "Ananda Pandurang Shinde",
    aadhar: "981245671234",
    mobile: "9422098765",
    dob: "1978-11-20",
    district: "Nashik",
    taluka: "Niphad",
    village: "Pimplas",
    address: "Pimplas, Niphad, Nashik",
    gat: "88/B",
    saatbaara: "7-12-MH-2026-412",
    totalAcres: 8.0,
    cultivationAcres: 6.5,
    bankName: "Bank of Baroda",
    accountHolder: "Ananda P Shinde",
    accountNumber: "518201000984",
    ifsc: "BARB0NIPHAD",
    registrationDate: "2026-09-05",
    slot: {
      centre: "Nashik Regional Grain Hub",
      centreId: "NR-GHUB-02",
      category: "Pulses",
      crop: "Chana / Gram (हरभरा / चना)",
      quantity: 30,
      date: "2026-09-13",
      timeSlot: "Midday Slot (11:00 AM - 02:00 PM)",
      bookedVia: "IVR Keypad Call",
      tokenId: "TK-NASHIK-4109"
    },
    workflow: {
      step1: true,
      step2: true,
      step3: false,
      step4: { done: false, weight: 0 },
      step5: { done: false, grade: "Pending", moisture: 0 },
      step6: { done: false, approved: false, payout: 0 },
      step7: { done: false, status: "Pending", utr: "" }
    }
  },
  {
    id: "KS-2026-7351",
    name: "Savita Mahadev Gaikwad",
    aadhar: "672390124589",
    mobile: "9765432109",
    dob: "1989-03-08",
    district: "Nagpur",
    taluka: "Katol",
    village: "Kondhali",
    address: "Near Water Tank, Kondhali",
    gat: "305",
    saatbaara: "7-12-MH-2026-900",
    totalAcres: 6.0,
    cultivationAcres: 5.0,
    bankName: "Maharashtra Gramin Bank",
    accountHolder: "Savita M Gaikwad",
    accountNumber: "60129481723",
    ifsc: "MAHG0004012",
    registrationDate: "2026-09-08",
    slot: {
      centre: "Nagpur Pulse & Cotton Centre",
      centreId: "NP-CMANDI-03",
      category: "Fibres",
      crop: "Cotton (कापूस / कपास)",
      quantity: 28,
      date: "2026-09-10",
      timeSlot: "Morning Slot (08:00 AM - 11:00 AM)",
      bookedVia: "AI Voice Assistant",
      tokenId: "TK-NAGPUR-7351"
    },
    workflow: {
      step1: true,
      step2: true,
      step3: true,
      step4: { done: true, weight: 28 },
      step5: { done: true, grade: "Grade A+", moisture: 8.0 },
      step6: { done: true, approved: true, payout: 185360 },
      step7: { done: true, status: "Completed", utr: "UTR202609108849" }
    }
  }
];

// Application Global State
let state = {
  farmers: [],
  selectedVerifiedFarmerId: "KS-2026-9842",
  currentLang: "en",
  loggedInCentre: {
    id: "PC-APMC-01",
    name: "Pune Central APMC Mandi"
  },
  adminCategoryFilter: "ALL",
  activeAdminFarmer: null,
  aiRegStep: 0,
  aiRegData: {},
  aiSlotStep: 0,
  aiSlotData: {},
  ivrState: {
    active: false,
    timerSec: 0,
    timerInterval: null,
    step: 0,
    buffer: "",
    farmerId: "",
    category: "",
    crop: "",
    qty: "",
    timeSlot: ""
  },
  smsThread: []
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initDynamicDropdowns();
  updateVerifiedFarmerBanner();
  renderAdminFarmerList();
  renderAdminMetrics();
  initAiRegistration();
  initAiSlotChat();
  initSmsTemplates();
  changeLanguage(state.currentLang);
  lucide.createIcons();
});

function loadState() {
  const saved = localStorage.getItem("kisan_setu_state_v2");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.farmers = parsed.farmers || INITIAL_FARMERS;
      state.selectedVerifiedFarmerId = parsed.selectedVerifiedFarmerId || state.farmers[0]?.id || "";
      state.currentLang = parsed.currentLang || "en";
      state.loggedInCentre = parsed.loggedInCentre || PROCUREMENT_CENTRES[0];
    } catch (e) {
      state.farmers = INITIAL_FARMERS;
    }
  } else {
    state.farmers = INITIAL_FARMERS;
    saveState();
  }
}

function saveState() {
  localStorage.setItem("kisan_setu_state_v2", JSON.stringify({
    farmers: state.farmers,
    selectedVerifiedFarmerId: state.selectedVerifiedFarmerId,
    currentLang: state.currentLang,
    loggedInCentre: state.loggedInCentre
  }));
}

// ==========================================
// MULTI-LANGUAGE TRANSLATION ENGINE (I18N)
// ==========================================
function changeLanguage(langKey) {
  state.currentLang = langKey;
  saveState();

  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = langKey;

  const dict = I18N[langKey] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
        el.placeholder = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });

  renderAdminFarmerList();
  renderAdminMetrics();
  lucide.createIcons();
}

// ==========================================
// PROCUREMENT CENTRE LOGIN & AUTHENTICATION
// ==========================================
function openCentreLoginModal() {
  document.getElementById("modal-centre-login").classList.remove("hidden");
}

function closeCentreLoginModal() {
  document.getElementById("modal-centre-login").classList.add("hidden");
}

function autoFillCentreId(centreName) {
  const centre = PROCUREMENT_CENTRES.find(c => c.name === centreName);
  if (centre) {
    document.getElementById("login-centre-id").value = centre.id;
  }
}

function handleCentreLoginSubmit(e) {
  e.preventDefault();
  const centreName = document.getElementById("login-centre-select").value;
  const centreId = document.getElementById("login-centre-id").value;

  const centreObj = PROCUREMENT_CENTRES.find(c => c.name === centreName) || { id: centreId, name: centreName };
  state.loggedInCentre = centreObj;
  saveState();

  // Update Header Badge
  document.getElementById("header-stat-procurement").innerText = centreObj.name;
  document.getElementById("mobile-hub-label").innerText = centreObj.name;
  document.getElementById("admin-centre-title-heading").innerText = centreObj.name;
  document.getElementById("admin-logged-in-badge").innerText = `Logged in as: Admin (Hub ID: ${centreObj.id})`;

  closeCentreLoginModal();
  renderAdminFarmerList();
  renderAdminMetrics();

  alert(`Successfully Logged into Procurement Centre:\n${centreObj.name} (Hub ID: ${centreObj.id})`);
}

// ==========================================
// TAB & NAVIGATION SWITCHER
// ==========================================
function switchTab(tabId) {
  document.querySelectorAll(".tab-view").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));
  
  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.remove("hidden");
  
  const desktopTab = document.getElementById(`nav-${tabId}`);
  if (desktopTab) desktopTab.classList.add("active");

  if (tabId === "slot-booking") {
    populateSlotIdDropdown();
  } else if (tabId === "admin-portal") {
    renderAdminFarmerList();
    renderAdminMetrics();
  }

  lucide.createIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// FARMER REGISTRATION LOGIC
// ==========================================
function setRegistrationMode(mode) {
  const cardTrad = document.getElementById("card-mode-traditional");
  const cardAi = document.getElementById("card-mode-ai");
  const containerTrad = document.getElementById("container-traditional-form");
  const containerAi = document.getElementById("container-ai-registration");

  if (mode === "traditional") {
    cardTrad.className = "reg-mode-card cursor-pointer bg-white rounded-3xl p-6 border-2 border-brand-500 shadow-md hover:shadow-xl transition-all relative overflow-hidden group";
    cardAi.className = "reg-mode-card cursor-pointer bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group";
    containerTrad.classList.remove("hidden");
    containerAi.classList.add("hidden");
  } else {
    cardAi.className = "reg-mode-card cursor-pointer bg-white rounded-3xl p-6 border-2 border-amber-500 shadow-md hover:shadow-xl transition-all relative overflow-hidden group";
    cardTrad.className = "reg-mode-card cursor-pointer bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group";
    containerAi.classList.remove("hidden");
    containerTrad.classList.add("hidden");
  }
}

function prefillSampleFarmer() {
  document.getElementById("reg-name").value = "Suresh Mahadev Patil";
  document.getElementById("reg-aadhar").value = "781290345612";
  document.getElementById("reg-mobile").value = "9822114455";
  document.getElementById("reg-dob").value = "1985-08-15";
  document.getElementById("reg-district").value = "Pune";
  document.getElementById("reg-taluka").value = "Haveli";
  document.getElementById("reg-village").value = "Uruli Kanchan";
  document.getElementById("reg-address").value = "Gat 204, Near Bus Stand, Uruli Kanchan";
  document.getElementById("reg-gat").value = "204/1";
  document.getElementById("reg-saatbaara").value = "7-12-MH-2026-990";
  document.getElementById("reg-total-acres").value = "4.5";
  document.getElementById("reg-cultivation-acres").value = "3.5";
  document.getElementById("reg-bank-name").value = "HDFC Bank";
  document.getElementById("reg-account-holder").value = "Suresh Mahadev Patil";
  document.getElementById("reg-account-number").value = "5010023489102";
  document.getElementById("reg-ifsc").value = "HDFC0000123";
}

function handleRegistrationSubmit(event) {
  event.preventDefault();
  
  const newFarmer = {
    id: generateKisanSetuId(),
    name: document.getElementById("reg-name").value.trim(),
    aadhar: document.getElementById("reg-aadhar").value.trim(),
    mobile: document.getElementById("reg-mobile").value.trim(),
    dob: document.getElementById("reg-dob").value,
    district: document.getElementById("reg-district").value.trim(),
    taluka: document.getElementById("reg-taluka").value.trim(),
    village: document.getElementById("reg-village").value.trim(),
    address: document.getElementById("reg-address").value.trim(),
    gat: document.getElementById("reg-gat").value.trim(),
    saatbaara: document.getElementById("reg-saatbaara").value.trim() || "N/A",
    totalAcres: parseFloat(document.getElementById("reg-total-acres").value),
    cultivationAcres: parseFloat(document.getElementById("reg-cultivation-acres").value),
    bankName: document.getElementById("reg-bank-name").value.trim(),
    accountHolder: document.getElementById("reg-account-holder").value.trim(),
    accountNumber: document.getElementById("reg-account-number").value.trim(),
    ifsc: document.getElementById("reg-ifsc").value.trim(),
    registrationDate: new Date().toISOString().split('T')[0],
    slot: null,
    workflow: {
      step1: true,
      step2: false,
      step3: false,
      step4: { done: false, weight: 0 },
      step5: { done: false, grade: "Pending", moisture: 0 },
      step6: { done: false, approved: false, payout: 0 },
      step7: { done: false, status: "Pending", utr: "" }
    }
  };

  state.farmers.unshift(newFarmer);
  state.selectedVerifiedFarmerId = newFarmer.id;
  saveState();

  showIdCardModal(newFarmer);
  document.getElementById("form-farmer-registration").reset();
}

function generateKisanSetuId() {
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `KS-2026-${randNum}`;
}

function generateAttendanceTokenId(centreName) {
  const code = centreName.includes("Pune") ? "PUNE" : centreName.includes("Nashik") ? "NASHIK" : centreName.includes("Nagpur") ? "NAGPUR" : centreName.includes("Kolhapur") ? "KOLHAPUR" : "AMRAVATI";
  const num = Math.floor(1000 + Math.random() * 9000);
  return `TK-${code}-${num}`;
}

// ==========================================
// AI CONVERSATIONAL REGISTRATION ENGINE
// ==========================================
const AI_REG_QUESTIONS = [
  { key: "name", prompt: "Namaste! Welcome to Kisan Setu AI Registration. May I please know your full name?", suggestions: ["Ramesh Kumar Patil", "Suresh Marathe", "Sunita Shinde"] },
  { key: "mobile", prompt: "Great to connect with you! Please enter your 10-digit mobile number.", suggestions: ["9823012345", "9422098765", "9765432109"] },
  { key: "aadhar", prompt: "Got it. What is your 12-digit Aadhaar number?", suggestions: ["548912348765", "981245671234"] },
  { key: "dob", prompt: "Thank you. What is your Date of Birth? (YYYY-MM-DD)", suggestions: ["1985-05-15", "1990-11-20"] },
  { key: "district", prompt: "Which District and Taluka do you belong to?", suggestions: ["Pune, Haveli", "Nashik, Niphad", "Nagpur, Katol"] },
  { key: "village", prompt: "Please share your Village name and Gat (Survey) Number.", suggestions: ["Wagholi, Gat 142", "Pimplas, Gat 88", "Kondhali, Gat 305"] },
  { key: "acres", prompt: "How many total acres of land do you have and what is your cultivation area in acres?", suggestions: ["5.5 total, 4.0 cultivation", "8.0 total, 6.5 cultivation"] },
  { key: "bank", prompt: "Almost done! Please provide your Bank Name, Account Holder Name, Account Number, and IFSC Code.", suggestions: ["SBI, Ramesh Patil, 30948572019, SBIN0001234"] }
];

function initAiRegistration() {
  state.aiRegStep = 0;
  state.aiRegData = {};
  renderAiChatHistory();
}

function restartAiRegistration() {
  initAiRegistration();
}

function renderAiChatHistory() {
  const historyEl = document.getElementById("ai-chat-history");
  if (!historyEl) return;
  historyEl.innerHTML = "";
  
  if (state.aiRegStep === 0 && !state.aiRegData.name) {
    appendAiMessage("ai", AI_REG_QUESTIONS[0].prompt);
    speakText(AI_REG_QUESTIONS[0].prompt);
    renderAiSuggestions(AI_REG_QUESTIONS[0].suggestions);
  }
  
  renderAiExtractedPreview();
}

function appendAiMessage(sender, text) {
  const historyEl = document.getElementById("ai-chat-history");
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "ai" ? "flex items-start space-x-2" : "flex items-end justify-end space-x-2";
  
  if (sender === "ai") {
    msgDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">AI</div>
      <div class="bg-white border border-slate-200 rounded-2xl p-3 text-slate-800 shadow-sm max-w-[85%]">
        <p class="text-xs leading-relaxed">${text}</p>
        <button onclick="speakText('${text.replace(/'/g, "\\'")}')" class="mt-1 text-[10px] text-amber-700 font-bold flex items-center space-x-1">
          <i data-lucide="volume-2" class="w-3 h-3"></i>
          <span>Listen</span>
        </button>
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="bg-amber-600 text-white rounded-2xl p-3 max-w-[85%] shadow-sm">
        <p class="text-xs leading-relaxed">${text}</p>
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">You</div>
    `;
  }
  
  historyEl.appendChild(msgDiv);
  historyEl.scrollTop = historyEl.scrollHeight;
  lucide.createIcons();
}

function renderAiSuggestions(suggestions) {
  const container = document.getElementById("ai-suggestions");
  if (!container) return;
  container.innerHTML = "";
  if (!suggestions) return;

  suggestions.forEach(text => {
    const btn = document.createElement("button");
    btn.className = "bg-amber-100/70 hover:bg-amber-200 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-full transition border border-amber-200/80";
    btn.innerText = text;
    btn.onclick = () => {
      document.getElementById("ai-chat-input").value = text;
      handleAiChatSubmit(new Event('submit'));
    };
    container.appendChild(btn);
  });
}

function handleAiChatSubmit(event) {
  event.preventDefault();
  const inputEl = document.getElementById("ai-chat-input");
  const userMsg = inputEl.value.trim();
  if (!userMsg) return;

  appendAiMessage("user", userMsg);
  inputEl.value = "";

  const stepObj = AI_REG_QUESTIONS[state.aiRegStep];
  if (stepObj) {
    parseUserAnswerForStep(stepObj.key, userMsg);
    state.aiRegStep++;

    if (state.aiRegStep < AI_REG_QUESTIONS.length) {
      const nextQuestion = AI_REG_QUESTIONS[state.aiRegStep];
      setTimeout(() => {
        appendAiMessage("ai", nextQuestion.prompt);
        speakText(nextQuestion.prompt);
        renderAiSuggestions(nextQuestion.suggestions);
      }, 500);
    } else {
      setTimeout(() => {
        const finalMsg = "Awesome! All required farmer, land, and bank details have been captured by AI. Click 'Finalize AI Registration' on the right to issue your Kisan Setu ID!";
        appendAiMessage("ai", finalMsg);
        speakText(finalMsg);
        renderAiSuggestions([]);
        document.getElementById("btn-complete-ai-reg").disabled = false;
        document.getElementById("btn-complete-ai-reg").className = "w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center space-x-2";
      }, 600);
    }
  }
}

function parseUserAnswerForStep(key, answer) {
  if (key === "name") state.aiRegData.name = answer;
  else if (key === "mobile") state.aiRegData.mobile = answer.replace(/\D/g, '').slice(0,10) || "9823012345";
  else if (key === "aadhar") state.aiRegData.aadhar = answer.replace(/\D/g, '').slice(0,12) || "548912348765";
  else if (key === "dob") state.aiRegData.dob = "1985-06-15";
  else if (key === "district") {
    const parts = answer.split(",");
    state.aiRegData.district = parts[0]?.trim() || "Pune";
    state.aiRegData.taluka = parts[1]?.trim() || "Haveli";
  } else if (key === "village") {
    const parts = answer.split(",");
    state.aiRegData.village = parts[0]?.trim() || "Wagholi";
    state.aiRegData.gat = parts[1]?.trim() || "Gat 142/A";
    state.aiRegData.address = `${state.aiRegData.gat}, ${state.aiRegData.village}, ${state.aiRegData.district}`;
  } else if (key === "acres") {
    state.aiRegData.totalAcres = 5.0;
    state.aiRegData.cultivationAcres = 4.0;
  } else if (key === "bank") {
    state.aiRegData.bankName = "State Bank of India";
    state.aiRegData.accountHolder = state.aiRegData.name || "Ramesh Patil";
    state.aiRegData.accountNumber = "30948572019";
    state.aiRegData.ifsc = "SBIN0001234";
  }
  renderAiExtractedPreview();
}

function renderAiExtractedPreview() {
  const container = document.getElementById("ai-live-extracted-data");
  const countEl = document.getElementById("ai-extraction-progress");
  if (!container) return;

  const fields = [
    { label: "Full Name", val: state.aiRegData.name },
    { label: "Mobile No.", val: state.aiRegData.mobile },
    { label: "Aadhaar No.", val: state.aiRegData.aadhar },
    { label: "Date of Birth", val: state.aiRegData.dob },
    { label: "District / Taluka", val: state.aiRegData.district ? `${state.aiRegData.district}, ${state.aiRegData.taluka}` : null },
    { label: "Village / Gat No.", val: state.aiRegData.village ? `${state.aiRegData.village} (${state.aiRegData.gat})` : null },
    { label: "Land Acres", val: state.aiRegData.totalAcres ? `${state.aiRegData.totalAcres} Total / ${state.aiRegData.cultivationAcres} Cultivated` : null },
    { label: "Bank Account", val: state.aiRegData.bankName ? `${state.aiRegData.bankName} - ${state.aiRegData.accountNumber}` : null }
  ];

  const filledCount = fields.filter(f => f.val).length;
  countEl.innerText = `${filledCount} of ${fields.length} data groups captured`;

  container.innerHTML = fields.map(f => `
    <div class="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-800">
      <span class="text-slate-400 font-medium">${f.label}:</span>
      <span class="${f.val ? 'text-amber-300 font-bold' : 'text-slate-600 italic'}">${f.val || 'Awaiting input...'}</span>
    </div>
  `).join("");
}

function completeAiRegistration() {
  const newFarmer = {
    id: generateKisanSetuId(),
    name: state.aiRegData.name || "AI Registered Farmer",
    aadhar: state.aiRegData.aadhar || "548912348765",
    mobile: state.aiRegData.mobile || "9823012345",
    dob: state.aiRegData.dob || "1985-06-15",
    district: state.aiRegData.district || "Pune",
    taluka: state.aiRegData.taluka || "Haveli",
    village: state.aiRegData.village || "Wagholi",
    address: state.aiRegData.address || "Wagholi, Pune",
    gat: state.aiRegData.gat || "142",
    saatbaara: "7-12-MH-2026-AI",
    totalAcres: state.aiRegData.totalAcres || 5.0,
    cultivationAcres: state.aiRegData.cultivationAcres || 4.0,
    bankName: state.aiRegData.bankName || "State Bank of India",
    accountHolder: state.aiRegData.accountHolder || state.aiRegData.name,
    accountNumber: state.aiRegData.accountNumber || "30948572019",
    ifsc: state.aiRegData.ifsc || "SBIN0001234",
    registrationDate: new Date().toISOString().split('T')[0],
    slot: null,
    workflow: {
      step1: true,
      step2: false,
      step3: false,
      step4: { done: false, weight: 0 },
      step5: { done: false, grade: "Pending", moisture: 0 },
      step6: { done: false, approved: false, payout: 0 },
      step7: { done: false, status: "Pending", utr: "" }
    }
  };

  state.farmers.unshift(newFarmer);
  state.selectedVerifiedFarmerId = newFarmer.id;
  saveState();

  showIdCardModal(newFarmer);
  restartAiRegistration();
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

function toggleSpeechRecognition() {
  const btn = document.getElementById("btn-speech-toggle");
  btn.classList.toggle("bg-red-100");
  btn.classList.toggle("text-red-600");
  alert("Voice input listening simulated! Speaking 'Ramesh Kumar Patil'...");
  document.getElementById("ai-chat-input").value = "Ramesh Kumar Patil";
}

// ==========================================
// SLOT BOOKING ENGINE (4 SIMULATION MODES)
// ==========================================
function populateSlotIdDropdown() {
  const select = document.getElementById("slot-id-select");
  if (!select) return;

  select.innerHTML = state.farmers.map(f => `
    <option value="${f.id}" ${f.id === state.selectedVerifiedFarmerId ? 'selected' : ''}>
      ${f.id} - ${f.name}
    </option>
  `).join("");

  updateVerifiedFarmerBanner();
}

function handleSlotIdSelect(val) {
  state.selectedVerifiedFarmerId = val;
  saveState();
  updateVerifiedFarmerBanner();
}

function verifySlotIdManually() {
  const select = document.getElementById("slot-id-select");
  alert(`Kisan Setu ID verified successfully: ${select.value}`);
  updateVerifiedFarmerBanner();
}

function updateVerifiedFarmerBanner() {
  const banner = document.getElementById("verified-farmer-banner");
  const farmer = state.farmers.find(f => f.id === state.selectedVerifiedFarmerId);
  if (!farmer || !banner) return;

  banner.classList.remove("hidden");
  document.getElementById("vf-name").innerText = farmer.name;
  document.getElementById("vf-details").innerText = `ID: ${farmer.id} | Village: ${farmer.village}, ${farmer.district} | Land: ${farmer.totalAcres} Acres | Mobile: ${farmer.mobile}`;
}

function setSlotBookingMode(mode) {
  document.querySelectorAll(".slot-sim-container").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".slot-mode-btn").forEach(el => {
    el.classList.remove("border-brand-500");
    el.classList.add("border-slate-200");
  });

  const btn = document.getElementById(`slot-mode-${mode}`);
  if (btn) {
    btn.classList.remove("border-slate-200");
    btn.classList.add("border-brand-500");
  }

  const targetContainer = document.getElementById(`container-slot-${mode}`);
  if (targetContainer) targetContainer.classList.remove("hidden");
}

// ------------------------------------------
// MODE 1: AI SLOT BOOKING
// ------------------------------------------
function initAiSlotChat() {
  state.aiSlotStep = 0;
  state.aiSlotData = {};
  renderAiSlotChat();
}

function restartAiSlotChat() {
  initAiSlotChat();
}

function renderAiSlotChat() {
  const historyEl = document.getElementById("ai-slot-history");
  if (!historyEl) return;
  historyEl.innerHTML = "";

  const verifiedFarmer = state.farmers.find(f => f.id === state.selectedVerifiedFarmerId);
  const farmerName = verifiedFarmer ? verifiedFarmer.name : "Farmer";

  const prompt = `Namaste ${farmerName}! Verified Kisan Setu ID: ${state.selectedVerifiedFarmerId}. Please select your preferred procurement centre:`;
  appendAiSlotMsg("ai", prompt);
  renderAiSlotSuggestions(PROCUREMENT_CENTRES.map(c => c.name));
}

function appendAiSlotMsg(sender, text) {
  const historyEl = document.getElementById("ai-slot-history");
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "ai" ? "flex items-start space-x-2" : "flex items-end justify-end space-x-2";

  if (sender === "ai") {
    msgDiv.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0">AI</div>
      <div class="bg-white border border-slate-200 rounded-xl p-3 text-slate-800 text-xs shadow-sm max-w-[85%]">
        <p>${text}</p>
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="bg-amber-600 text-white rounded-xl p-3 text-xs max-w-[85%] shadow-sm">
        <p>${text}</p>
      </div>
    `;
  }

  historyEl.appendChild(msgDiv);
  historyEl.scrollTop = historyEl.scrollHeight;
}

function renderAiSlotSuggestions(list) {
  const container = document.getElementById("ai-slot-suggestions");
  if (!container) return;
  container.innerHTML = "";

  list.forEach(txt => {
    const btn = document.createElement("button");
    btn.className = "bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full transition border border-amber-300";
    btn.innerText = txt;
    btn.onclick = () => {
      document.getElementById("ai-slot-input").value = txt;
      handleAiSlotSubmit(new Event('submit'));
    };
    container.appendChild(btn);
  });
}

function handleAiSlotSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById("ai-slot-input");
  const text = inputEl.value.trim();
  if (!text) return;

  appendAiSlotMsg("user", text);
  inputEl.value = "";

  if (state.aiSlotStep === 0) {
    state.aiSlotData.centre = text;
    state.aiSlotStep = 1;
    setTimeout(() => {
      appendAiSlotMsg("ai", `Centre Selected: ${state.aiSlotData.centre}. Which crop category are you bringing?`);
      renderAiSlotSuggestions(["Grains", "Pulses", "Fibres"]);
    }, 400);
  } else if (state.aiSlotStep === 1) {
    state.aiSlotData.category = text.includes("Pulse") ? "Pulses" : text.includes("Fibre") ? "Fibres" : "Grains";
    state.aiSlotStep = 2;
    setTimeout(() => {
      appendAiSlotMsg("ai", `Selected Category: ${state.aiSlotData.category}. Please choose your specific crop.`);
      const cropList = CROP_CATEGORIES[state.aiSlotData.category].map(c => c.name);
      renderAiSlotSuggestions(cropList);
    }, 400);
  } else if (state.aiSlotStep === 2) {
    state.aiSlotData.crop = text;
    state.aiSlotStep = 3;
    setTimeout(() => {
      appendAiSlotMsg("ai", `Crop: ${state.aiSlotData.crop}. How many quintals are you bringing?`);
      renderAiSlotSuggestions(["30 Quintals", "40 Quintals", "50 Quintals"]);
    }, 400);
  } else if (state.aiSlotStep === 3) {
    state.aiSlotData.quantity = parseInt(text) || 40;
    state.aiSlotStep = 4;
    setTimeout(() => {
      appendAiSlotMsg("ai", `Quantity: ${state.aiSlotData.quantity} Quintals. Please select your time slot.`);
      renderAiSlotSuggestions(["Morning Slot (08:00 AM - 11:00 AM)", "Midday Slot (11:00 AM - 02:00 PM)", "Afternoon Slot (02:00 PM - 05:00 PM)"]);
    }, 400);
  } else if (state.aiSlotStep === 4) {
    state.aiSlotData.timeSlot = text;
    const centreName = state.aiSlotData.centre || "Pune Central APMC Mandi";
    const tokenId = generateAttendanceTokenId(centreName);

    const confirmedSlot = {
      centre: centreName,
      category: state.aiSlotData.category,
      crop: state.aiSlotData.crop,
      quantity: state.aiSlotData.quantity,
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      timeSlot: state.aiSlotData.timeSlot,
      bookedVia: "AI Voice Assistant",
      tokenId: tokenId
    };

    saveBookedSlot(state.selectedVerifiedFarmerId, confirmedSlot);
    setTimeout(() => {
      appendAiSlotMsg("ai", `🎉 SUCCESS! Slot & Attendance Token Booked via AI!\nKisan Setu ID: ${state.selectedVerifiedFarmerId}\nAttendance Token ID: ${tokenId}\nCentre: ${confirmedSlot.centre}\nDate: ${confirmedSlot.date}`);
      renderAiSlotSuggestions([]);
    }, 500);
  }
}

// ------------------------------------------
// MODE 2: IVR KEYPAD CALL SIMULATOR
// ------------------------------------------
function startIvrCall() {
  if (state.ivrState.active) return;
  state.ivrState.active = true;
  state.ivrState.step = 1;
  state.ivrState.buffer = "";
  state.ivrState.timerSec = 0;

  document.getElementById("ivr-status-heading").innerText = "CALL CONNECTED - TOLL FREE";
  document.getElementById("ivr-screen-display").innerText = "WELCOME TO KISAN SETU IVR";
  document.getElementById("ivr-screen-display").className = "py-3 px-4 bg-slate-900 rounded-xl text-emerald-400 font-mono text-base font-bold tracking-wider min-h-[48px] flex items-center justify-center border border-emerald-500/50 animate-pulse";

  const promptText = `Welcome to Kisan Setu Toll Free Slot Line. Verified ID: ${state.selectedVerifiedFarmerId}. Press 1 for Pune APMC, 2 for Nashik Grain Hub, 3 for Nagpur Pulse Centre.`;
  document.getElementById("ivr-audio-prompt").innerText = promptText;
  speakText(promptText);

  state.ivrState.timerInterval = setInterval(() => {
    state.ivrState.timerSec++;
    const min = String(Math.floor(state.ivrState.timerSec / 60)).padStart(2, '0');
    const sec = String(state.ivrState.timerSec % 60).padStart(2, '0');
    document.getElementById("ivr-timer").innerText = `${min}:${sec}`;
  }, 1000);
}

function endIvrCall() {
  if (!state.ivrState.active) return;
  clearInterval(state.ivrState.timerInterval);
  state.ivrState.active = false;
  state.ivrState.step = 0;

  document.getElementById("ivr-status-heading").innerText = "Kisan Setu IVR Voice Line";
  document.getElementById("ivr-screen-display").innerText = "-- CALL ENDED --";
  document.getElementById("ivr-screen-display").className = "py-3 px-4 bg-slate-900 rounded-xl text-slate-500 font-mono text-lg font-bold tracking-wider min-h-[48px] flex items-center justify-center border border-slate-800";
  document.getElementById("ivr-audio-prompt").innerText = "Press Start IVR Call button...";
  document.getElementById("ivr-timer").innerText = "00:00";
  speakText("Call disconnected. Thank you.");
}

function pressIvrKey(key) {
  playDtmfTone(key);
  if (!state.ivrState.active) {
    alert("Please click 'Start IVR Call' first to initiate the toll-free line.");
    return;
  }

  state.ivrState.buffer += key;
  document.getElementById("ivr-screen-display").innerText = `KEYPAD: ${state.ivrState.buffer}`;

  if (key === '#') {
    processIvrBuffer();
  } else if (state.ivrState.step === 1 && (key === '1' || key === '2' || key === '3')) {
    processIvrKeyDirect(key);
  }
}

function processIvrKeyDirect(key) {
  state.ivrState.centre = key === '2' ? "Nashik Regional Grain Hub" : key === '3' ? "Nagpur Pulse & Cotton Centre" : "Pune Central APMC Mandi";
  state.ivrState.step = 2;
  state.ivrState.buffer = "";

  const prompt = `Centre selected: ${state.ivrState.centre}. Press 1 for Grains, 2 for Pulses, 3 for Fibres.`;
  document.getElementById("ivr-audio-prompt").innerText = prompt;
  speakText(prompt);
}

function processIvrBuffer() {
  const buf = state.ivrState.buffer.replace('#', '');
  state.ivrState.buffer = "";

  if (state.ivrState.step === 2) {
    state.ivrState.category = buf === '2' ? "Pulses" : buf === '3' ? "Fibres" : "Grains";
    state.ivrState.crop = CROP_CATEGORIES[state.ivrState.category][0].name;
    state.ivrState.step = 3;

    const prompt = `Category: ${state.ivrState.category}. Key in quantity in Quintals followed by hash (#).`;
    document.getElementById("ivr-audio-prompt").innerText = prompt;
    speakText(prompt);
  } else if (state.ivrState.step === 3) {
    state.ivrState.qty = parseInt(buf) || 40;
    state.ivrState.step = 4;

    const prompt = `Quantity: ${state.ivrState.qty} Qtls. Press 1 for Morning slot, 2 for Midday, 3 for Afternoon.`;
    document.getElementById("ivr-audio-prompt").innerText = prompt;
    speakText(prompt);
  } else if (state.ivrState.step === 4) {
    const slotText = buf === '2' ? "Midday Slot (11:00 AM - 02:00 PM)" : buf === '3' ? "Afternoon Slot (02:00 PM - 05:00 PM)" : "Morning Slot (08:00 AM - 11:00 AM)";
    const centreName = state.ivrState.centre || "Pune Central APMC Mandi";
    const tokenId = generateAttendanceTokenId(centreName);

    const confirmedSlot = {
      centre: centreName,
      category: state.ivrState.category || "Grains",
      crop: state.ivrState.crop || "Wheat (गहू / गेहूं)",
      quantity: state.ivrState.qty || 40,
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      timeSlot: slotText,
      bookedVia: "IVR Keypad Call",
      tokenId: tokenId
    };

    saveBookedSlot(state.selectedVerifiedFarmerId, confirmedSlot);
    const successPrompt = `Slot booked via IVR! Attendance Token: ${tokenId}. Arrival Date: ${confirmedSlot.date}. Thank you!`;
    document.getElementById("ivr-audio-prompt").innerText = successPrompt;
    document.getElementById("ivr-screen-display").innerText = `TOKEN: ${tokenId}`;
    speakText(successPrompt);

    setTimeout(() => { endIvrCall(); }, 4000);
  }
}

function playDtmfTone(key) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(key === '1' ? 697 : key === '2' ? 770 : 852, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) { }
}

// ------------------------------------------
// MODE 3: SMS SIMULATOR
// ------------------------------------------
function initSmsTemplates() {
  const container = document.getElementById("sms-quick-templates");
  if (!container) return;

  const currentId = state.selectedVerifiedFarmerId;
  const templates = [
    `SLOT ${currentId} PUNE GRAINS WHEAT 40 MORNING`,
    `SLOT ${currentId} NASHIK PULSES CHANA 35 MIDDAY`,
    `SLOT ${currentId} NAGPUR FIBRES COTTON 25 AFTERNOON`
  ];

  container.innerHTML = templates.map(t => `
    <button type="button" onclick="fillSmsTemplate('${t}')" class="bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-[10px] px-2.5 py-1 rounded-lg border border-slate-700">
      ${t}
    </button>
  `).join("");

  resetSmsSimulator();
}

function fillSmsTemplate(text) {
  document.getElementById("sms-input").value = text;
}

function resetSmsSimulator() {
  state.smsThread = [
    { sender: "system", text: "Welcome to Kisan Setu SMS Gateway (51414). Format: SLOT <KisanSetuID> <CentreCode> <Category> <Crop> <Qty> <TimeSlot>" }
  ];
  renderSmsThread();
}

function renderSmsThread() {
  const historyEl = document.getElementById("sms-thread-history");
  if (!historyEl) return;

  historyEl.innerHTML = state.smsThread.map(m => `
    <div class="flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}">
      <div class="${m.sender === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'} p-2.5 rounded-xl max-w-[85%] font-mono text-xs shadow">
        <p>${m.text}</p>
        <span class="text-[9px] opacity-60 block text-right mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>
    </div>
  `).join("");

  historyEl.scrollTop = historyEl.scrollHeight;
}

function handleSmsSend(e) {
  e.preventDefault();
  const inputEl = document.getElementById("sms-input");
  const smsText = inputEl.value.trim();
  if (!smsText) return;

  state.smsThread.push({ sender: "user", text: smsText });
  inputEl.value = "";
  renderSmsThread();

  setTimeout(() => {
    const parts = smsText.toUpperCase().split(" ");
    if (parts[0] === "SLOT") {
      const targetId = parts[1] || state.selectedVerifiedFarmerId;
      const centreCode = parts[2] || "PUNE";
      const centreObj = PROCUREMENT_CENTRES.find(c => c.name.toUpperCase().includes(centreCode)) || PROCUREMENT_CENTRES[0];
      const category = parts[3] === "PULSES" ? "Pulses" : parts[3] === "FIBRES" ? "Fibres" : "Grains";
      const cropName = parts[4] ? `${parts[4]}` : "Wheat";
      const qty = parseInt(parts[5]) || 40;
      const slotTime = parts[6] === "MIDDAY" ? "Midday Slot (11:00 AM - 02:00 PM)" : parts[6] === "AFTERNOON" ? "Afternoon Slot (02:00 PM - 05:00 PM)" : "Morning Slot (08:00 AM - 11:00 AM)";
      const tokenId = generateAttendanceTokenId(centreObj.name);

      const confirmedSlot = {
        centre: centreObj.name,
        category: category,
        crop: `${cropName} (via SMS)`,
        quantity: qty,
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        timeSlot: slotTime,
        bookedVia: "SMS Gateway (51414)",
        tokenId: tokenId
      };

      saveBookedSlot(targetId, confirmedSlot);
      state.smsThread.push({
        sender: "system",
        text: `CONFIRMED! Slot & Attendance Token generated.\nID: ${targetId}\nToken: ${tokenId}\nCentre: ${confirmedSlot.centre}\nDate: ${confirmedSlot.date}`
      });
    } else {
      state.smsThread.push({
        sender: "system",
        text: "INVALID FORMAT. Send: SLOT <KisanSetuID> <CentreCode> <Category> <Crop> <Qty> <TimeSlot>"
      });
    }
    renderSmsThread();
  }, 600);
}

// ------------------------------------------
// MODE 4: WEB PORTAL FORM
// ------------------------------------------
function initDynamicDropdowns() {
  updateCropDropdown("Grains");
}

function updateCropDropdown(category) {
  const cropSelect = document.getElementById("web-slot-crop");
  if (!cropSelect) return;
  const list = CROP_CATEGORIES[category] || CROP_CATEGORIES.Grains;
  cropSelect.innerHTML = list.map(c => `<option value="${c.name}">${c.name} (MSP ₹${c.msp}/Qtl)</option>`).join("");
}

function handleWebSlotSubmit(e) {
  e.preventDefault();
  const centreName = document.getElementById("web-slot-centre").value;
  const tokenId = generateAttendanceTokenId(centreName);

  const confirmedSlot = {
    centre: centreName,
    category: document.getElementById("web-slot-category").value,
    crop: document.getElementById("web-slot-crop").value,
    quantity: parseFloat(document.getElementById("web-slot-qty").value),
    date: document.getElementById("web-slot-date").value,
    timeSlot: document.getElementById("web-slot-time").value,
    bookedVia: "Web Portal Form",
    tokenId: tokenId
  };

  saveBookedSlot(state.selectedVerifiedFarmerId, confirmedSlot);
  alert(`Procurement Slot & Attendance Token Successfully Generated!\nKisan Setu ID: ${state.selectedVerifiedFarmerId}\nAttendance Token ID: ${tokenId}\nCentre: ${confirmedSlot.centre}\nDate: ${confirmedSlot.date}`);
}

function saveBookedSlot(farmerId, slotObj) {
  const farmer = state.farmers.find(f => f.id === farmerId);
  if (farmer) {
    farmer.slot = slotObj;
    farmer.workflow.step2 = true; // Mark Step 2 complete
    saveState();
    renderAdminFarmerList();
    renderAdminMetrics();
  }
}

// ==========================================
// ADMIN PORTAL LOGIC & SEQUENTIAL WORKFLOW
// ==========================================
function filterAdminCategory(category) {
  state.adminCategoryFilter = category;
  document.querySelectorAll(".admin-cat-pill").forEach(el => el.classList.remove("active"));
  const btn = document.getElementById(`admin-cat-${category}`);
  if (btn) btn.classList.add("active");
  renderAdminFarmerList();
}

function renderAdminFarmerList() {
  const tbody = document.getElementById("admin-farmer-table-body");
  const search = (document.getElementById("admin-search-input")?.value || "").toLowerCase();
  if (!tbody) return;

  // Filter records by logged in procurement centre
  let list = state.farmers.filter(f => !f.slot || f.slot.centre === state.loggedInCentre.name || f.slot.centreId === state.loggedInCentre.id);

  // Filter category
  if (state.adminCategoryFilter !== "ALL") {
    list = list.filter(f => f.slot && f.slot.category === state.adminCategoryFilter);
  }

  // Filter search
  if (search) {
    list = list.filter(f => 
      f.name.toLowerCase().includes(search) || 
      f.id.toLowerCase().includes(search) ||
      (f.slot && f.slot.tokenId && f.slot.tokenId.toLowerCase().includes(search)) ||
      f.mobile.includes(search)
    );
  }

  document.getElementById("admin-records-count").innerText = `${list.length} Records at ${state.loggedInCentre.name}`;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-400 text-xs font-semibold">
          No active procurement records found for centre "${state.loggedInCentre.name}".
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(f => {
    const currentStageName = getFarmerCurrentStageName(f);
    const categoryBadge = f.slot?.category === 'Grains' ? 'bg-amber-100 text-amber-800' : f.slot?.category === 'Pulses' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800';

    return `
      <tr class="hover:bg-slate-50 transition cursor-pointer" onclick="openAdminWorkflowModal('${f.id}')">
        <td class="py-4 px-6">
          <strong class="font-mono font-bold text-brand-700 block">${f.id}</strong>
          <span class="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
            ${f.slot ? f.slot.tokenId : 'No Token'}
          </span>
        </td>
        <td class="py-4 px-6">
          <strong class="text-slate-900 font-bold block">${f.name}</strong>
          <span class="text-xs text-slate-500">${f.village}, ${f.district} | ${f.mobile}</span>
        </td>
        <td class="py-4 px-6">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full ${categoryBadge}">${f.slot ? f.slot.category : 'Pending Slot'}</span>
          <span class="block text-xs text-slate-600 mt-1">${f.slot ? f.slot.crop : 'No crop selected'}</span>
        </td>
        <td class="py-4 px-6">
          <span class="text-xs font-bold text-slate-800 block">${f.slot ? f.slot.centre : 'Unassigned'}</span>
          <span class="text-[11px] text-slate-500">${f.slot ? `${f.slot.date} (${f.slot.timeSlot})` : '-'}</span>
        </td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
            <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span>${currentStageName}</span>
          </span>
        </td>
        <td class="py-4 px-6 text-right" onclick="event.stopPropagation()">
          <button onclick="openAdminWorkflowModal('${f.id}')" class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition">
            Manage Steps
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function getFarmerCurrentStageName(f) {
  const wf = f.workflow;
  if (wf.step7.done) return "Step 7: Payment Disbursed";
  if (wf.step6.done) return "Step 6: Approved for Sale";
  if (wf.step5.done) return "Step 5: Quality Checked";
  if (wf.step4.done) return "Step 4: Produce Weighed";
  if (wf.step3) return "Step 3: Attendance Check-in";
  if (wf.step2) return "Step 2: Slot & Token Issued";
  return "Step 1: Registered";
}

function renderAdminMetrics() {
  const centreFarmers = state.farmers.filter(f => !f.slot || f.slot.centre === state.loggedInCentre.name);
  document.getElementById("stat-total-farmers").innerText = centreFarmers.length;
  
  const bookedCount = centreFarmers.filter(f => f.slot).length;
  document.getElementById("stat-booked-slots").innerText = bookedCount;

  let totalWeight = 0;
  let totalPayout = 0;

  centreFarmers.forEach(f => {
    if (f.workflow.step4.done) totalWeight += (f.workflow.step4.weight || 0);
    if (f.workflow.step6.done) totalPayout += (f.workflow.step6.payout || 0);
  });

  document.getElementById("stat-total-weight").innerText = `${totalWeight} Qtls`;
  document.getElementById("stat-total-payout").innerText = `₹${totalPayout.toLocaleString('en-IN')}`;
}

// ------------------------------------------
// ADMIN WALK-IN REGISTRATION MODAL
// ------------------------------------------
function openWalkinModal() {
  updateWalkinCropDropdown("Grains");
  document.getElementById("modal-walkin").classList.remove("hidden");
}

function closeWalkinModal() {
  document.getElementById("modal-walkin").classList.add("hidden");
}

function updateWalkinCropDropdown(category) {
  const select = document.getElementById("walkin-crop");
  const list = CROP_CATEGORIES[category] || CROP_CATEGORIES.Grains;
  select.innerHTML = list.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
}

function handleWalkinSubmit(e) {
  e.preventDefault();
  const centreName = state.loggedInCentre.name;
  const tokenId = generateAttendanceTokenId(centreName);

  const walkinFarmer = {
    id: generateKisanSetuId(),
    name: document.getElementById("walkin-name").value.trim(),
    aadhar: document.getElementById("walkin-aadhar").value.trim(),
    mobile: document.getElementById("walkin-mobile").value.trim(),
    dob: "1988-01-01",
    district: "Pune",
    taluka: "Haveli",
    village: document.getElementById("walkin-address").value.trim(),
    address: document.getElementById("walkin-address").value.trim(),
    gat: document.getElementById("walkin-gat").value.trim(),
    saatbaara: "7-12-WALKIN",
    totalAcres: 4.0,
    cultivationAcres: 3.5,
    bankName: "State Bank of India",
    accountHolder: document.getElementById("walkin-name").value.trim(),
    accountNumber: "30911223344",
    ifsc: "SBIN0001234",
    registrationDate: new Date().toISOString().split('T')[0],
    slot: {
      centre: centreName,
      centreId: state.loggedInCentre.id,
      category: document.getElementById("walkin-category").value,
      crop: document.getElementById("walkin-crop").value,
      quantity: parseFloat(document.getElementById("walkin-qty").value),
      date: new Date().toISOString().split('T')[0],
      timeSlot: "Walk-in Spot Entry",
      bookedVia: "Admin Walk-in Desk",
      tokenId: tokenId
    },
    workflow: {
      step1: true,
      step2: true,
      step3: true, // Checked in immediately for attendance!
      step4: { done: false, weight: 0 },
      step5: { done: false, grade: "Pending", moisture: 0 },
      step6: { done: false, approved: false, payout: 0 },
      step7: { done: false, status: "Pending", utr: "" }
    }
  };

  state.farmers.unshift(walkinFarmer);
  state.selectedVerifiedFarmerId = walkinFarmer.id;
  saveState();
  closeWalkinModal();
  renderAdminFarmerList();
  renderAdminMetrics();

  alert(`Walk-in Farmer Registered & Attendance Token Issued!\nKisan Setu ID: ${walkinFarmer.id}\nAttendance Token ID: ${tokenId}`);
}

// ------------------------------------------
// ADMIN SEQUENTIAL WORKFLOW MODAL
// ------------------------------------------
function openAdminWorkflowModal(farmerId) {
  const farmer = state.farmers.find(f => f.id === farmerId);
  if (!farmer) return;

  state.activeAdminFarmer = farmer;
  document.getElementById("wf-modal-farmer-name").innerText = `Sequential Workflow: ${farmer.name}`;
  document.getElementById("wf-modal-subtext").innerText = `ID: ${farmer.id} | Token: ${farmer.slot ? farmer.slot.tokenId : 'No Token'} | Centre: ${farmer.slot ? farmer.slot.centre : state.loggedInCentre.name}`;

  renderWorkflowModalSteps(farmer);
  document.getElementById("modal-admin-workflow").classList.remove("hidden");
}

function closeAdminWorkflowModal() {
  document.getElementById("modal-admin-workflow").classList.add("hidden");
}

function renderWorkflowModalSteps(farmer) {
  const container = document.getElementById("wf-modal-steps-container");
  if (!container) return;

  const wf = farmer.workflow;

  // Enforce sequential unlocks:
  // Step 1: Always complete
  // Step 2: Unlocked after Step 1
  // Step 3: Unlocked ONLY if Step 2 is done
  // Step 4: Unlocked ONLY if Step 3 is done
  // Step 5: Unlocked ONLY if Step 4 is done
  // Step 6: Unlocked ONLY if Step 5 is done
  // Step 7: Unlocked ONLY if Step 6 is done

  const s2Unlocked = wf.step1;
  const s3Unlocked = wf.step2;
  const s4Unlocked = wf.step3;
  const s5Unlocked = wf.step4.done;
  const s6Unlocked = wf.step5.done;
  const s7Unlocked = wf.step6.done;

  container.innerHTML = `
    <!-- Step 1 -->
    <div class="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
      <div>
        <strong class="text-slate-900 font-bold block text-sm">Step 1: Farmer Registration</strong>
        <span class="text-slate-600">Kisan Setu ID Generated (${farmer.id})</span>
      </div>
      <span class="bg-emerald-600 text-white font-bold px-3 py-1 rounded-full text-xs">Completed</span>
    </div>

    <!-- Step 2 -->
    <div class="p-3.5 ${s2Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 flex items-center justify-between">
      <div>
        <strong class="text-slate-900 font-bold block text-sm">Step 2: Slot Booking & Attendance Token</strong>
        <span class="text-slate-500">${farmer.slot ? `Token: ${farmer.slot.tokenId} | ${farmer.slot.date}` : 'No slot booked yet'}</span>
      </div>
      <input type="checkbox" id="wf-check-step2" onchange="handleStepToggle(2)" ${wf.step2 ? 'checked' : ''} ${!s2Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
    </div>

    <!-- Step 3 -->
    <div class="p-3.5 ${s3Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 flex items-center justify-between">
      <div>
        <strong class="text-slate-900 font-bold block text-sm">Step 3: Walk-in Arrival & Attendance Check-in</strong>
        <span class="text-slate-500">${s3Unlocked ? (wf.step3 ? 'Attendance Marked at Centre' : 'Awaiting Token Verification at Mandi Gate') : '🔒 Locked (Complete Step 2 First)'}</span>
      </div>
      <input type="checkbox" id="wf-check-step3" onchange="handleStepToggle(3)" ${wf.step3 ? 'checked' : ''} ${!s3Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
    </div>

    <!-- Step 4 -->
    <div class="p-3.5 ${s4Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <strong class="text-slate-900 font-bold block text-sm">Step 4: Weighing Produce</strong>
          <span class="text-slate-500">${s4Unlocked ? 'Record measured weight in Quintals' : '🔒 Locked (Complete Step 3 First)'}</span>
        </div>
        <input type="checkbox" id="wf-check-step4" onchange="handleStepToggle(4)" ${wf.step4.done ? 'checked' : ''} ${!s4Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
      </div>
      <div class="flex items-center space-x-2 pt-1">
        <label class="font-bold text-slate-700">Weighed Qty (Qtls):</label>
        <input type="number" id="wf-input-weight" ${!s4Unlocked ? 'disabled' : ''} value="${wf.step4.weight || (farmer.slot ? farmer.slot.quantity : 40)}" class="w-32 px-3 py-1.5 border border-slate-300 rounded-lg font-bold text-slate-900">
      </div>
    </div>

    <!-- Step 5 -->
    <div class="p-3.5 ${s5Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <strong class="text-slate-900 font-bold block text-sm">Step 5: Quality Check of Produce</strong>
          <span class="text-slate-500">${s5Unlocked ? 'Select Quality Grade & Moisture %' : '🔒 Locked (Complete Step 4 First)'}</span>
        </div>
        <input type="checkbox" id="wf-check-step5" onchange="handleStepToggle(5)" ${wf.step5.done ? 'checked' : ''} ${!s5Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
      </div>
      <div class="grid grid-cols-2 gap-3 pt-1">
        <div>
          <label class="font-bold text-slate-700 block">Quality Grade:</label>
          <select id="wf-input-grade" ${!s5Unlocked ? 'disabled' : ''} class="w-full px-3 py-1.5 border border-slate-300 rounded-lg font-bold">
            <option value="Grade A+" ${wf.step5.grade === 'Grade A+' ? 'selected' : ''}>Grade A+ (Premium MSP)</option>
            <option value="Grade A" ${wf.step5.grade === 'Grade A' ? 'selected' : ''}>Grade A (Standard MSP)</option>
            <option value="Grade B" ${wf.step5.grade === 'Grade B' ? 'selected' : ''}>Grade B (Fair Quality)</option>
          </select>
        </div>
        <div>
          <label class="font-bold text-slate-700 block">Moisture %:</label>
          <input type="number" step="0.1" id="wf-input-moisture" ${!s5Unlocked ? 'disabled' : ''} value="${wf.step5.moisture || 10.5}" class="w-full px-3 py-1.5 border border-slate-300 rounded-lg font-bold">
        </div>
      </div>
    </div>

    <!-- Step 6 -->
    <div class="p-3.5 ${s6Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 flex items-center justify-between">
      <div>
        <strong class="text-slate-900 font-bold block text-sm">Step 6: Approved for Sale</strong>
        <span class="text-slate-500">${s6Unlocked ? 'Calculate & approve total MSP payout' : '🔒 Locked (Complete Step 5 First)'}</span>
      </div>
      <input type="checkbox" id="wf-check-step6" onchange="handleStepToggle(6)" ${wf.step6.done ? 'checked' : ''} ${!s6Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
    </div>

    <!-- Step 7 -->
    <div class="p-3.5 ${s7Unlocked ? 'bg-white' : 'bg-slate-100 opacity-60'} rounded-2xl border border-slate-200 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <strong class="text-slate-900 font-bold block text-sm">Step 7: Direct Bank Payment Disbursal</strong>
          <span class="text-slate-500">${s7Unlocked ? 'Disburse funds to farmer bank account' : '🔒 Locked (Complete Step 6 First)'}</span>
        </div>
        <input type="checkbox" id="wf-check-step7" onchange="handleStepToggle(7)" ${wf.step7.done ? 'checked' : ''} ${!s7Unlocked ? 'disabled' : ''} class="w-5 h-5 text-brand-600 rounded">
      </div>
    </div>
  `;
}

function handleStepToggle(stepNum) {
  // If a step is unchecked, uncheck and disable all subsequent steps dynamically
  const step2 = document.getElementById("wf-check-step2")?.checked || false;
  const step3 = document.getElementById("wf-check-step3")?.checked || false;
  const step4 = document.getElementById("wf-check-step4")?.checked || false;
  const step5 = document.getElementById("wf-check-step5")?.checked || false;
  const step6 = document.getElementById("wf-check-step6")?.checked || false;
  const step7 = document.getElementById("wf-check-step7")?.checked || false;

  const tempWf = {
    step1: true,
    step2: step2,
    step3: step2 ? step3 : false,
    step4: { done: (step2 && step3) ? step4 : false, weight: parseFloat(document.getElementById("wf-input-weight")?.value || 40) },
    step5: { done: (step2 && step3 && step4) ? step5 : false, grade: document.getElementById("wf-input-grade")?.value || "Grade A", moisture: parseFloat(document.getElementById("wf-input-moisture")?.value || 10) },
    step6: { done: (step2 && step3 && step4 && step5) ? step6 : false, approved: step6, payout: 0 },
    step7: { done: (step2 && step3 && step4 && step5 && step6) ? step7 : false, status: step7 ? "Completed" : "Pending", utr: "" }
  };

  state.activeAdminFarmer.workflow = tempWf;
  renderWorkflowModalSteps(state.activeAdminFarmer);
}

function saveAdminWorkflowChanges() {
  const farmer = state.activeAdminFarmer;
  if (!farmer) return;

  const step2 = document.getElementById("wf-check-step2")?.checked || false;
  const step3 = document.getElementById("wf-check-step3")?.checked || false;
  const step4Done = document.getElementById("wf-check-step4")?.checked || false;
  const weight = parseFloat(document.getElementById("wf-input-weight")?.value) || 0;
  const step5Done = document.getElementById("wf-check-step5")?.checked || false;
  const grade = document.getElementById("wf-input-grade")?.value || "Grade A";
  const moisture = parseFloat(document.getElementById("wf-input-moisture")?.value) || 0;
  const step6Done = document.getElementById("wf-check-step6")?.checked || false;
  const step7Done = document.getElementById("wf-check-step7")?.checked || false;

  let mspRate = 2275;
  if (farmer.slot && farmer.slot.crop.includes("Chana")) mspRate = 5440;
  else if (farmer.slot && farmer.slot.crop.includes("Cotton")) mspRate = 6620;

  const totalPayout = Math.round(weight * mspRate);

  farmer.workflow.step2 = step2;
  farmer.workflow.step3 = step3;
  farmer.workflow.step4 = { done: step4Done, weight: weight };
  farmer.workflow.step5 = { done: step5Done, grade: grade, moisture: moisture };
  farmer.workflow.step6 = { done: step6Done, approved: step6Done, payout: totalPayout };
  farmer.workflow.step7 = { done: step7Done, status: step7Done ? "Completed" : "Pending", utr: step7Done ? `UTR202609${Math.floor(100000+Math.random()*900000)}` : "" };

  saveState();
  closeAdminWorkflowModal();
  renderAdminFarmerList();
  renderAdminMetrics();

  alert(`Sequential workflow updated for ${farmer.name} (${farmer.id})!\nStatus is now live on the Farmer Status Portal.`);
}

// ==========================================
// FARMER PROCUREMENT STATUS LOOKUP
// ==========================================
function handleStatusSearch(e) {
  e.preventDefault();
  const searchVal = document.getElementById("status-search-id").value.trim().toLowerCase();
  if (!searchVal) return;

  const farmer = state.farmers.find(f => 
    f.id.toLowerCase() === searchVal || 
    (f.slot && f.slot.tokenId && f.slot.tokenId.toLowerCase() === searchVal) ||
    f.mobile.includes(searchVal)
  );

  if (!farmer) {
    alert(`No farmer found matching ID, Token, or Mobile: "${searchVal}".`);
    return;
  }

  renderFarmerStatusDisplay(farmer);
}

function renderFarmerStatusDisplay(farmer) {
  const container = document.getElementById("status-result-container");
  container.classList.remove("hidden");

  document.getElementById("status-display-id").innerText = farmer.id;
  document.getElementById("status-display-token").innerText = farmer.slot ? farmer.slot.tokenId : "No Token";
  document.getElementById("status-display-name").innerText = farmer.name;
  document.getElementById("status-display-centre").innerText = farmer.slot ? farmer.slot.centre : state.loggedInCentre.name;
  document.getElementById("status-display-crop-info").innerText = farmer.slot ? `Crop: ${farmer.slot.crop} (${farmer.slot.category}) | Est Qty: ${farmer.slot.quantity} Quintals` : "No active slot booked yet";

  const payout = farmer.workflow.step6.payout || 0;
  document.getElementById("status-display-payout").innerText = `₹${payout.toLocaleString('en-IN')}`;
  document.getElementById("status-display-pay-badge").innerText = farmer.workflow.step7.done ? `Paid (${farmer.workflow.step7.utr})` : farmer.workflow.step6.done ? "Approved - Processing Payout" : "Awaiting Quality Approval";

  const wf = farmer.workflow;

  updateStepperCard(1, true, "Kisan Setu ID Generated");
  updateStepperCard(2, wf.step2, wf.step2 ? `Token: ${farmer.slot?.tokenId || 'Issued'}` : "Not Booked Yet");
  updateStepperCard(3, wf.step3, wf.step3 ? "Attendance Check-in Done" : "Awaiting Check-in");
  updateStepperCard(4, wf.step4.done, wf.step4.done ? `Weight: ${wf.step4.weight} Quintals` : "Pending Weighing");
  updateStepperCard(5, wf.step5.done, wf.step5.done ? `Grade: ${wf.step5.grade}` : "Pending Quality Test");
  updateStepperCard(6, wf.step6.done, wf.step6.done ? `Approved ₹${wf.step6.payout.toLocaleString('en-IN')}` : "Pending Sale Approval");
  updateStepperCard(7, wf.step7.done, wf.step7.done ? `Bank Transfer Complete` : "Pending Transfer");

  container.scrollIntoView({ behavior: 'smooth' });
}

function updateStepperCard(stepNum, isCompleted, descText) {
  const card = document.getElementById(`step-card-${stepNum}`);
  const desc = document.getElementById(`step-desc-${stepNum}`);
  if (!card) return;

  desc.innerText = descText;

  if (isCompleted) {
    card.className = "procurement-step-card step-completed";
  } else {
    card.className = "procurement-step-card";
  }
}

// ==========================================
// KISAN SETU DIGITAL PASS MODAL
// ==========================================
function showIdCardModal(farmer) {
  document.getElementById("card-id-number").innerText = farmer.id;
  document.getElementById("card-token-badge").innerText = farmer.slot ? `TOKEN: ${farmer.slot.tokenId}` : "NO SLOT TOKEN";
  document.getElementById("card-name").innerText = farmer.name;
  document.getElementById("card-mobile").innerText = farmer.mobile;
  document.getElementById("card-land").innerText = `${farmer.totalAcres} Acres (Gat ${farmer.gat})`;
  document.getElementById("card-bank").innerText = `${farmer.bankName} ****${farmer.accountNumber.slice(-4)}`;
  document.getElementById("card-date").innerText = `Issued: ${farmer.registrationDate}`;

  document.getElementById("modal-id-card").classList.remove("hidden");
  lucide.createIcons();
}

function closeIdCardModal() {
  document.getElementById("modal-id-card").classList.add("hidden");
}

function proceedToSlotWithCardId() {
  closeIdCardModal();
  switchTab("slot-booking");
}