/*
 Navicat Premium Data Transfer

 Source Server         : [PROD]KMSJAMUMEDICINE
 Source Server Type    : MongoDB
 Source Server Version : 30608 (3.6.8)
 Source Host           : localhost:27017
 Source Schema         : kmsjamu

 Target Server Type    : MongoDB
 Target Server Version : 30608 (3.6.8)
 File Encoding         : 65001

 Date: 27/05/2023 09:03:04
*/


// ----------------------------
// Collection structure for dclasses
// ----------------------------
db.getCollection("dclasses").drop();
db.createCollection("dclasses");
db.getCollection("dclasses").createIndex({
    idclass: NumberInt("1")
}, {
    name: "idclass_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of dclasses
// ----------------------------
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead6b"),
    idclass: "0",
    class: "Unclassified",
    description: "-",
    diseases: "-",
    ref: "-",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead6f"),
    idclass: "4",
    class: "Ear, Nose, and Throat",
    description: "Within the structures of the ear, nose and throat are complex and interrelated mechanisms that allow a person to make sound, hear, maintain balance, smell, breathe, and swallow. Traditionally, treatment of the ear — otology — was associated with that of the eye in medical practice. With the development of laryngology — the study of the throat — in the late 19th century, the connection between the ear and throat became known. Thus the birth of a discipline called otolaryngology.\\n                    \\nMany people associate otolaryngologists with the treatment of ear infections, hearing loss and sinus problems. Otolaryngology actually encompasses the treatment of many diverse conditions, including: dizziness, facial plastic and reconstructive surgery, head and neck cancer, hearing loss, problems of the larynx and sinus, difficulties swallowing, tumors of the auditory nerve, and voice production. When diagnosing ear, nose, and throat disorders, it is important to differentiate genetic disorders from those due to environmental influences. This is often difficult as similar clinical features may be produced by different environmental factors or by different genes or groups of genes.",
    diseases: "Deafness, Neurofibromatosis, and Pendred syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead70"),
    idclass: "5",
    class: "Diseases of the Eye",
    description: "The function of our eyes is to allow us to see the objects in our surroundings at variable distances and under various conditions of lights. This function is achieved by a very complex arrangement of layers and structures found in the eye. In addition, two pockets of transparent fluid — the aqueous and vitreous humors — nourish eye tissues and help maintain constant eye shape. The eye is comprised of three layers: an outer protective white coating called the sclera; a middle layer (choroid) containing blood vessels which nourish the eye; and an inner layer (retina) which contains the nerves that bear information to the brain for processing. The cornea is the clear portion found at the front of the eye and serves to bend light rays. The iris, an extension of the choroid, is the colored portion of the eye and is made up of a spongy tissue. The pupil (black) is an opening in the iris that allows light into the eye. The lens then helps focus the light rays onto photoreceptors, which absorb and convert the light into electrical signals that carry information. The optic nerve contains fibers that transmit these signals to the brain for interpretation of the objects seen. With the recent advances in molecular genetic techniques, new genes that cause eye disease are rapidly being identified, such as for those diseases discussed here. In many instances, these findings allow researchers to develop innovative strategies for preventing or slowing the progress of genetic eye diseases.",
    diseases: "Best disease, Glaucoma, Gyrate atrophy of the choroid and retina, and Retinoblastoma.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead71"),
    idclass: "6",
    class: "Female-Specific Diseases",
    description: "Biomedical research has demonstrated biological differences between females and males in virtually every organ and system of the body. Research has also revealed the genetic and molecular basis of a number of gender-based differences in health and disease, some of which are related to genotype — XX in the female and XY in the male. These findings suggest that there are multiple differences in the basic cellular biochemistry of males and females that can affect an individual's health. Many of these differences do not arise from differences in the hormonal regime to which males and females are exposed, but are a direct result of the genetic differences between the two sexes. Further studies on the relative roles of the sex chromosome genes is likely to illuminate the reasons for expression of some diseases within and between the sexes. Understanding the bases of these gender-based differences is also important for the development of new approaches to disease prevention, diagnosis, and treatment.",
    diseases: "Breast and ovarian cancer, and Rett syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead6c"),
    idclass: "1",
    class: "Blood and Lymph Diseases",
    description: "As most of the cells in the human body are not in direct contact with the external environment, the circulatory system acts as a transport system for these cells. Two distinct fluids move through the circulatory system: blood and lymph. Blood carries oxygen and nutrients to the body's cells, and carries waste materials away. Blood also carries hormones, which control body processes, and antibodies, to fight invading germs. The heart is the pump that keeps this transport system moving. Together, the blood, heart, and blood vessels form the circulatory system. The lymphatic system (lymph, lymph nodes and lymph vessels) supports the circulatory system by draining excess fluids and proteins from tissues back into the bloodstream, thereby preventing tissue swelling. It also serves as a defense system for the body, filtering out organisms that cause disease, producing white blood cells, and generating antibodies. The biochemical make up of lymph — the fluid found in the lymphatic vessels — varies with the site of origin. For example, lymph from bone marrow, spleen, and thymus have high concentrations of white blood cells for fighting infection, while lymph from intestines is high in fat that has been absorbed during digestion. Damage to the lymphatic and circulatory systems leaves the body more susceptible to sickness and infection, as well as to serious conditions such as cancer.",
    diseases: "Anemia (sickle cell), Burkitt lymphoma, Gaucher disease, Hemophilia A, Leukemia, chronic myeloid, Niemann-Pick disease, Paroxysmal nocturnal hemoglobinuria, Porphyria, and Thalassemia.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead6d"),
    idclass: "2",
    class: "Cancers",
    description: "Cancer occurs when cell division gets out of control. Usually, the timing of cell division is under strict constraint, involving a network of signals that work together to say when a cell can divide, how often it should happen and how errors can be fixed. Mutations in one or more of the nodes in this network can trigger cancer, be it through exposure to some environmental factor (e.g. tobacco smoke) or because of a genetic predisposition, or both. Usually, several cancer-promoting factors have to add up before a person will develop a malignant growth: with some exceptions, no one risk alone is sufficient. The predominant mechanisms for the cancers featured here are (i) impairment of a DNA repair pathway (ii) the transformation of a normal gene into an oncogene and (iii) the malfunction of a tumor supressor gene.",
    diseases: "Breast and ovarian cancer, Burkitt lymphoma, Colon cancer, Leukemia, chronic myeloid, Lung carcinoma, small cell, Malignant melanoma, Multiple endocrine neoplasia, Neurofibromatosis, The p53 tumor suppressor protein, Pancreatic cancer, Polycystic kidney disease, Prostate cancer, Harvey Ras oncogene, Retinoblastoma, Tuberous sclerosis, and Von Hippel-Lindau syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead72"),
    idclass: "7",
    class: "Glands and Hormones",
    description: "The endocrine system is a complex collection of hormone-producing glands that control basic body functions such as metabolism, growth and sexual development. The endocrine glands consist of: pineal; pituitary; thyroid and parathyroids; thymus; adrenals; pancreas; ovaries (female); and testes (male). Hormones are the chemical signaling molecules produced by the endocrine glands and secreted directly into the bloodstream. They travel through the blood to distant tissues and organs, where they can bind to specific cell sites called receptors. By binding to receptors, hormones trigger various responses in the tissues containing the receptors. In addition to the classical endocrine organs, many other cells in the body secrete hormones. Myocytes in the atria of the heart and scattered epithelial cells in the stomach and small intestine are examples of what is sometimes called the 'diffuse' endocrine system. If the term hormone is defined broadly to include all secreted chemical messengers, then virtually all cells can be considered part of the endocrine system. Advances in molecular genetics have led to a greatly strengthened understanding of the mechanisms of certain of the hereditary endocrine disorders. This section of genes and disease focuses on disorders for which the primary gene defect has been characterized or recently identified.",
    diseases: "Adrenal hyperplasia (congenital), Adrenoleukodystrophy, Autoimmune polyglandular syndrome, Breast and ovarian cancer, Cockayne syndrome, Diabetes (type 1), Diastrophic dysplasia, Multiple endocrine neoplasia, and Pendred syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead73"),
    idclass: "8",
    class: "The Heart and Blood Vessels",
    description: "Oxygen is vital to life as it provides fuel for all the body's functions. The heart's role is to pump oxygen-rich blood to every cell in the body. The blood vessels — a network of interconnecting arteries, arterioles, capillaries, venules, and veins — provide the pathway in which blood travels. Arteries are the passageways through which the blood is delivered, the largest of which is the aorta. The aorta branches off the heart and divides into many smaller arteries, which have muscular walls that adjust their diameter to increase or decrease blood flow to a particular body area. Capillaries are thin walled, highly branched vessels that feed the tissues and collect wastes to be carried back to the lungs, liver, or kidney for elimination. Capillaries empty into the venules, which in turn drain into the veins that lead back to the heart. Veins carry deoxygenated blood to the lungs to pick up more oxygen, and then back to the heart once again. The four most common types of vascular disease are high blood pressure, coronary heart disease, stroke, and rheumatic heart disease. Other forms include arrhythmias, diseases of the arteries, arterioles and capillaries, congenital defects, valvular heart disease, diseases of pulmonary circulation; and diseases of veins and lymphatics. Some of these disorders are the result of the over production of blood vessel cells, while others occur from vascular malformations. Still others result from inflammation of the blood vessels or the build up of a fatty substance called plaque within the blood vessels.",
    diseases: "Ataxia telangiectasia, Atherosclerosis, Long QT syndrome, Von Hippel-Lindau syndrome, and Williams syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead74"),
    idclass: "9",
    class: "Diseases of the Immune System",
    description: "The immune system is a complex and highly developed system, yet its mission is simple: to seek and kill invaders. If a person is born with a severely defective immune system, death from infection by a virus, bacterium, fungus or parasite will occur. In severe combined immunodeficiency, lack of an enzyme means that toxic waste builds up inside immune system cells, killing them and thus devastating the immune system. A lack of immune system cells is also the basis for DiGeorge syndrome: improper development of the thymus gland means that T cell production is diminished. Most other immune disorders result from either an excessive immune response or an 'autoimmune attack'. Asthma, familial Mediterranean fever and Crohn's disease (inflammatory bowel disease) all result from an over-reaction of the immune system, while autoimmune polyglandular syndrome and some facets of diabetes are due to the immune system attacking 'self' cells and molecules. A key part of the immune system's role is to differentiate between invaders and the body's own cells - when it fails to make this distinction, a reaction against 'self' cells and molecules causes autoimmune disease.",
    diseases: "Asthma, Ataxia telangiectasia, Autoimmune polyglandular syndrome, Burkitt lymphoma, Diabetes (type 1), DiGeorge syndrome, Familial Mediterranean fever, Immunodeficiency with hyper-IgM, Leukemia, chronic myeloid, and Severe combined immunodeficiency.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead75"),
    idclass: "10",
    class: "Male-Specific Diseases",
    description: "What kind of biological mechanisms lie behind the formation of the different genders? Some scientists now conclude that cells from male and female organisms differ in ways that result from chromosomes, not hormones, and believe that every organ in the body — not just those related to reproduction — has the capability to respond differently on the basis of sex. For example, unique or gender-specific features of human biology have been found in skin, bone, heart and brain, to name just a few. In addition, many diseases are expressed differently in men and women. Researchers are working to identify and understand differences related to the cause, prevention, treatment and impact of diseases and conditions which primarily affect men or women, or which affect men and women differently — with particular emphasis on gender and sex as key variables. Such differences can have a significant impact on the prevention, diagnosis and treatment of disease in both sexes.",
    diseases: "Alport syndrome, Male pattern baldness, Prostate cancer, and SRY: Sex determination.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead76"),
    idclass: "11",
    class: "Muscle and Bone",
    description: "The skeleton provides an anchor point against which muscles, attached via tendons, can exert force. There are a number of diseases that are caused by defects in genes important for the formation and function of muscles, and connective tissues. (Connective tissue is a broad term that includes bones, cartilage and tendons.) Defects in fibrillin - a connective tissue proteins that is important in making the tissue strong yet flexible - cause Marfan syndrome, while diastrophic dysplasia is caused by a defect in a sulfate transporter found in cartilage. Two diseases that originate through a defect in the muscle cells themselves are Duchenne muscular dystrophy (DMD) and myotonic dystrophy (DM). DM is another 'dynamic mutation' disease, similar to Huntington disease, that involves the expansion of a nucleotide repeat, this time in a muscle protein kinase gene. DMD involves a defect in the cytoskeletal protein, dystrophin, which is important for maintaining cell structure. While the gene for Ellis-van Creveld syndrome has been mapped, we await the function of the protein to understand the molecular basis for this disease.",
    diseases: "Achondroplasia, Amyotrophic lateral sclerosis, Charcot-Marie-Tooth syndrome, Cockayne syndrome, Diastrophic dysplasia, Duchenne muscular dystrophy, Ellis-van Creveld syndrome, Fibrodysplasia ossificans progressiva, Marfan syndrome, and Myotonic dystrophy.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead78"),
    idclass: "13",
    class: "The Nervous System",
    description: "The brain and nervous system form an intricate network of electrical signals that are responsible for coordinating muscles, the senses, speech, memories, thought and emotion. Several diseases that directly affect the nervous system have a genetic component: some are due to a mutation in a single gene, others are proving to have a more complex mode of inheritance. As our understanding of the pathogenesis of neurodegenerative disorders deepens, common themes begin to emerge: Alzheimer brain plaques and the inclusion bodies found in Parkinson disease contain at least one common component, while Huntington disease, fragile X syndrome and spinocerebellar atrophy are all 'dynamic mutation' diseases in which there is an expansion of a DNA repeat sequence. Apoptosis is emerging as one of the molecular mechanisms invoked in several neurodegenerative diseases, as are other, specific, intracellular signaling events. The biosynthesis of myelin and the regulation of cholesterol traffic also figure in Charcot-Marie-Tooth and Neimann-Pick disease, respectively.",
    diseases: "Adrenoleukodystrophy, Alzheimer disease, Amyotrophic lateral sclerosis, Angelman syndrome, Ataxia telangiectasia, Charcot-Marie-Tooth syndrome, Cockayne syndrome, Deafness, Duchenne muscular dystrophy, Epilepsy, Essential tremor, Fragile X syndrome, Friedreich's ataxia, Gaucher disease, Huntington disease, Lesch-Nyhan syndrome, Maple syrup urine disease, Menkes syndrome, Myotonic dystrophy, Narcolepsy, Neurofibromatosis, Niemann-Pick disease, Parkinson disease, Phenylketonuria, Prader-Willi syndrome, Refsum disease, Rett syndrome, Spinal muscular atrophy, Spinocerebellar ataxia, Tangier disease, Tay-Sachs disease, Tuberous sclerosis, Von Hippel-Lindau syndrome, Williams syndrome, Wilson's disease, and Zellweger syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead77"),
    idclass: "12",
    class: "Neonatal Diseases",
    description: "The human genome is often referred to as a 'blueprint' and contains all of the information and instructions necessary for defining a human being. The term genome refers collectively to the DNA and associated protein molecules contained in an organism or a cell. The human genome consists of 23 pairs of chromosomes — threadlike packages of genes and other DNA — with each parent contributing one chromosome to each pair. A gene is a specific sequence of DNA and is actually the functional unit of inheritance. Most genes contain the information needed to make a protein, or molecules that carry out all of a cell's vital activities. Therefore, slight variations in genes lead to slight changes in a protein. Although some human diseases are explained by alterations in a single gene or of a single chromosome, most are complex and may involve multiple genes and protein pathways. A myriad of genes, as well as environmental factors, are believed to control the complex and integrated processes necessary for fetal development. When one or more of these processes goes awry, it can result in the birth of an individual with a genetic alteration. Scientific studies, often those that use other organisms as a model, will provide information about biological and regulatory processes involved in human development and will identify critical pathways in which genetic changes result in disease. This information will come not only from human studies, but also from other model organisms — such as mouse or yeast — that can provide insights into how key genes operate in complex systems.",
    diseases: "Achondroplasia, Angelman syndrome, Cockayne syndrome, Cystic fibrosis, DiGeorge syndrome, Fragile X syndrome, Marfan syndrome, Prader-Willi syndrome, Severe combined immunodeficiency, Waardenburg syndrome, Werner syndrome, Williams syndrome, and Zellweger syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead79"),
    idclass: "14",
    class: "Nutritional and Metabolic Diseases",
    description: "Metabolism is the means by which the body derives energy and synthesizes the other molecules it needs from the fats, carbohydrates and proteins we eat as food, by enzymatic reactions helped by minerals and vitamins. This global statement masks the complicated network of enzyme- catalyzed reactions that occurs in cells. Although this page is devoted to diseases caused by errors in metabolic processes, there is actually a significant level of tolerance of errors in the system: often, a mutation in one enzyme does not mean that the individual will suffer from a disease. A number of different enzymes may compete to modify the same molecule, and there may be more than one way to achieve the same end result for a variety of metabolic intermediates. Disease will only occur if a critical enzyme is disabled, or if a control mechanism for a metabolic pathway is affected. Here, we highlight the diseases of metabolism for which a gene has been identified, cloned and mapped. Many of these are inborn errors of metabolism: inherited traits that are due to a mutation in a metabolic enzyme; others involve mutations in regulatory proteins and in transport mechanisms.",
    diseases: "Adrenoleukodystrophy, Diabetes (type 1), Gaucher disease, Glucose galactose malabsorption, Hereditary hemochromatosis, Lesch-Nyhan syndrome, Maple syrup urine disease, Menkes syndrome, Niemann-Pick disease, Obesity, Pancreatic cancer, Phenylketonuria, Prader-Willi syndrome, Porphyria, Refsum disease, Tangier disease, Tay-Sachs disease, Wilson's disease, and Zellweger syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead7c"),
    idclass: "17",
    class: "The Urinary System",
    description: "The urinary system, also known as the renal system, consists of the kidneys, ureters, bladder, and the urethra. Each kidney consists of millions of functional units called nephrons. The purpose of the renal system is to eliminate wastes from the body, regulate blood volume and blood pressure, control levels of electrolytes and metabolites, and regulate blood pH. The kidneys have extensive blood supply via the renal arteries which leave the kidneys via the renal vein. Following filtration of blood and further processing, wastes (in the form of urine) exit the kidney via the ureters, tubes made of smooth muscle fibers that propel urine towards the urinary bladder, where it is stored and subsequently expelled from the body by urination (voiding). The female and male urinary system are very similar, differing only in the length of the urethra.",
    diseases: "Kidney diseases, Urinary tract infections, Interstitial cystitis, Kidney stones, and Bladder cancer.",
    ref: "en.wikipedia.org",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead7a"),
    idclass: "15",
    class: "Respiratory Diseases",
    description: "The respiratory system plays a vital role in delivering oxygen to the body — fuel for all the body's functions. It also removes carbon dioxide waste, eliminates toxic waste, regulates temperature, and stabilizes blood acid-alkaline balance (pH). The lungs are the largest part of the respiratory system and have both 'respiratory' and 'non-respiratory' functions. The respiratory function involves gas exchange — the transfer of oxygen from the air into the blood and the removal of carbon dioxide from the blood. Non-respiratory lung functions are mechanical, biochemical, and physiological. The lungs provide a defense against bacterial, viral and other infectious agents; remove various metabolic waste products; control the flow of water, ions, and large proteins across its cellular structures; and manufacture a variety of essential hormones and chemical agents that have important biological roles. Respiratory diseases can arise from a number of causes, including inhalation of toxic agents, accidents, and harmful lifestyles, such as smoking. Infections, genetic factors, and anything else that affects lung development, either directly or indirectly, can cause respiratory symptoms.",
    diseases: "Alpha-1-antitrypsin deficiency, Asthma, Cystic fibrosis, and Lung carcinoma (small cell).",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead7b"),
    idclass: "16",
    class: "Skin and Connective Tissue",
    description: "The skin is the largest organ in the body — both in weight and in surface area — and separates the body's internal environment from the external environment. The skin has many diverse roles. It acts as a channel of communication with the outside world; protects the body from water loss; uses specialized pigment cells, called melanocytes, to protect the body from ultraviolet radiation; participates in calcium homeostasis by contributing to the body's supply of vitamin D; and helps regulate body temperature and metabolism. Elastic tissues such as the skin require a strong and resilient structural framework. This framework is called the extracellular matrix, or connective tissue. The orientation of the connective tissues — adipose (fat cells), cartilage, bone, tendons, and ligaments — found beneath the skin are also key for tissue appearance and function. All connective tissue is composed of three major classes of biomolecules: structural proteins (collagen and elastin), specialized proteins (fibrillin, fibronectin, and laminin), and proteoglycans. Some skin and connective tissue diseases, such as those discussed in this section of genes and disease, are due strictly to genetic inheritance, while others do not have specific gene abnormalities as their sole cause. Many features of skin and connective tissue disorders overlap with each other, and with other disorders, even though they have unique genetic causes.",
    diseases: "Male pattern baldness, Diastrophic dysplasia, Ellis-van Creveld syndrome, Marfan syndrome, Malignant melanoma, Menkes syndrome, and Porphyria.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead7d"),
    idclass: "18",
    class: "Mental and behavioral disorders",
    description: "A mental disorder, also called a mental illness, psychological disorder or psychiatric disorder, is mental or behavioral pattern that causes either suffering or a poor ability to function in ordinary life. Many disorders are described. Conditions that are excluded include social norms. Signs and symptoms depend on the specific disorder. The causes of mental disorders are often unclear. Theories may incorporate findings from a range of fields. Mental disorders are usually defined by a combination of how a person feels, acts, thinks or perceives. This may be associated with particular regions or functions of the brain, often in a social context. A mental disorder is one aspect of mental health. The scientific study of mental disorders is called psychopathology. Behavioral disorders, also known as disruptive behavioral disorders, are the most common reasons that parents are told to take their kids for mental health assessments and treatment. Behavioral disorders are also common in adults. If left untreated in childhood, these disorders can negatively affect a person’s ability to hold a job and maintain relationships. According to BehaviorDisorder.org, behavioral disorders may be broken down into a few types, which include: Anxiety disorders, Disruptive behavioral disorders, Dissociative disorders, Emotional disorders, and Pervasive developmental disorders.",
    diseases: "Depression, Dementia, Schizophrenia, Anxiety disorders, Disruptive behavioral disorders, Dissociative disorders, Emotional disorders, and Pervasive developmental disorders.",
    ref: "en.wikipedia.org;  www.psychguides.com",
    __v: NumberInt("0")
} ]);
db.getCollection("dclasses").insert([ {
    _id: ObjectId("5cf8d45ddd41810e502ead6e"),
    idclass: "3",
    class: "The Digestive System",
    description: "Digestion is the process of turning food into fuel for energy, and for maintenance of the body structure. The digestive tract is a series of hollow organs joined in a long, twisting tube from the mouth to the anus. Inside this tube is a lining called the mucosa. In the mouth, stomach, and small intestine, the mucosa contains tiny glands that produce enzymes to help digest food. There are also two solid digestive organs, the liver and the pancreas, which produce enzymes that reach the intestine through small tubes. During the digestive process, food passes down the throat, through the esophagus, and into the stomach, where food continues to be broken down. The partially digested food passes into a short tube called the duodenum — the first part of the small intestine. The jejunum and ileum are also part of the small intestine. The liver, the gallbladder, and the pancreas produce enzymes and substances to help with digestion in the small intestine. After the digestive process is complete, the resulting waste travels downstream to the colon. The colon and rectum are parts of the body's digestive system, which removes nutrients from food and stores waste until it passes out of the body. Together, the colon and rectum form a long, muscular tube called the large intestine. The health of your digestive system has a lot to do with lifestyle — the food you eat, the amount of exercise you get, and the pace and stress level of your day. However, some digestive diseases, such as those discussed here, are thought to be hereditary or stem from an infection. For others, there is no known cause.",
    diseases: "Colon cancer, Crohn's disease, Cystic fibrosis, Diabetes (type 1), Glucose galactose malabsorption, Pancreatic cancer, Wilson's disease, and Zellweger syndrome.",
    ref: "National Center for Biotechnology Information (US). Genes and Disease [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 1998-. Introduction to Genes and Disease.",
    __v: NumberInt("0")
} ]);
