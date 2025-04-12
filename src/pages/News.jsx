import React from "react";
import { NavLink } from "react-router-dom";
import HelpingPage from "./HelpingPage";

const News = () => {
	const pageInfo = {
		pageHeading: "News And Events",
		pageName: "News",
		path: "/news",
	};

	return (
		<div>
			<HelpingPage pageInfo={pageInfo} />

			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold mb-2">
					News And&nbsp;<span className="text-[#f1992d]">Events</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className=" mx-[4rem] flex flex-col md:gap-20 my-10">
				<div>
					<div className="">
						<img src="/Images/meetingnews.jpg" alt="" />
					</div>
					<div className="flex flex-col">
						<h1 className="text-3xl font-semibold my-5">
							विद्यालय के उन्नयन हेतु आधारभूत बिंदुओं पर परिचर्चा का आयोजन।
						</h1>
						<p className="text-sm text-gray-600">
							राष्ट्र-निर्माण की अहम जिम्मेदारी आचार्य की होती है। आचार्य को
							राष्ट्र के साथ-साथ विद्यालय के उन्नयन हेतु विभिन्न बिंदुओं को
							ध्यान में रखते हुए नवाचार के साथ अपने आचार्यत्व के धर्म को निभाना
							चाहिए।" उक्त विचार विद्या भारती पश्चिमी उत्तर प्रदेश मेरठ संभाग के
							संभाग निरीक्षक हरिओम गणपति सहस्त्रबुद्धे ने लाला जगदीश प्रसाद
							सरस्वती विद्या मंदिर इंटर कॉलेज में आयोजित विद्यालय के उन्नयन हेतु
							आधारभूत बिंदुओं पर परिचर्चा के दौरान व्यक्त किए। कार्यक्रम का
							शुभारंभ मुख्य अतिथि विद्या भारती पश्चिमी उत्तर प्रदेश मेरठ संभाग
							के संभाग निरीक्षक हरिओम गणपति सहस्त्रबुद्धे एवं विद्यालय
							प्रधानाचार्य सतीश उपाध्याय द्वारा संयुक्त रूप से माँ शारदे के
							सम्मुख दीप प्रज्ज्वलित कर किया गया। तदोपरांत प्रधानाचार्य सतीश
							उपाध्याय ने मुख्य अतिथि का माल्यार्पण कर एवं अंगवस्त्र पहनाकर
							स्वागत किया। अपने उदबोधन में मुख्य अतिथि संभाग निरीक्षक हरिओम
							गणपति सहस्त्रबुद्धे ने कहा कि हमें प्रकृति में सभी जीव-जंतुओं का
							सहयोग करना आना चाहिए। सभी की अपनी अलग-अलग क्षमता होती है। अपनी
							योग्यता एवं सामर्थ्य के अनुसार ही हमें अपने कार्यों को अंजाम देना
							चाहिए। उन्होंने उपस्थित आचार्यों से विद्यालय उन्नयन हेतु आधारभूत
							बिंदुओं पर परिचर्चा करते हुए कहा कि शिक्षा का उद्देश्य सम्पूर्ण
							जीवन की संवेदनाओं को विकसित करना होता है। हमारे शिक्षण का छात्र के
							जीवन पर क्या प्रभाव पड़ा? इस बात को ध्यान में रखकर हमें छात्रों के
							अंदर रुचि पैदा करते हुए शिक्षण कार्य करना चाहिए। विद्यालय के
							उन्नयन हेतु छात्रों के साथ-साथ आचार्यों को भी अपग्रेड रहना आवश्यक
							होता है। अतः सभी आचार्य अपने आप को अपग्रेड रखना चाहिए। इस परिचर्चा
							में विद्यालय आचार्य महेश चौहान, मोतीराम सैनी, दिनेश कुमार, विशाल
							शर्मा, नीलम शर्मा, डॉ वंदना शर्मा, विजया शर्मा आदि ने विद्यालय
							उन्नयन हेतु अपने-अपने विचार प्रस्तुत किए।अंत में उन्होंने सभी
							आचार्यो से बचत की आदत डालने की भी अपील की, ताकि उनका भविष्य
							सुरक्षित हो सके। इसके लिए उन्होंने आवर्ती जमा योजना, मेडिकल
							पॉलिसी, सामूहिक बीमा आदि जैसी व्यवस्थाओं को अपनाने की अपील की।
							कार्यक्रम के अंत में प्रधानाचार्य सतीश उपाध्याय ने आगन्तुक मुख्य
							अतिथि का आभार व्यक्त किया एवं समस्त आचार्यो से उनके द्वारा बताए गए
							बिंदुओं को अपनाकर विद्यालय उन्नति में पूर्ण सहयोग करने की अपील की।
							इस परिचर्चा में विद्यालय आचार्य महेश चौहान, प्रयाग सिंह, अमित
							शर्मा, दिनेश कुमार, विशाल शर्मा, सतीश कुमार, प्रविंद्र सिंह, पंकज
							त्यागी, सुखबीर वत्स, मनोज गर्ग, राजकमल वर्मा, सुधीर कुमार, मोतीराम
							सैनी, नवनीत कुमार, विजया शर्मा, नीलम शर्मा, डॉ वंदना शर्मा, रीता
							मावी, सरिता चौधरी, प्रभा गर्ग, ममता शर्मा, उषाकिरण आदि उपस्थित
							रहे।
						</p>
					</div>
				</div>

				<div className="flex flex-col">
					<div>
						<img src="/Images/janamastminews.jpg" alt="" />
					</div>
					<div>
						<h1 className="text-3xl font-semibold my-5">
							विद्यालय में श्री कृष्ण जन्माष्टमी पर्व मनाया गया।
						</h1>
						<p className="text-sm text-gray-600">
							जानसठ रोड स्थित लाला जगदीश प्रसाद सरस्वती विद्या मंदिर इंटर कॉलेज
							में श्री कृष्ण जन्माष्टमी पर्व बड़े हर्षोल्लास के साथ मनाया गया।
							कार्यक्रम का शुभारंभ प्रधानाचार्य सतीश उपाध्याय ने राधा-कृष्ण के
							चित्र के सम्मुख दीप प्रज्ज्वलन के साथ किया। उन्होंने उद्धव-प्रसंग
							के माध्यम से भगवान श्री कृष्ण जी की महिमा का गुणगान किया। उन्होंने
							कहा कि जिस प्रकार गोपियों ने अपना सर्वस्व न्यौछावर करते हुए श्री
							कृष्ण जी के प्रति अपने असीम प्रेम भाव का प्रदर्शन किया था, उसी
							प्रकार हमें भी भगवान के प्रेम में डूब जाना चाहिए। आज प्रेम को
							स्वार्थ की चाशनी में घोल दिया गया है। प्रेम जीवन का आधार है, जो
							जीवन को सुगम बनाता है। हमें अपने आप को भगवान श्री कृष्ण के चरणों
							में समर्पित कर देना चाहिए। उन्होंने समस्त आचार्यों से भगवान श्री
							कृष्ण द्वारा दिए गए गीता के उपदेशों का अनुसरण करते हुए अपने
							कर्तव्य मार्ग पर सदैव डटे रहने का आवाहन किया। अंत में प्रधानाचार्य
							सतीश उपाध्याय ने समस्त विद्यालय परिवार को श्री कृष्ण जन्माष्टमी की
							शुभकामनाएं प्रदान की। इस अवसर पर मुख्य वक्ता संगीत आचार्या जूली
							नामदेव ने कहा कि श्री कृष्ण जन्माष्टमी भगवान विष्णु जी के पूर्ण
							अवतार श्री कृष्ण जी के जन्म दिवस के उपलक्ष में मनाया जाने वाला
							त्यौहार है। उन्होंने बताया कि भगवान श्री कृष्ण का जन्म द्वापर युग
							के भाद्रपद मास में कृष्ण पक्ष की अष्टमी को रोहिणी नक्षत्र में हुआ
							था। भगवान श्री कृष्ण के जीवन की विभिन्न लीलाओं का सुंदर ढंग से
							वर्णन करते हुए उन्होंने कहा कि भगवान श्रीकृष्ण ने अधर्मियों का
							विनाश कर धर्म की रक्षा की थी। इन्होंने बाल्यकाल से ही अनेक असुरों
							का संहार किया और अपने अधर्मी मामा कंस का वध करके धर्म की स्थापना
							की। महाभारत के युद्ध में उन्होंने अर्जुन को कर्तव्य बोध कराते हुए
							गीता का उपदेश दिया। इस अवसर आचार्या जुली नामदेव ने एक बड़ा सुंदर
							भजन प्रस्तुत कर सभी को मंत्रमुग्ध कर दिया। इसके अलावा हिंदी आचार्य
							राजीव शर्मा ने भी भगवान श्री कृष्ण का भजन प्रस्तुत कर सभी को भक्ति
							रस से सराबोर कर दिया। इस अवसर पर विद्यालय आचार्य महेश चौहान,
							कुंवरपाल सिंह, उमेश सारस्वत, धनप्रकाश वर्मा, सुखबीर वत्स, विवेक
							शर्मा, अर्जुन सिंह, देवेंद्र वर्मा, अमित शर्मा, विशाल शर्मा, पंकज
							त्यागी, मनोज गर्ग, पवन चंदेल, नीलम शर्मा, डॉ वंदना शर्मा, सरिता
							चौधरी, प्रभा गर्ग, उषा किरण आदि उपस्थित रहे।
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
