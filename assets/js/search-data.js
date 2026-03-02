/**
 * UbiSys Search Index
 * -------------------
 * Pre-built array of all searchable content across the site.
 * When adding new publications, news, team members, or projects
 * to their respective HTML pages, also add an entry here.
 *
 * Each entry: { category, title, text, url, year? }
 *   category — 'publication' | 'news' | 'team' | 'project'
 *   title    — primary display text
 *   text     — secondary searchable text (authors, description, venue…)
 *   url      — page to navigate to
 *   year     — optional year string
 */
window.UBISYS_SEARCH_INDEX = [

  // ═══════════════════════════════════════════
  //  PUBLICATIONS
  // ═══════════════════════════════════════════

  // ── 2026 ──
  { category:'publication', title:'MorsEar: Toward Generalizable Low-Resource Covert Messaging via Earable-Based Inertial Sensing', text:'Garvit Chugh, Indrajeet Ghosh, Nirmalya Roy, Sandip Chakraborty, Suchetana Chakraborty. ACM CHI 2026 Main Track. Conference. Core A*. HCI Sensing.', url:'publications.html', year:'2026' },
  { category:'publication', title:'VectionSense: Multimodal Inertial-Physiological Cybersickness Detection in Consumer VR', text:'Kompal Layal, Ashish Kumar, Garvit Chugh, Suchetana Chakraborty. SAXR 2026 Workshop co-located with ACM CHI 2026. Conference. HCI Sensing.', url:'publications.html', year:'2026' },
  { category:'publication', title:'HydratEar: Non-Invasive Hydration Monitoring using In-Ear Acoustic Reflectometry', text:'Garvit Chugh, Suchetana Chakraborty. IEEE PerCom 2026 Main Track. Conference. Core A*. HCI Sensing Healthcare.', url:'publications.html', year:'2026' },
  { category:'publication', title:'EarFence: Lightweight Ultrasonic Defense for Smart Earbuds Against Hidden Commands', text:'Sandeep Vadthya, Garvit Chugh, Suchetana Chakraborty. IEEE PerCom 2026 WiP Track. Conference. Core A*. Sensing Embedded.', url:'publications.html', year:'2026' },
  { category:'publication', title:'CompulsEar: Body-focused repetitive behaviors detection using earable-based inertial sensing', text:'Ashish Kumar, Sahil Sharma, Garvit Chugh, Suchetana Chakraborty. IEEE PerCom 2026 WiP Track. Conference. Core A*. HCI Sensing Healthcare.', url:'publications.html', year:'2026' },
  { category:'publication', title:'SpineSense: Earable-Based Inertial Sensing for Spine Movement Monitoring to Combat Neck Pain', text:'Garvit Chugh, Suchetana Chakraborty, Sandip Chakraborty. ACM PACMHCI EICS 2026. Journal Q1. HCI Sensing Healthcare.', url:'publications.html', year:'2026' },
  { category:'publication', title:'WristSense: Sensing Hidden Wrist Strain in Routine Activities via Inertial Tokenization and LLM-Based Feedback', text:'Garvit Chugh, Ananya Mondal, Sandip Chakraborty, Suchetana Chakraborty. ACM SenSys 2026 Main Track. Conference. Core A*. HCI Sensing AI.', url:'publications.html', year:'2026' },
  { category:'publication', title:'Experience: From Sensors to Service: Advancing Ambient Living with an AIoT Community Testbed', text:'Garvit Chugh, Ananya Mondal, Osho, Suchetana Chakraborty. COMSNETS 2026 Main Track. Conference. Sensing Networking Embedded.', url:'publications.html', year:'2026' },
  { category:'publication', title:'FedMeet: Personalized Federated Learning for Human Activity Recognition', text:'Ananya Mondal, Mohit Kumar, Suchetana Chakraborty. ICDCN 2026 Full Paper. Conference. AI Sensing.', url:'publications.html', year:'2026' },
  { category:'publication', title:'AASC: Activity-Adjusted Stake Consensus for Scalable IoT Blockchains', text:'Susmita Mondal, Adarsh Raj Shrivastava, Jatin Lohar, Suchetana Chakraborty. ICDCN 2026 Full Paper. Conference. Networking Embedded. Blockchain.', url:'publications.html', year:'2026' },
  { category:'publication', title:'PCIAFL: Personalized and Class Imbalance-Aware Federated Learning for Driver Behavior Classification', text:'Osho, Shubh Garg, Suchetana Chakraborty, Sajal K. Das. ICDCN 2026 Short Paper. Conference. AI Networking. Vehicular.', url:'publications.html', year:'2026' },

  // ── 2025 ──
  { category:'publication', title:'Lightweight Ensemble Framework for Reliable Multi-Fault Detection in Cyber-Physical Systems', text:'Sukitha K., Suchetana Chakraborty. IEEE HiPC 2025 Poster. Conference. AI Sensing Embedded. CPS.', url:'publications.html', year:'2025' },
  { category:'publication', title:'BiteSense: Earable-Based Inertial Sensing for Eating Behaviour Assessment', text:'Garvit Chugh, Indrajeet Ghosh, Suchetana Chakraborty, Sandip Chakraborty. PerCom 2025 Full Paper. Conference. HCI Sensing.', url:'publications.html', year:'2025' },
  { category:'publication', title:'Tracking Ephemeral and Residual Emotions via Earable Inertial Sensing During Media Consumption', text:'Sameeran Zhingre, Garvit Chugh, Suchetana Chakraborty. PerCom 2025 WIP Paper. Conference. HCI Sensing. Emotion.', url:'publications.html', year:'2025' },
  { category:'publication', title:'EarDesk: An Adaptive Desktop BLE Framework for eSense IMU Data Collection and Configuration', text:'Sameeran Zhingre, Garvit Chugh, Suchetana Chakraborty. PerCom 2025 Artifact Paper. Conference. HCI Sensing Embedded. BLE.', url:'publications.html', year:'2025' },
  { category:'publication', title:'Unlocking Eye Gestures with Earable Inertial Sensing for Accessible HCI', text:'Garvit Chugh, Suchetana Chakraborty, Sandip Chakraborty. COMSNETS 2025 Poster. Conference. HCI Sensing.', url:'publications.html', year:'2025' },
  { category:'publication', title:'Learning Non-cooperative Driving Practices and its Impact on Road Traffic Dynamics', text:'Osho, Suchetana Chakraborty. COMSNETS 2025 Poster. Conference. AI Networking. Vehicular.', url:'publications.html', year:'2025' },
  { category:'publication', title:'TruChain: A Blockchain-based Access Control to Improve the Security of Smart Water Grid Systems', text:'Susmita Mondal, Suchetana Chakraborty. COMSNETS 2025 Poster. Conference. Networking Embedded. Blockchain.', url:'publications.html', year:'2025' },
  { category:'publication', title:'SlidEar: Exploring eSense in-Ear Wearable for Voice-Assisted Smart Slide Supervision', text:'Susmita Mondal, Sameeran Ravishankar Zingre, Suchetana Chakraborty. COMSNETS 2025 Poster. Conference. HCI Sensing Embedded.', url:'publications.html', year:'2025' },

  // ── 2024 ──
  { category:'publication', title:'UniPreCIS: A data pre-processing solution for collocated services on shared IoT', text:'Anirban Das, Navlika Singh, Suchetana Chakraborty. Future Generation Computer Systems, Elsevier, 2024. Journal. Networking.', url:'publications.html', year:'2024' },
  { category:'publication', title:'A Cost-Sensitive LSTM Model for Driving Risk Assessment from Vehicular Trajectory Data', text:'Osho, Pranay, Pradeep Kumar, Suchetana Chakraborty. IEEE VTC2024-Fall. Conference. AI Networking. Vehicular.', url:'publications.html', year:'2024' },
  { category:'publication', title:'Context-Aware Daily Activity Recognition from Natural Acoustic Signals', text:'Avijoy Chakma, Anirban Das, Abu Zaher Md Faridee, Suchetana Chakraborty, Sandip Chakraborty, Nirmalya Roy. SmartSys 2024. Conference. AI Sensing.', url:'publications.html', year:'2024' },
  { category:'publication', title:'Local-FedGT: Decentralized Federated Learning using Game Theory in Dynamic Topology', text:'Monik Raj Behera, Suchetana Chakraborty. COMSNETS 2024 Poster. Conference. AI Networking. Federated Learning.', url:'publications.html', year:'2024' },
  { category:'publication', title:'Protection Against Person-Identification from EEG Patterns: A Blockchain-based Approach', text:'Susmita Mondal, Pankaj Pandey, Krishna Prasad Miyapuram, Suchetana Chakraborty. BuildSEC 2024. Conference. Networking Embedded. Blockchain EEG.', url:'publications.html', year:'2024' },

  // ── 2023 ──
  { category:'publication', title:'Privacy-Preserving Activity Recognition in Smart Homes', text:'S. Chakraborty et al. CHASE 2023. Conference. Networking AI.', url:'publications.html', year:'2023' },
  { category:'publication', title:'A survey of mobility aware Multi-access Edge Computing: Challenges, use cases and future directions', text:'Ramesh Singh, Radhika Sukapuram, Suchetana Chakraborty. Ad Hoc Networks, Elsevier 2023. Journal. Networking. MEC.', url:'publications.html', year:'2023' },
  { category:'publication', title:'Sense as you go: A context-aware adaptive sensing framework for on-road driver profiling', text:'Ananya Mondal, Martin Kaushal, Suchetana Chakraborty. ACM BuildSys 2023. Conference. Sensing Networking.', url:'publications.html', year:'2023' },
  { category:'publication', title:'Exploring Earables to Monitor Temporal Lack of Focus during Online Meetings to Identify Onset of Neurological Disorders', text:'Garvit Chugh, Suchetana Chakraborty, Ravi Bhandari, Sandip Chakraborty. IEEE/ACM CHASE 2023. Conference. HCI Sensing Healthcare.', url:'publications.html', year:'2023' },
  { category:'publication', title:'Demonstration of LegalHelper: A Low-cost tool for Smart Translation and Creation of Legal Contracts', text:'Garvit Chugh, Suchetana Chakraborty. COMSNETS 2023 Demo. Conference. AI HCI.', url:'publications.html', year:'2023' },
  { category:'publication', title:'enVolve+: Inertial Sensing to Reinforce Involvement of Silent Listeners during an Online Interaction', text:'Garvit Chugh, Suchetana Chakraborty, Sandip Chakraborty. COMSNETS 2023 Poster. Conference. HCI Sensing.', url:'publications.html', year:'2023' },
  { category:'publication', title:'crossTrustChain: CrossChain Interoperability using Multivariate Trust Models', text:'Dhruv Avinash Patel, Harsh Anand, Suchetana Chakraborty. COMSNETS 2023 Cybersecurity Workshop. Conference. Networking Embedded. Blockchain.', url:'publications.html', year:'2023' },

  // ── 2022 ──
  { category:'publication', title:'Energy-Efficient Ubiquitous Computing Architectures', text:'S. Chakraborty et al. COMSNETS 2022. Conference. Embedded Sensing.', url:'publications.html', year:'2022' },
  { category:'publication', title:'UniPreCIS: A data pre-processing solution for collocated services on shared IoT (preprint)', text:'Anirban Das, Navlika Singh, Suchetana Chakraborty. CoRR 2022. Networking.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Where Do All My Smart Home Data Go? Context-aware Data Generation and Forwarding for Edge-based Microservices over Shared IoT Infrastructure', text:'Anirban Das, Sandip Chakraborty, Suchetana Chakraborty. Future Generation Computer Systems, Elsevier, 2022. Journal. Networking Embedded.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Deep Unsupervised Methods towards Behavior Analysis in Ubiquitous Sensor Data', text:'Manan Sharma, Shivam Tiwari, Gaurav Ruhela, Suchetana Chakraborty, Dip Sankar Banerjee. Internet of Things Journal, Elsevier 2022. Journal. AI Sensing.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Mobility-aware MultiAccess Edge Computing for Multiplayer Augmented and Virtual Reality Gaming', text:'Ramesh Singh, Radhika Sukapuram, Suchetana Chakraborty. NCA 2022 IEEE. Conference. Networking. AR VR.', url:'publications.html', year:'2022' },
  { category:'publication', title:'enVolve: Are You Listening? Inertial Sensing to Monitor the Involvement of Silent Listeners during an Online Interaction', text:'Garvit Chugh, Suchetana Chakraborty, Ravi Bhandari, Sandip Chakraborty. UbiComp/ISWC 2022 Adjunct. Conference. HCI Sensing.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Leveraging ambient sensing for the estimation of curiosity-driven human crowd', text:'Anirban Das, Kartik Narayan, Suchetana Chakraborty. IEEE SysCon 2022. Conference. Sensing AI.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Experience: Developing a testbed for ambient sensing and in-network data processing', text:'Anirban Das, Suchetana Chakraborty. COMSNETS 2022. Conference. Sensing Embedded.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Enabling video conferencing in low bandwidth', text:'Muzzafer Ali, Suchetana Chakraborty. IEEE CCNC 2022 Poster. Conference. Networking.', url:'publications.html', year:'2022' },
  { category:'publication', title:'Multi-Access Edge Computing for Urban Informatics', text:'Suchetana Chakraborty, Radhika Sukapuram. ICDCN 2022 Tutorial. Conference. Networking. MEC.', url:'publications.html', year:'2022' },

  // ── 2021 ──
  { category:'publication', title:'A survey on task offloading in Multi-access Edge Computing', text:'Akhirul Islam, Arindam Debnath, Manojit Ghosh, Suchetana Chakraborty. Journal of Systems Architecture, Elsevier, 2021. Journal. Networking. MEC.', url:'publications.html', year:'2021' },

  // ── 2020 ──
  { category:'publication', title:'A study on real-time edge computed occupancy estimation in an indoor environment', text:'Anirban Das, Rohan Gupta, Suchetana Chakraborty. COMSNETS 2020 Poster. Conference. Sensing Embedded AI.', url:'publications.html', year:'2020' },
  { category:'publication', title:'Behavior Analysis through Routine Cluster Discovery in Ubiquitous Sensor Data', text:'Manan Sharma, Shivam Tiwari, Suchetana Chakraborty, Dip Sankar Banerjee. COMSNETS 2020. Conference. AI Sensing.', url:'publications.html', year:'2020' },

  // ── 2019 ──
  { category:'publication', title:'Learning and Annotating Activities for Home Automation using LSTM', text:'Nilotpola Sarma, Suchetana Chakraborty, Dip Sankar Banerjee. MINDS Workshop COMSNETS 2019. Best Paper Award. Conference. AI Embedded.', url:'publications.html', year:'2019' },
  { category:'publication', title:'Significance of Adaptive Sensing for Smart Building Monitoring: A Practical Study', text:'Anirban Das, Rohan Gupta, Suchetana Chakraborty. WACI Workshop COMSNETS 2019. Conference. Sensing Embedded.', url:'publications.html', year:'2019' },
  { category:'publication', title:'Motivating In-network Fusion for Smart Infrastructure Monitoring', text:'Anirban Das, Rohan Gupta, Suchetana Chakraborty. COMSNETS 2019. Conference. Networking Embedded.', url:'publications.html', year:'2019' },
  { category:'publication', title:'Activity Recognition through Feature Learning and Annotations using LSTM', text:'Nilotpola Sarma, Suchetana Chakraborty, Dip Sankar Banerjee. COMSNETS 2019. Conference. AI Sensing.', url:'publications.html', year:'2019' },

  // ── 2018 ──
  { category:'publication', title:'RDDF: Rating Driven Data Forwarding in Vehicular Network', text:'Rohan, Jayashree Phukan, Suchetana Chakraborty. IEEE ANTS 2018. Conference. Networking. Vehicular.', url:'publications.html', year:'2018' },
  { category:'publication', title:'BlockAPP: Using Blockchain for Authentication and Privacy Preservation in IoV', text:'Rohit Sharma, Suchetana Chakraborty. IEEE GLOBECOM 2018. Conference. Networking Embedded. Blockchain IoV.', url:'publications.html', year:'2018' },
  { category:'publication', title:'SDCF: Sensory Data Collection Framework for Smart Building application', text:'Anirban Das, Suchetana Chakraborty. IEEE Sensors 2018 Poster. Conference. Sensing Embedded.', url:'publications.html', year:'2018' },
  { category:'publication', title:'Context Aware Data Collection Framework for Critical Infrastructure Monitoring System', text:'Anirban Das, Suchetana Chakraborty. ACM S3 Workshop MOBICOM 2018. Conference. Sensing Embedded.', url:'publications.html', year:'2018' },
  { category:'publication', title:'B2VDM: Blockchain Based Vehicular Data Management', text:'Rohit Sharma, Suchetana Chakraborty. ICACCI 2018. Conference. Networking Embedded. Blockchain Vehicular.', url:'publications.html', year:'2018' },

  // ── 2016 ──
  { category:'publication', title:'Impact of Redundant Sensor Deployment over Data Gathering Performance: A Model Based Approach', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. Journal of Network and Computer Applications, Elsevier, 2016. Journal. Sensing Networking.', url:'publications.html', year:'2016' },

  // ── 2015 ──
  { category:'publication', title:'Fault Resilience in Sensor Networks: Distributed Node-disjoint Multi-path Multi-sink Forwarding', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. Journal of Network and Computer Applications, Elsevier, 2015. Journal. Networking Sensing.', url:'publications.html', year:'2015' },
  { category:'publication', title:'Dynamic Tree Switching for Distributed Message-Passing Applications', text:'Suchetana Chakraborty, Sandip Chakraborty, Sushanta Karmakar, Sukumar Nandi. Journal of Network and Systems Management, Springer, 2015. Journal. Networking.', url:'publications.html', year:'2015' },
  { category:'publication', title:'Sensory Data Gathering for Road-traffic Monitoring: Energy Efficiency, Reliability and Fault-tolerance', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. Springer Book Chapter, 2015. Sensing Networking.', url:'publications.html', year:'2015' },

  // ── 2014 ──
  { category:'publication', title:'Topology Management Ensuring Reliability in Delay Sensitive Sensor Networks with Arbitrary Node Failures', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. International Journal of Wireless Information Networks, Springer, 2014. Journal. Networking Sensing.', url:'publications.html', year:'2014' },
  { category:'publication', title:'ADCROSS: Adaptive Data Collection from Road Surveilling Sensors', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. IEEE Transactions on Intelligent Transportation Systems, 2014. Journal. Networking Sensing.', url:'publications.html', year:'2014' },
  { category:'publication', title:'Hierarchical Topology Adaptation for Distributed Convergecast Applications', text:'Sandip Chakraborty, Suchetana Chakraborty, Sushanta Karmakar, Hridoy Sankar Dutta. ACM SAC 2014. Conference. Networking.', url:'publications.html', year:'2014' },
  { category:'publication', title:'Defending Concealedness in IEEE 802.11n', text:'Sandip Chakraborty, Subhrendu Chattopadhyay, Suchetana Chakraborty, Sukumar Nandi. IEEE/ACM COMSNETS 2014. Conference. Networking.', url:'publications.html', year:'2014' },

  // ── 2013 ──
  { category:'publication', title:'Convergecast Tree Management from Arbitrary Node Failure in Sensor Network', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. Ad Hoc Networks, Elsevier, 2013. Journal. Networking Sensing.', url:'publications.html', year:'2013' },
  { category:'publication', title:'Beyond Conventional Routing Protocols: Opportunistic Path Selection for IEEE 802.11s Mesh Networks', text:'Sandip Chakraborty, Suchetana Chakraborty, Sukumar Nandi. IEEE PIMRC 2013. Conference. Networking.', url:'publications.html', year:'2013' },
  { category:'publication', title:'RelBAS: Reliable Data Gathering from Border Area Sensors', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. IEEE ISCC 2013. Conference. Sensing Networking.', url:'publications.html', year:'2013' },
  { category:'publication', title:'Exploring Gradient in Sensor Deployment Pattern for Data Gathering with Sleep based Energy Saving', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. IEEE IWCMC 2013. Conference. Sensing Networking.', url:'publications.html', year:'2013' },
  { category:'publication', title:'Energy-efficient Data Gathering for Road-side Sensor Networks ensuring Reliability and Fault-tolerance', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. IEEE AINA 2013. Conference. Sensing Networking.', url:'publications.html', year:'2013' },
  { category:'publication', title:'Side Channel Attacks: Current Researches and Future Scopes', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi. National Workshop on Network Security, 2013. Conference. Networking.', url:'publications.html', year:'2013' },
  { category:'publication', title:'Formalization of a Fully-Decoupled Reactive Tuple Space Model for Mobile Middleware', text:'Suddhasil De, Diganta Goswami, Sukumar Nandi, Suchetana Chakraborty. Springer Book Chapter, 2013. Networking.', url:'publications.html', year:'2013' },

  // ── 2012 ──
  { category:'publication', title:'Topology Adaptive Computation of Distributed IDS Set for Detecting Attacks on STP', text:'Suchetana Chakraborty, Ferdous Barbhuiya, Ankush Rai, Arijit Sur, Santosh Biswas, Sukumar Nandi. Journal of Information Assurance and Security, 2012. Journal. Networking.', url:'publications.html', year:'2012' },
  { category:'publication', title:'Supporting Tuple Space based Mobile Middleware over Unreliable Mobile Infrastructures', text:'Suddhasil De, Suchetana Chakraborty, Sukumar Nandi, Diganta Goswami. IEEE ANTS 2012. Conference. Networking.', url:'publications.html', year:'2012' },
  { category:'publication', title:'Formalization of Discovery and Communication Mechanisms of Tuple Space Based Mobile Middleware', text:'Suddhasil De, Suchetana Chakraborty, Diganta Goswami, Sukumar Nandi. IEEE PDGC 2012. Conference. Networking.', url:'publications.html', year:'2012' },
  { category:'publication', title:'Formalization of a Fully-Decoupled Reactive Tuple space model for Mobile Middleware (MOBILWARE)', text:'Suddhasil De, Diganta Goswami, Sukumar Nandi, Suchetana Chakraborty. MOBILWARE 2012. Conference. Networking.', url:'publications.html', year:'2012' },
  { category:'publication', title:'A Novel Crash-Tolerant Data Gathering in Wireless Sensor Networks', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. IEEE/IFIP NOMS 2012. Conference. Sensing Networking.', url:'publications.html', year:'2012' },

  // ── 2011 ──
  { category:'publication', title:'Exploit Detection Techniques for STP using Distributed IDS', text:'Ankush Rai, Ferdous Barbhuiya, Arijit Sur, Santosh Biswas, Suchetana Chakraborty, Sukumar Nandi. WICT 2011. Conference. Networking.', url:'publications.html', year:'2011' },
  { category:'publication', title:'A Novel Approach for Adaptive Data Gathering in Sensor Networks by Dynamic Spanning Tree Switching', text:'Suchetana Chakraborty, Sushanta Karmakar. ACC 2011 Springer. Conference. Sensing Networking.', url:'publications.html', year:'2011' },
  { category:'publication', title:'A Reliable and Total Order Tree Based Broadcast in Wireless Sensor Network', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. ICCCT 2011. Conference. Networking Sensing.', url:'publications.html', year:'2011' },
  { category:'publication', title:'A Tree-Based Local Repairing Approach for Increasing Lifetime of Query Driven WSN', text:'Suchetana Chakraborty, Sandip Chakraborty, Sukumar Nandi, Sushanta Karmakar. I-SPAN 2011. Conference. Networking Sensing.', url:'publications.html', year:'2011' },
  { category:'publication', title:'Adaptive Convergecast by Distributed Topology Switching', text:'Suchetana Chakraborty, Sushanta Karmakar. SBRC 2011. Conference. Networking.', url:'publications.html', year:'2011' },


  // ═══════════════════════════════════════════
  //  NEWS
  // ═══════════════════════════════════════════

  // ── 2026 ──
  { category:'news', title:'Urgent Hiring: SRF & Senior Research Associate Positions', text:'Multiple open positions (2 SRF + 1 Senior Research Associate) with immediate joining for a Systems & ML project.', url:'news.html', year:'2026' },
  { category:'news', title:'Full paper accepted at CHI 2026 Main Track', text:'Congratulations to Garvit for a full paper acceptance at CHI 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Full paper accepted at PerCom 2026 Main Track', text:'Congratulations to Garvit for a full paper at PerCom 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'2 papers accepted at PerCom 2026 WiP Track', text:'Two Work-in-Progress papers accepted at PerCom 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'ACM IARCS Grant Recipient for PerCom 2026', text:'Garvit received the ACM IARCS Grant for attending PerCom 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'IEEE CS TCCC and TCPP STG Travel Grant for PerCom 2026', text:'Garvit received the IEEE CS TCCC and TCPP STG Travel Grant for PerCom 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'LRNF International Student Travel Grant for SenSys 2026', text:'Garvit received the LRNF International Student Travel Grant for SenSys 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Full paper acceptance at SenSys 2026', text:'Congratulations to Garvit for a full paper acceptance at ACM SenSys 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Full paper acceptance at EICS 2026', text:'Congratulations to Garvit for a full paper acceptance at ACM EICS 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Poster on BiteSense at ARCS 2026', text:'Garvit was invited to present a poster on BiteSense at ARCS 2026, IIT Hyderabad. February 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Triple acceptance at ICDCN 2026 in Nara, Japan', text:'UbiSys secured 3 paper acceptances (2 Full Papers and 1 Short Paper) at ICDCN 2026. Congratulations to Ananya, Susmita, Osho and all co-authors. January 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'Full paper accepted at COMSNETS 2026 Main Track', text:'Congratulations to Garvit, Ananya and Osho for a full paper acceptance at COMSNETS 2026. January 2026.', url:'news.html', year:'2026' },
  { category:'news', title:'COMSNETS 2026 Travel Grant Awardee', text:'Garvit received the COMSNETS 2026 Travel Grant. January 2026.', url:'news.html', year:'2026' },

  // ── 2025 ──
  { category:'news', title:'Poster presented at IEEE HiPC 2025', text:'Sukitha K. presented a poster on Lightweight Ensemble Framework at IEEE HiPC 2025, Hyderabad. December 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'Garvit selected to receive OmniBuds earable platform', text:'Garvit was selected from global applicants to receive OmniBuds, a cutting-edge earable platform with integrated biosensors. June 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'Garvit received multiple Travel Grants for PerCom 2025', text:'ACM/IARCS Travel Grant and IEEE CS TCCC and TCPP STG Travel Grant awarded to Garvit for PerCom 2025. March 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'Multiple Acceptances at PerCom 2025', text:'Congratulations to Garvit for a full paper, 1 WiP and 1 Artefact, and to Sameeran for a WiP at PerCom 2025. March 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'COMSNETS 2025 Presentations', text:'Osho, Garvit and Susmita presented their posters at COMSNETS 2025. February 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'New funded projects and open positions', text:'Join our team! Open positions for BTP, MTP, PhD, Postdoc and intern roles available now. January 2025.', url:'news.html', year:'2025' },
  { category:'news', title:'Smart Home and Ambient Sensing Lab Completed', text:'Our 3-D printed smart home and ambient sensing lab is now fully operational. January 2025.', url:'news.html', year:'2025' },

  // ── 2024 ──
  { category:'news', title:'Paper Accepted at VTC Fall 2024', text:'Congratulations to Osho for having a full paper accepted at VTC Fall 2024. October 2024.', url:'news.html', year:'2024' },
  { category:'news', title:'International Research Visit', text:'Osho visited UNSW, Sydney as a Junior Research Fellow. July 2024.', url:'news.html', year:'2024' },
  { category:'news', title:'COMSNETS 2024 Poster Presentation', text:'Monik presented a poster at COMSNETS 2024. January 2024.', url:'news.html', year:'2024' },

  // ── 2023 ──
  { category:'news', title:'ACM BuildSys 2023 Attendance', text:'Ananya attended ACM BuildSys 2023 to present her work. November 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'Paper Accepted at IEEE/ACM BuildSys 2023', text:'Congratulations to Ananya for having a full paper accepted at IEEE/ACM BuildSys 2023. October 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'Research Internship at UMBC, USA', text:'Garvit received a funded 6-month Research Internship at UMBC, USA (September 2023 - February 2024).', url:'news.html', year:'2023' },
  { category:'news', title:'Stanford EPIC Data Challenge Finalist', text:'Garvit was a finalist in the Stanford EPIC Data Challenge, USA, placing in the Top 5 out of 61 participants. August 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'Paper Accepted at IEEE/ACM CHASE 2023', text:'Congratulations to Garvit for having a full paper accepted at IEEE/ACM CHASE 2023. July 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'SERB CRG Grant', text:'Our lab received the Core Research Grant from SERB (2023-2026). June 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'IRMG 2023', text:'Successfully secured the IRMG 2023 grant. May 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'Prestigious Fellowships', text:'Garvit received the TCS Fellowship and Prime Minister Research Fellowship PMRF. January 2023.', url:'news.html', year:'2023' },
  { category:'news', title:'COMSNETS Service', text:'Garvit served as Web Chair and Social Media Chair at COMSNETS. January 2023.', url:'news.html', year:'2023' },


  // ═══════════════════════════════════════════
  //  TEAM — Current
  // ═══════════════════════════════════════════

  // Faculty
  { category:'team', title:'Dr. Suchetana Chakraborty', text:'Associate Professor, CSE, IIT Jodhpur. PI, UbiSys Lab. Ubiquitous computing, edge sensing, smart health. Faculty.', url:'team.html' },

  // PhD Scholars
  { category:'team', title:'Garvit Chugh', text:'PMRF Scholar, Dual MTech-PhD. Mobile & Pervasive Computing. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Ananya Mondal', text:'SRF, PhD Scholar. IoT & Sensing-as-a-Service. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Osho', text:'SRF, PhD Scholar. Vehicular Network Intelligence. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Kondagurle Sukitha', text:'PhD Scholar. Sensor Reliability & Trust Modeling. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Susmita Mondal', text:'PhD Scholar. Blockchain in CPS & IoT. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Manjeet Yadav', text:'PhD Scholar. Digital Well-being & Healthcare Applications. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Projat Banerjee', text:'Part-Time PhD Scholar. PhD Scholar.', url:'team.html' },
  { category:'team', title:'Kamal Kumar Gola', text:'Part-Time PhD Scholar. Underwater WSN. PhD Scholar.', url:'team.html' },

  // Research Assistants
  { category:'team', title:'Mayank Kumar', text:'Research Assistant. Next-Gen Wargaming Integration.', url:'team.html' },

  // MTech Scholars
  { category:'team', title:'Alok Dutta', text:'MTech Scholar. Wearable Behavior Detection.', url:'team.html' },
  { category:'team', title:'Himanshu', text:'MTech Scholar. Automatic Speech Recognition.', url:'team.html' },
  { category:'team', title:'Faraz Ahmed', text:'MTech Scholar.', url:'team.html' },
  { category:'team', title:'Ashish Kumar', text:'MTech Scholar. AR/VR.', url:'team.html' },
  { category:'team', title:'Kompal Layal', text:'MTech Scholar. AR/VR.', url:'team.html' },
  { category:'team', title:'Shubham Roy', text:'MTech Scholar. AR/VR.', url:'team.html' },

  // BTech FYP
  { category:'team', title:'Abhishek Raghav', text:'BTech Final Year Project. Prakriti App Development.', url:'team.html' },
  { category:'team', title:'Mohammad Zaid Shamshad', text:'BTech Final Year Project. Prakriti App Development.', url:'team.html' },

  // Interns 2025
  { category:'team', title:'Anushka Gupta', text:'Intern 2025. Banasthali Vidyapith, Jaipur.', url:'team.html' },
  { category:'team', title:'Arnav Gupta', text:'Intern 2025. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Sharmad Kalpande', text:'Intern 2025. IISER Bhopal.', url:'team.html' },
  { category:'team', title:'Amber Bansal', text:'Intern 2025. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Saksham Mishra', text:'Intern 2025. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Tanmay Mutha', text:'Intern 2025. College of Engineering, Pune.', url:'team.html' },
  { category:'team', title:'Mohd Anas Ansari', text:'Intern 2025. MNIT Jaipur.', url:'team.html' },
  { category:'team', title:'Shailendra Mandal', text:'Intern 2025. MNIT Jaipur.', url:'team.html' },
  { category:'team', title:'Mohit Kumar', text:'Intern 2025. IIT Jodhpur.', url:'team.html' },
  { category:'team', title:'Leela Venkata Sai Kumar Annadasu', text:'Intern 2025. VIT.', url:'team.html' },

  // Interns 2023
  { category:'team', title:'Martin Kaushal', text:'Intern 2023. Android Development. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Arihant Tanwar', text:'Intern 2023. Trajectory Prediction. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Pratham Garg', text:'Intern 2023. Object Recognition. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Sheral Singla', text:'Intern 2023. HAR. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Raghav Garg', text:'Intern 2023. Communication Protocol. Thapar Institute.', url:'team.html' },
  { category:'team', title:'Ravindra', text:'Intern 2023. Android Development. IIIT Vadodara.', url:'team.html' },
  { category:'team', title:'Tanmay Bajaj', text:'Intern 2023. Sensing as a Service. IIT Roorkee.', url:'team.html' },
  { category:'team', title:'Swarup Kumar Mondal', text:'Intern 2023. HAR. Heritage Institute of Technology.', url:'team.html' },
  { category:'team', title:'Azhar Khan', text:'Intern 2023. Embedded Systems. IIT Jodhpur.', url:'team.html' },
  { category:'team', title:'Kartik Chhipa', text:'Intern 2023. Sensing as a Service. IIT Jodhpur.', url:'team.html' },
  { category:'team', title:'Ankur Kumar Shukla', text:'Intern 2023. HAR. IIIT Vadodara.', url:'team.html' },
  { category:'team', title:'Jaysukh', text:'Intern 2023. Android Development. IIT Jodhpur.', url:'team.html' },
  { category:'team', title:'Naman Labhsetwar', text:'Intern 2023. Wifi Sensing & ML. PICT Pune.', url:'team.html' },
  { category:'team', title:'Aditya Deshpande', text:'Intern 2023. Wifi Sensing & ML. PICT Pune.', url:'team.html' },

  // Interns 2022
  { category:'team', title:'Avijit Das', text:'Intern 2022. Smartphone Sensory Data. IIT Madras.', url:'team.html' },
  { category:'team', title:'Yaman Saraswat', text:'Intern 2022. Multi Modal Data Analysis. NIT Agartala.', url:'team.html' },
  { category:'team', title:'Saksham Gautam', text:'Intern 2022. IMU Based Sensing. IIIT Prayagraj.', url:'team.html' },
  { category:'team', title:'Khushbu Bijawat', text:'Intern 2022. Smartwatch Sensory Data. MBM Jodhpur.', url:'team.html' },
  { category:'team', title:'Anushka Agarwal', text:'Intern 2022. Smartwatch Sensory Data. RV College.', url:'team.html' },

  // Volunteers
  { category:'team', title:'Abhinav Kashyap', text:'Undergrad Research Volunteer. Prakriti App Development.', url:'team.html' },
  { category:'team', title:'Hriday Kondru', text:'Undergrad Research Volunteer. Prakriti App Development.', url:'team.html' },
  { category:'team', title:'Akriti Gupta', text:'Undergrad Research Volunteer. Prakriti App Development.', url:'team.html' },
  { category:'team', title:'Khushi Parikh', text:'Undergrad Research Volunteer. Prakriti App Development.', url:'team.html' },
  { category:'team', title:'Naman Goyal', text:'Undergrad Research Volunteer. Web Development for SaaS Middleware.', url:'team.html' },
  { category:'team', title:'Aakash Maheshwari', text:'Undergrad Research Volunteer. Web Development for SaaS Middleware.', url:'team.html' },
  { category:'team', title:'Vansh Agarwal', text:'Undergrad Research Volunteer. Web Development for SaaS Middleware.', url:'team.html' },
  { category:'team', title:'Rachit Agnihotri', text:'Undergrad Research Volunteer. IoT Device Development.', url:'team.html' },
  { category:'team', title:'Sneha Gupta', text:'Undergrad Research Volunteer. IoT Device Development.', url:'team.html' },
  { category:'team', title:'Uppala Giridhar', text:'Undergrad Research Volunteer. IoT Device Development.', url:'team.html' },
  { category:'team', title:'Shubh Goyal', text:'Undergrad Research Volunteer. Multimodal Data Analysis for HAR.', url:'team.html' },
  { category:'team', title:'Sukriti Goyal', text:'Undergrad Research Volunteer. Multimodal Data Analysis for HAR.', url:'team.html' },
  { category:'team', title:'Ashish Cherukuri', text:'Undergrad Research Volunteer. Multimodal Data Analysis for HAR.', url:'team.html' },
  { category:'team', title:'Kartik Choudhary', text:'Undergrad Research Volunteer. Multimodal Data Analysis for HAR.', url:'team.html' },
  { category:'team', title:'Rankireddy Sai Mani Akarsh', text:'Undergrad Research Volunteer. Wargaming UX/UI.', url:'team.html' },
  { category:'team', title:'Shivam Kumar', text:'Undergrad Research Volunteer. Wargaming UX/UI.', url:'team.html' },

  // ── Alumni ──
  { category:'team', title:'Priyal Jain', text:'MTech Alumni. CPS Security.', url:'team.html' },
  { category:'team', title:'Nayanita Saha', text:'MTech Alumni. IoT & Sensing-as-a-Service.', url:'team.html' },
  { category:'team', title:'Vishwwanath Singh', text:'MTech Alumni. Pervasive Systems.', url:'team.html' },
  { category:'team', title:'Monik Raj Behera', text:'MTech Alumni. Federated Learning.', url:'team.html' },
  { category:'team', title:'Sameeran Zingre', text:'MTech Alumni. Earable Sensing.', url:'team.html' },
  { category:'team', title:'Ankit Modi', text:'MTech Alumni.', url:'team.html' },
  { category:'team', title:'Adarsh Raj', text:'BTech 2025 Alumni. Lightweight Consensus in Blockchain-IoT.', url:'team.html' },
  { category:'team', title:'Jatin Lohar', text:'BTech 2025 Alumni. Lightweight Consensus in Blockchain-IoT.', url:'team.html' },
  { category:'team', title:'Samyak Vikrant Haribhakta', text:'BTech 2025 Alumni. Trust in Upstream IoT Data using Blockchain.', url:'team.html' },
  { category:'team', title:'Harsh Kumar', text:'BTech 2024 Alumni. Leakage Detection from Smart Water Grid Data.', url:'team.html' },
  { category:'team', title:'Shubham Kumar', text:'BTech 2024 Alumni. Leakage Detection from Smart Water Grid Data.', url:'team.html' },
  { category:'team', title:'Likith Biyani', text:'BTech 2024 Alumni. Traffic Simulation Using SUMO Simulator.', url:'team.html' },
  { category:'team', title:'Keshav Mundra', text:'BTech 2024 Alumni. Traffic Simulation Using SUMO Simulator.', url:'team.html' },
  { category:'team', title:'Niharika Manhar', text:'BTech 2024 Alumni. Lightweight Consensus for Blockchain at the Extreme Edge.', url:'team.html' },
  { category:'team', title:'Paras', text:'BTech 2024 Alumni. Smart Home Realization at the Edge.', url:'team.html' },
  { category:'team', title:'Dhruv', text:'BTech 2024 Alumni. Enhanced Complex HAR Using IMU Data from Multiple Wearables.', url:'team.html' },
  { category:'team', title:'Haardik Ravat', text:'BTech 2024 Alumni. Enhanced Complex HAR Using IMU Data from Multiple Wearables.', url:'team.html' },


  // ═══════════════════════════════════════════
  //  PROJECTS
  // ═══════════════════════════════════════════

  { category:'project', title:'Behavioral Health Disorder Detection', text:'Detecting behavioural health disorders of older adults using self supervised learning and causal reasoning. Role: Co-PI. Cost: Rs. 69.90 Lakhs. Sponsor: NSF-TIH Indo-USA Joint Collaboration. Completed.', url:'project-details.html?index=0' },
  { category:'project', title:'Smart Water Supply Grid', text:'Demonstration Centre for Smart Graded-Water Supply Grid. Role: Co-PI. Cost: Rs. 40 Lakhs. Sponsor: JCKIC. Completed.', url:'project-details.html?index=1' },
  { category:'project', title:'Campus Wildlife Inventorization', text:'Inventorization of the wildlife towards a sustainable campus. Role: PI. Cost: Rs. 2 Lakhs. Sponsor: CETSD Campus Sustainability Program IIT Jodhpur. Completed.', url:'project-details.html?index=2' },
  { category:'project', title:'Adaptive Middleware for Smart Buildings', text:'Design and Development of an Adaptive Middleware for Smart Building Monitoring. Role: PI. Cost: Rs. 21.84 Lakhs. Sponsor: SERB DST. Completed.', url:'project-details.html?index=3' },
  { category:'project', title:'AIOT Bed Occupancy Detection', text:'AIOT based Bed Occupancy Detection in a Hospital Setup. Role: Co-PI. Cost: Rs. 10 Lakhs. Sponsor: JCKIC. Completed.', url:'project-details.html?index=4' },
  { category:'project', title:'Cuffless BP Monitoring Device', text:'Design of a Cuffless Continuous BP Monitoring Device. Role: Co-PI. Cost: Rs. 9 Lakhs. Sponsor: Johari Digital Healthcare Ltd. Completed.', url:'project-details.html?index=5' },
  { category:'project', title:'Behavioral Disorder Monitoring & Intervention', text:'Pervasive and Personalized Aid for Continuous Monitoring of Behavioral Disorders and Timely Intervention Toward Addressing Special Needs in Child Education. Role: PI. Cost: USD 60,000. Sponsor: Google Academic Research Award 2024. Ongoing.', url:'project-details.html?index=6' },
  { category:'project', title:'Next-gen Wargaming Interface', text:'Seamless Man-Machine Interface for Next-generation Wargaming. Role: PI. Cost: Rs. 5.38 Crore. Sponsor: DRDO DIA-COE IIT Jodhpur. Ongoing.', url:'project-details.html?index=7' },
  { category:'project', title:'Smart Heritage Management', text:'Comprehensive Risk Assessment Data for Heritage Sites and Development of Smart Heritage Management Systems. Role: Co-PI. Cost: Rs. 56 Lakhs. Sponsor: DST. Ongoing.', url:'project-details.html?index=8' },
  { category:'project', title:'AI Strategist for Wargames', text:'Developing Multiagent System based AI Strategist for Wargames. Role: Co-PI. Cost: Rs. 5.69 Crore. Sponsor: DRDO DIA-COE IIT Jodhpur. Ongoing.', url:'project-details.html?index=9' },
  { category:'project', title:'ConSenseHAR', text:'Decentralized collaborative context sensing towards pervasive Human Activity Recognition. Role: PI. Cost: Rs. 29 Lakhs. Sponsor: Core Research Grant SERB DST. Ongoing.', url:'project-details.html?index=10' },
  { category:'project', title:'SensePod', text:'An AIoT based testbed to promote Sensing as a Service for ambient living. Role: PI. Cost: Rs. 41.9 Lakhs. Sponsor: SEED Grant IIT Jodhpur. Ongoing.', url:'sensepod.html' },
  { category:'project', title:'Cyber Physical Systems Security', text:'Centre for Advanced Security Technology Development in Cyber Physical Systems. Role: Co-PI. Cost: Rs. 642.18 Lakhs. Sponsor: MeitY. Ongoing.', url:'project-details.html?index=12' }
];
