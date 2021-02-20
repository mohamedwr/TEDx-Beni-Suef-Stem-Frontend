// Components
import PersonCard from '../components/PersonCard';
import Separator from '../components/Separator';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TeamSection from '../components/TeamSection';

const teams = () => {
	return (
		<>
			<Nav />
			<Title>Team</Title>
			<section className='container py-12'>
				<h2 className='pl-4 mb-8 text-3xl font-bold text-black duration-300 ease-in-out border-l-8 border-red-500 rounded lg:text-4xl font-roboto dark:text-white'>
					<span className='font-black text-red-500'>
						TED<sup>x</sup>
					</span>{' '}
					Youth@BeniSuefSTEM Management Board
				</h2>
				<div className='flex flex-col space-y-6'>
					<div className='flex items-center justify-center'>
						<PersonCard
							name='Yussof Waleed'
							role='Chairman'
							img='/teams/leaders/Chairman.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Ahmed Sayed'
							role='Co-Chairman'
							img='/teams/leaders/Co-Chairman.png'
							margin
						/>
						<PersonCard
							name='Salma Ahmed'
							role='CEO'
							img='/teams/leaders/CEO.png'
							margin
						/>
					</div>

					<div className='flex flex-wrap items-center justify-center'>
						<PersonCard
							name='Salma Ahmed'
							role='Multi-Media Chief'
							img='/teams/leaders/Multi-Media.png'
							margin
						/>

						<PersonCard
							name='Mohamed Hisham'
							role='Digital-Marketing Chief'
							img='/teams/leaders/Digital-Marketing-Chief.png'
							margin
						/>

						<PersonCard
							name='Karem Nabil'
							role='PR & FR Chief'
							img='/teams/leaders/PR-&-FR.png'
							margin
						/>
					</div>
				</div>
			</section>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='HR Committee'
				leaders={[
					{ name: 'Eman Saleh', role: 'Director', img: '/teams/eman.png' },
					{
						name: 'Medhat Atef',
						role: 'Co Director',
						img: '/teams/medhat_atef.png',
					},
					{
						name: 'Ahmed Rashed',
						role: 'Co Director',
						img: '/teams/medhat_atef.png',
					},
					{
						name: 'Reem Mohamed',
						role: 'Instructor',
						img: '/teams/reem_mohamed.png',
					},
				]}
				members={[
					{
						name: 'Sonsdos Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866692/HR/Sonsdos%20Mohamed%20_hqv1df.jpg',
					},
					{
						name: 'Shahd Youssef',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866728/HR/Shahd_Youssef_nioowi.jpg',
					},
					{
						name: 'Ahmed Gouda',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866765/HR/Ahmed_Gouda_qgragk.png',
					},
					{
						name: 'Alaa AbuElwafa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866801/HR/Alaa_AbuElwafa_cx75sh.png',
					},
					{
						name: 'Kerolos Talaat',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866838/HR/Kerolos_Talaat_rffcfn.png',
					},
					{
						name: 'Moaz Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866878/HR/Moaz_Mohamed_ylmpkm.png',
					},
					{
						name: 'Naden Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866922/HR/Naden_Mohamed_e3ucxa.png',
					},
					{
						name: 'Nouran Elgharabawy',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866963/HR/Nouran_Elgharabawy_crikqy.png',
					},
					{
						name: 'Roaa Gamal',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867006/HR/Roaa_Gamal_Eldin_mhazjf.png',
					},
					{
						name: 'Rovana Magdy',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867054/HR/Rovana_Magdy_HR_rer22a.jpg',
					},
					{
						name: 'Tawfik',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867113/HR/Tawfik_mjso6s.png',
					},
					{
						name: 'Yousif Yasser',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867165/HR/Yousif_Yasser_t2wsas.png',
					},
					{
						name: 'Eyad Nasser',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867214/HR/Eyad_Nasser_nxhulu.jpg',
					},
					{
						name: 'Shahd Mostafa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613870303/HR/Shahd_Mostafa_sqac6p.png',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Public Relations Committee'
				leaders={[
					{
						name: 'Menna Ayman',
						role: 'Director',
						img: '/teams/menna_ayman.png',
					},
					{
						name: 'Mera Ayman',
						role: 'Co Director',
						img: '/teams/mera_ayman.png',
					},
					{
						name: 'Sara Ashraf',
						role: 'Co Director',
						img: '/teams/sara_ashraf.png',
					},
				]}
				members={[
					{
						name: 'Alia Sherif',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868680/pr/Alia_Sherif_ca6diy.png',
					},
					{
						name: 'Aya Darwish',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868796/pr/Aya_Darwish_ppsvgm.jpg',
					},
					{
						name: 'Aya Reda',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869356/pr/Aya_Reda_vcgpmj.png',
					},
					{
						name: 'Ayman Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869357/pr/Ayman_Ahmed_bg3teh.png',
					},
					{
						name: 'Gehad Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869359/pr/Gehad_Ahmed_cjet8j.png',
					},
					{
						name: 'Maha Mostafa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869361/pr/Maha_Mostafa_kh1ldf.jpg',
					},
					{
						name: 'Menna Mostafa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869365/pr/Menna_Mostafa_cduhln.png',
					},
					{
						name: 'Mohamed Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869371/pr/Mohamed_Ahmed_kofxuo.png',
					},
					{
						name: 'Nada Badawy',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869377/pr/Nada_Badawy_uc05zu.jpg',
					},
					{
						name: 'Sohila Hussien',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869385/pr/Sohila_Hussien_bdzb5t.png',
					},
					{
						name: 'Yousef Mahmoud',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869393/pr/Yousef_Mahmoud_ubsyid.png',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='FundRasing Committee'
				leaders={[
					{
						name: 'leqaa atef',
						role: 'Director',
						img: '/teams/leqaa_atef.png',
					},
					{
						name: 'Kholod',
						role: 'Co Director',
						img: '/cover.jpg',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Social Media Committee'
				leaders={[
					{
						name: 'Menna Ibrahim',
						role: 'Director',
						img: '/teams/menna_ibrahim.png',
					},
					{
						name: 'Amany Essam',
						role: 'Co Director',
						img: '/teams/amany_essam.png',
					},
				]}
				members={[
					{
						name: 'Amr Khaled',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869774/Social%20Media/Amr_Khaled_ocvd6y.png',
					},
					{
						name: 'Eman Nashaat',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869792/Social%20Media/Eman_Nashaat_SM_l1p178.jpg',
					},
					{
						name: 'Roaa Hani',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869811/Social%20Media/Roaa_Hani_ios1ac.png',
					},
					{
						name: 'Mohamed El-Shahawy',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869710/Social%20Media/Mohamed_El-Shahawy_g0fsry.jpg',
					},
					{
						name: 'lourya kotb',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869730/Social%20Media/lourya_kotb_plinbw.jpg',
					},
					{
						name: 'Ahmed Khaled',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869752/Social%20Media/Ahmed_Khaled_egtwhe.jpg',
					},
					{
						name: 'Youssef Alaa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613869826/Social%20Media/Youssef_Alaa_yfhaka.png',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Content Writing Committee'
				leaders={[
					{
						name: 'Shahd Adel',
						role: 'Director',
						img: '/teams/shahd_adel.png',
					},
					{
						name: 'Rawda',
						role: 'Co Director',
						img: '/teams/rawda.png',
					},
				]}
				members={[
					{
						name: 'Engy Ibrahim',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865750/Content%20Writing/Engy_Ibrahim_bxtj4p.jpg',
					},
					{
						name: 'Abdo M abdellatif',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865763/Content%20Writing/Abdo_M.abdellatif_wqiit1.jpg',
					},
					{
						name: 'Basil Osama',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865777/Content%20Writing/Basil_Osama_mbrcpp.png',
					},
					{
						name: 'Menna Nasser',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865820/Content%20Writing/Menna_Nasser_gu1ydo.jpg',
					},
					{
						name: 'Mona Helmy',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865837/Content%20Writing/Mona_Helmy_ltabms.png',
					},
					{
						name: 'Myar Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865854/Content%20Writing/Myar_Mohamed_jczfdq.png',
					},
					{
						name: 'Renad Ehab',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865873/Content%20Writing/Renad_Ehab_qj6mm6.png',
					},
					{
						name: 'Shahd walid',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865893/Content%20Writing/Shahd_walid_ddlm1a.jpg',
					},
					{
						name: 'Steven Ibrahim',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865916/Content%20Writing/Steven_Ibrahim_my2dp0.jpg',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Graphic Design Committee'
				leaders={[
					{
						name: 'Shahd Hitham',
						role: 'Supervisor',
						img: '/teams/shahd_hitham.png',
					},
				]}
				members={[
					{
						name: 'Abd El-Rahman Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866086/Graphic%20Design/Abd%20El-Rahman%20Ahmed.jpg',
					},
					{
						name: 'Adham Hussien',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866109/Graphic%20Design/Adham_Hussien_rib1tm.png',
					},
					{
						name: 'Ahmed Azmi Awad',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866134/Graphic%20Design/Ahmed_Azmi_Awad_Ali_tvisal.jpg',
					},
					{
						name: 'Doha Hesham',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866159/Graphic%20Design/Doha_Hesham_ncuwzh.png',
					},
					{
						name: 'Ebram Atef',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866185/Graphic%20Design/Ebram_Atef_yfhwvt.jpg',
					},
					{
						name: 'Kerolos Maged',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866213/Graphic%20Design/Kerolos_Maged_kac0ds.jpg',
					},
					{
						name: 'Mahmoud Hossam',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866243/Graphic%20Design/Mahmoud_Hossam_wh5ood.jpg',
					},
					{
						name: 'Mohamed Elsayed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866276/Graphic%20Design/Mohamed_Elsayed_ms71ue.png',
					},
					{
						name: 'Nada Ashraf',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866313/Graphic%20Design/Nada_Ashraf_optrvm.png',
					},
					{
						name: 'Nourseen NourEldin',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866344/Graphic%20Design/Nourseen_NourEldin_zayrj1.png',
					},
					{
						name: 'Youssef Elkady',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613866418/Graphic%20Design/Youssef_Elkady_ugmrpr.png',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Video Editing Committee'
				leaders={[
					{
						name: 'Mohamed Gamal',
						role: 'Director',
						img: '/teams/mohamed_gamal.png',
					},
				]}
				members={[
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
					{ name: 'SOON SOON', role: 'Member', img: '/cover.jpg' },
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Coaching Committee'
				leaders={[
					{
						name: 'Menna Mahmoud',
						role: 'Director',
						img: '/teams/menna_mahmoud.png',
					},
					{
						name: 'Ahmed Abdelhady',
						role: 'Co Director',
						img: '/teams/ahmed_abdelhady.png',
					},
				]}
				members={[
					{
						name: 'Ahmed Zidan',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865476/Coaching/Ahmed_Zidan_glqtay.png',
					},
					{
						name: 'Amira Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865476/Coaching/Amira_Ahmed_cqwunb.jpg',
					},
					{
						name: 'Ganna Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865477/Coaching/Ganna_Mohamed_uylmxv.jpg',
					},
					{
						name: 'Kerolos Remon',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865482/Coaching/Kerolos_Remon_Mounir_eemrcd.png',
					},
					{
						name: 'Mariam Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865487/Coaching/Mariam_Mohamed_z3apjy.png',
					},
					{
						name: 'Mohamed Abdelrazik',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865493/Coaching/Mohamed_Abdelrazik_vz64zl.png',
					},
					{
						name: 'Nayrouz Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865500/Coaching/Nayrouz_Ahmed_qcq12l.jpg',
					},
					{
						name: 'Ola Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865510/Coaching/Ola_Ahmed_xfybnz.png',
					},
					{
						name: 'Shahd Elsayed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865521/Coaching/Shahd_Elsayed_coquwm.png',
					},
					{
						name: 'Zainab Saad',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613865531/Coaching/Zainab_Saad_e2amc3.png',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Organizing Committee'
				leaders={[
					{
						name: 'Renad Wael',
						role: 'Director',
						img: '/teams/renad_wael.png',
					},
					{
						name: 'Shaza Mohamed',
						role: 'Co Director',
						img: '/teams/shaza_mohamed.png',
					},
				]}
				members={[
					{
						name: 'Shahd Taha',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868541/OC/Shahd_Taha_zg8u5y.png',
					},
					{
						name: 'Sayed Khalifa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868471/OC/Sayed_Khalifa_swaxr4.png',
					},
					{
						name: 'Salsabil Ali',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868398/OC/Salsabil_Ali_fuitfh.png',
					},
					{
						name: 'Rahma Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868329/OC/Rahma_Mohamed_h5lb4h.png',
					},
					{
						name: 'Raghad Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868257/OC/Raghad_Mohamed_f1zvix.png',
					},
					{
						name: 'Omnia Mostafa',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868194/OC/omnia_Mostafa_x7gn5q.png',
					},
					{
						name: 'Nour Baz',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868130/OC/Nour_Baz_qd3ykz.png',
					},
					{
						name: 'Mohanad Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613868070/OC/Mohanad_Ahmed_fmcsjn.jpg',
					},
					{
						name: 'Menna',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867998/OC/Menna_Al_Mawajiry_rmiknt.jpg',
					},
					{
						name: 'Mazen Wael',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867933/OC/Mazen_Wael_bhr3yc.png',
					},
					{
						name: 'Marina Nabil',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867875/OC/Marina_Nabil_OC_svsnlw.jpg',
					},
					{
						name: 'Maram Mohamed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867818/OC/Maram_Mohamed_spg055.png',
					},
					{
						name: 'Manar Saad',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867762/OC/Manar_Saad_lbdhlx.png',
					},
					{
						name: 'Huda Hossam Eldin',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867705/OC/Huda_Hossam_Eldin_m5ztlp.png',
					},
					{
						name: 'Fatma Sameer',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867650/OC/Fatma_Sameer_itqzwx.png',
					},
					{
						name: 'Fatma Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867598/OC/Fatma_Ahmed_fbifcu.png',
					},
					{
						name: 'Donia Farid',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867546/OC/Donia_Farid_nwg7tw.png',
					},
					{
						name: 'Amany Osman',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867495/OC/Amany_Osman_kwbjxw.png',
					},
					{
						name: 'Sondos Ahmed',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867445/OC/Sondos_Ahmed_cgzcgg.jpg',
					},
					{
						name: 'Rahaf Khalid',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867395/OC/Rahaf_Khalid_av4tik.jpg',
					},
					{
						name: 'Mennatallah Khaled',
						role: 'Member',
						img:
							'https://res.cloudinary.com/dxaqlmgag/image/upload/v1613867347/OC/Mennatallah_Khaled_Mohamed_Ibrahim_ogag0v.jpg',
					},
				]}
			/>

			<div className='container'>
				<Separator />
			</div>

			<TeamSection
				name='Technical Support Committee'
				leaders={[
					{
						name: 'Devien George',
						role: 'Director',
						img: '/teams/devien_george.png',
					},
					{
						name: 'Gasser Abdelraziik',
						role: 'Co Director',
						img: '/teams/gasser.png',
					},
				]}
			/>
			<Footer />
		</>
	);
};

export default teams;
