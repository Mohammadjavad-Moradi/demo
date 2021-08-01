import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    women: {
        title: 'WOMEN',
        linkUrl: '/women',
        imgUrl: '/assets/women-icon.jpg',
        imageAlt: 'Woment category',
        content: {
            25: {
                id: 25,
                name: 'OWN THE RUN TEE',
                price: 30.00,
                mainImg: '/assets/womens/Own_the_Run_Tee_White_GJ9989_21_model.jpg',
                secondImg: '/assets/womens/Own_the_Run_Tee_White_GJ9989_23_hover_model.jpg',
                description: `Life gets busy and complicated. Some days you don't feel like you have the time, or the energy, for a run. Keep things simple with this adidas Own the Run t-shirt. It's soft, comfortable and quick-drying. Plus it's made with recycled materials, part of adidas' commitment to creating a more sustainable future. So you can feel good about the shirt on your back when you lay down those miles.`,
                specification: ['Crewneck', '100% recycled polyester mock eyelet', 'Soft and durable', 'Breathable running t-shirt', 'Moisture-absorbing AEROREADY', 'Reflective details', 'This product has been made with Primegreen, a series of high-performance recycled materials using no virgin polyester.', 'Imported', 'Product color: White', 'Product code: GJ9989'],
                allImg: ['/assets/womens/Own_the_Run_Tee_White_GJ9989_21_model.jpg','/assets/womens/Own_the_Run_Tee_White_GJ9989_23_hover_model.jpg','/assets/womens/Own_the_Run_Tee_White_GJ9989_22_model.jpg', '/assets/womens/Own_the_Run_Tee_White_GJ9989_25_model.jpg', '/assets/womens/Own_the_Run_Tee_White_GJ9989_41_detail.jpg', '/assets/womens/Own_the_Run_Tee_White_GJ9989_42_detail.jpg', '/assets/womens/Own_the_Run_Tee_White_GJ9989_43_detail.jpg', '/assets/womens/Own_the_Run_Tee_White_GJ9989_01_laydown.jpg']
            },
            26: {
                id: 26,
                name: 'ADICOLOR CLASSICS DRESS',
                price: 50.00,
                mainImg: '/assets/womens/Adicolor_Classics_Dress_Black_H38732_21_model.jpg',
                secondImg: '/assets/womens/Adicolor_Classics_Dress_Black_H38732_23_hover_model.jpg',
                description: `Instantly recognizable. Never predictable. Wear the 3-Stripes on this adidas dress and step out in a look that's equal parts sophistication and sports heritage. Soft cotton from top to bottom is comfy enough to wear on the couch. But you'll want to take it for a spin in the city.

                By buying cotton products from us, you're supporting more sustainable cotton farming.`,
                specification: ['Tight fit', 'Crewneck', '93% cotton, 7% elastane single jersey', 'Better Cotton Initiative', 'Imported', 'Product color: Black', 'Product code: H38732'],
                allImg: ['/assets/womens/Adicolor_Classics_Dress_Black_H38732_21_model.jpg','/assets/womens/Adicolor_Classics_Dress_Black_H38732_23_hover_model.jpg','/assets/womens/Adicolor_Classics_Dress_Black_H38732_25_model.jpg',
            '/assets/womens/Adicolor_Classics_Dress_Black_H38732_41_detail.jpg',
            '/assets/womens/Adicolor_Classics_Dress_Black_H38732_42_detail.jpg',
            '/assets/womens/Adicolor_Classics_Dress_Black_H38732_01_laydown.jpg']
            },
            27: {
                id: 27,
                name: 'HER STUDIO LONDON DRESS',
                price: 45.00,
                mainImg: '/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_21_model.jpg',
                secondImg: '/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_23_hover_model.jpg',
                description: `Savage meets status for a style that's as much sass as it is sport. Throw on this adidas dress for a night out or a fancy brunch. The bold print designed by HER Studio London combines baroque themes with florals for a whimsical look. The relaxed fit gives it a breezy, effortless feel.

                Our cotton products support sustainable cotton farming. This is part of our ambition to end plastic waste.`,
                specification: ['Loose fit', 'Crewneck', '100% cotton single jersey', 'HER Studio London print', 'Imported', 'Product color: Multicolor / White', 'Product code: GN3361'],
                allImg: ['/assets/mens/HER_Studio_London_Dress_Multicolor_GN3361_21_model.jpg','/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_23_hover_model.jpg','/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_25_model.jpg', '/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_41_detail.jpg', '/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_42_detail.jpg', '/assets/womens/HER_Studio_London_Dress_Multicolor_GN3361_01_laydown.jpg']
            },
            28: {
                id: 28,
                name: 'ADIDAS X MARIMEKKO FAST TEE',
                price: 40.00,
                mainImg: '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_21_model.jpg',
                secondImg: '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_23_hover_model.jpg',
                description: `Armi Ratia founded Marimekko in the '50s, and she believed a woman should be able to run in a dress if they wanted to. This adidas running t-shirt is designed with the same bold spirit that made the Finnish label ahead of its time. Wear the tee on race day, and the pattern will make it easy for your friends to find you. A loose cut gives you free movement, and AEROREADY keeps you dry.`,
                specification: ['Loose fit', 'Crewneck', '100% recycled polyester mock eyelet', 'Moisture absorbing', 'Primegreen', 'Imported', 'Product color: Vivid Red', 'Product code: GU2525'],
                allImg: ['/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_21_model.jpg','/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_23_hover_model.jpg','/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_22_model.jpg', '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_25_model.jpg', '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_41_detail.jpg', '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_42_detail.jpg', '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_43_detail.jpg', '/assets/womens/adidas_x_Marimekko_Fast_Tee_Red_GU2525_01_laydown.jpg']
            },
            29: {
                id: 29,
                name: 'ADIDAS X ZOE SALDANA AEROREADY TRACK JACKET',
                price: 60.00,
                mainImg: '/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_21_model.jpg',
                secondImg: '/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_23_hover_model.jpg',
                description: `Clearly inspired by heritage styles, this adidas track jacket mixes old with new. The elastic waistband and cuffs give a nod to the '80s while that glossy-looking print down the sleeves adds a modern flair. However you choose to round out the look, there's plenty of room for your individual style to shine through. And moisture-absorbing AEROREADY is there to help you feel dry as your day heats up.`,
                specification: ['Regular fit', 'Full zip with stand-up collar', '87% polyester, 13% elastane tricot', 'Side zip pockets', 'Elastic cuffs and hem', 'Imported', 'Product color: Wild Teal / Acid Yellow', 'Product code: GL3886'],
                allImg: ['/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_21_model.jpg','/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_23_hover_model.jpg','/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_25_model.jpg',
                '/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_41_detail.jpg',
                '/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_42_detail.jpg',
                '/assets/womens/adidas_x_Zoe_Saldana_AEROREADY_Track_Jacket_Turquoise_GL3886_01_laydown.jpg']
            },
            30: {
                id: 30,
                name: 'SPORT PERFORMANCE PRIMEGREEN DRESS',
                price: 110.00,
                mainImg: '/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_21_model.jpg',
                secondImg: '/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_23_hover_model.jpg',
                description: `Confidence on the course can lower your score. This adidas golf dress helps you get there. It's made of moisture-absorbing AEROREADY so you stay dry and comfortable. The soft, stretchy build and separate inner shorts ensure freedom of movement through your round. A three-button collar and micro-pleat details keep your look on point as you go for par.`,
                specification: ['Regular fit', 'Three-button sport collar', '91% recycled polyester, 9% elastane dobby', 'Soft feel', 'Moisture absorbing', 'Two front pockets, one back pocket with zip', 'Detached inner shorts', 'Micro pleats', 'Primegreen', 'Imported', 'Product color: Crew Navy', 'Product code: GR3626'],
                allImg: ['/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_21_model.jpg','/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_23_hover_model.jpg','/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_25_model.jpg', '/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_25_outfit.jpg', '/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_41_detail.jpg', '/assets/womens/Sport_Performance_Primegreen_Dress_Blue_GR3626_42_detail.jpg']
            }                           
        }
    },
    men: {
        title: 'MEN',
        linkUrl: '/men',
        imgUrl: '/assets/men-icon.jpg',
        imageAlt: 'Mens category',
        content: {
            7: {
                id: 7,
                name: 'Cobblestone-Print Recycled Content Polo',
                price: 65.00,
                mainImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg',
                secondImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg',
                description: `Make a statement on the course in this adidas golf polo shirt. It's made of lightweight fabric with a breathable feel so you can play through with no distractions. A slightly longer back hem keeps it tucked in. The allover print wears well at the clubhouse after you've sunk your last putt.`,
                specification: ['Regular fit', 'Three-button polo collar', '67% recycled polyester, 33% nylon jacquard', 'Dry, breathable feel', 'Lightweight fabric', 'Slight droptail hem', 'Imported', 'Product color: Sonic Aqua / Violet Tone / Crew Navy', 'Product code: GU2661'],
                allImg: ['/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_25_model.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM1.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM2.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM3.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_42_detail.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_01_laydown.jpg']
            },
            8: {
                id: 8,
                name: 'MEXICO HOME JERSEY',
                price: 90.00,
                mainImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg',
                secondImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg',
                description: 'Pride and passion. Azteca-style details in vivid hues leap out from the black backdrop of this Mexico Home Jersey. Soft fabric absorbs moisture to keep you comfortable even when things get tense on the soccer field. A woven badge adds the finishing touch.',
                specification: ['Regular fit', 'Ribbed crewneck', '100% recycled polyester interlock', 'Soccer jersey for Mexico fans', 'Moisture-absorbing AEROREADY', 'Ribbed cuffs', 'Mexico woven crest', 'Imported', 'Product color: Black / Real Magenta', 'Product code: FT9648'],
                allImg: ['/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_model.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_outfit.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_41_detail.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_42_detail.jpg', '/assets/mens/Mexico_Home_Jersey_Black_FT9648_01_laydown.png']
            },
            9: {
                id: 9,
                name: 'LOGO PLAY TEE',
                price: 35.00,
                mainImg: '/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg',
                secondImg: '/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg',
                description: `People say go big or go home. We say you can do both simultaneously. With this adidas t-shirt, specifically. Absolutely ready to make a statement while you're out and about, it's also so down to settle in on the couch or make an impression over video calls. Contrast colors and oversize Trefoils remix together for a bold look.`,
                specification: ['Regular fit', 'Ribbed crewneck', '100% cotton single jersey', 'Better Cotton Initiative', 'Product color: Black', 'Product code: H31314'],
                allImg: ['/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_25_model.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_41_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_42_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_01_laydown.jpg']
            },
            10: {
                id: 10,
                name: 'USA PANTS',
                price: 100.00,
                mainImg: '/assets/mens/USA_Pants_Blue_FR9667_21_model.jpg',
                secondImg: '/assets/mens/USA_Pants_Blue_FR9667_23_hover_model.jpg',
                description: `Blue sky and open fairways call. The light, breathable feel of these adidas golf pants lets you play through warm days in comfort. They have plenty of stretch to help you follow though with every swing and crouch to sight critical putts without restriction.`,
                specification: ['Regular fit', 'Belt loops and zip fly', '53% nylon, 36% polyester, 11% elastane twill', 'Breathable feel', 'Team USA golf pants', 'Front and back pockets', 'Imported', 'Product color: Dark Blue', 'Product code: FR9667'],
                allImg: ['/assets/mens/USA_Pants_Blue_FR9667_21_model.jpg','/assets/mens/USA_Pants_Blue_FR9667_22_model.jpg','/assets/mens/USA_Pants_Blue_FR9667_23_hover_model.jpg', '/assets/mens/USA_Pants_Blue_FR9667_25_model.jpg', '/assets/mens/USA_Pants_Blue_FR9667_41_detail.jpg', '/assets/mens/USA_Pants_Blue_FR9667_42_detail.jpg', '/assets/mens/USA_Pants_Blue_FR9667_43_detail.jpg']
            },
            11: {
                id: 11,
                name: 'FREELIFT TOKYO HEAT.RDY TENNIS TEE',
                price: 60.00,
                mainImg: '/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_21_model.jpg',
                secondImg: '/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_23_hover_model.jpg',
                description: `As the summer sun bakes Tokyo's courts, confidence is key. That's why some of the world's top players will be relying on this adidas tennis tee to keep them comfortable. Its clever design offers extra freedom of movement in the arms and stay-put coverage at the hem. Behind the scenes, cooling HEAT.RDY maximizes airflow to help you battle the heat. The flag-inspired design keeps you standing out.`,
                specification: ['Slim fit', 'Crewneck', '100% recycled polyester doubleknit', 'Breathable open-hole side panels', 'Shaped for active movements during play', 'Elastic cuffs', 'Allover graphic', 'Primeblue', 'Imported', 'Product color: App Solar Red / Black', 'Product code: H18184'],
                allImg: ['/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_21_model.jpg','/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_23_hover_model.jpg','/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_25_model.jpg',
                '/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_41_detail.jpg',
                '/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_42_detail.jpg',
                '/assets/mens/Freelift_Tokyo_HEAT.RDY_Tennis_Tee_Red_H18184_01_laydown.jpg']
            },
            12: {
                id: 12,
                name: 'TIRO 21 SWEAT HOODIE',
                price: 55.00,
                mainImg: '/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_21_model.jpg',
                secondImg: '/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_23_hover_model.jpg',
                description: `Relax, regroup, recover. This adidas hoodie is ideal for the quieter moments of soccer, like stretching before a match or heading home when training is through. The cotton-blend fleece feels soft and cozy. Pull up the roomy hood while you take a breather.

                Our cotton products support sustainable cotton farming. This is part of our ambition to end plastic waste.`,
                specification: ['Regular fit', 'Three-panel hood', '70% cotton, 30% recycled polyester fleece', 'Kangaroo pockets', 'Ribbed cuffs and hem', 'Imported', 'Product color: Black', 'Product code: GM7341'],
                allImg: ['/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_21_model.jpg','/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_23_hover_model.jpg','/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_25_model.jpg', '/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_41_detail.jpg', '/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_42_detail.jpg', '/assets/mens/Tiro_21_Sweat_Hoodie_Black_GM7341_01_laydown.jpg']
            }                           
        }
    },
    boys: {
        title: 'BOYS',
        linkUrl: '/boys',
        imgUrl: '/assets/boy-icon.jpg',
        imageAlt: 'boys category',
        content: {
            13: {
                id: 13,
                name: 'DISNEY MICKEY AND FRIENDS SHORTS AND TEE SET',
                price: 50.00,
                mainImg: '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_01_laydown.jpg',
                secondImg: '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_03_laydown_hover.jpg',
                description: `Some days, kids are silly enough to give Disney's Goofy a run for his money. Other days, they're more of a Mickey. Whoever they are today, the soft, stretchy feel of this adidas shorts-and-tee set gives them the comfort and freedom to be themselves.

                By buying cotton products from us, you're supporting more sustainable cotton farming.`,
                specification: ['Regular fit', 'Tee: Ribbed crewneck', 'Tee: 100% cotton single jersey', 'Shorts: 70% cotton, 30% recycled polyester French terry', 'Shorts: Drawcord on elastic waist', 'Shorts: Side pockets', '©Disney', 'Better Cotton Initiative', 'Imported', 'Product color: Black', 'Product code: H20316'],
                allImg: ['/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_01_laydown.jpg','/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_03_laydown_hover.jpg','/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_04_laydown.jpg', '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_05_laydown.jpg', '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_06_laydown.jpg', '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_41_detail.jpg', '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_42_detail.jpg', '/assets/boys/Disney_Mickey_and_Friends_Shorts_and_Tee_Set_Black_H20316_43_detail.jpg']
            },
            14: {
                id: 14,
                name: 'MANCHESTER UNITED 21/22 HOME JERSEY',
                price: 70.00,
                mainImg: '/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_01_laydown.jpg',
                secondImg: '/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_02_laydown_hover.jpg',
                description: `Youth. Courage. Success. The thee pillars of Manchester United's motto have brought the club more than a century of triumphs. With its clean red design and white ribbed crewneck, this juniors' adidas soccer jersey takes inspiration from the iconic kit that carried them to some of their most memorable moments. Made for fans, its soft fabric and moisture-absorbing AEROREADY keep you comfortable. A devil signoff on the back shows your pride.

                This product is made with Primegreen, a series of high-performance recycled materials.`,
                specification: ['Regular fit', 'Ribbed crewneck', '100% recycled polyester piqué', 'Moisture absorbing', 'Ribbed cuffs', 'Inner back neck signoff', 'Devil signoff below back collar','Manchester United woven crest', 'Imported', 'Product color: Real Red', 'Product code: GR3778'],
                allImg: ['/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_01_laydown.jpg','/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_02_laydown_hover.jpg','/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_41_detail.jpg',
                '/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_42_detail.jpg',
                '/assets/boys/Manchester_United_21-22_Home_Jersey_Red_GR3778_43_detail.jpg']
            },
            15: {
                id: 15,
                name: 'FC BAYERN 21/22 AWAY JERSEY',
                price: 70.00,
                mainImg: '/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_01_laydown.jpg',
                secondImg: '/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_02_laydown_hover.jpg',
                description: `An away jersey doesn't only represent a club, it reflects the place they call home. This juniors' adidas FC Bayern soccer jersey is inspired by the Munich Child, a symbol of the city. The smooth printed fabric displays a small coat of arms on the back of the neck. AEROREADY wicks moisture, keeping you comfortable all day.

                This product is made with Primegreen, a series of high-performance recycled materials.`,
                specification: ['Regular fit', 'Ribbed crewneck', '100% recycled polyester doubleknit', 'Moisture absorbing', 'Ribbed cuffs', 'FC Bayern heat-applied crest', 'Club artwork and "FC Bayern München" on upper back', 'Imported', 'Product color: Black', 'Product code: GR0484'],
                allImg: ['/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_01_laydown.jpg','/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_02_laydown_hover.jpg','/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_41_detail.jpg', '/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_42_detail.jpg', '/assets/boys/FC_Bayern_21-22_Away_Jersey_Black_GR0484_43_detail.jpg']
            },
            16: {
                id: 16,
                name: 'CAMO ALLOVER PRINT TEE',
                price: 65.00,
                mainImg: '/assets/boys/Camo_Allover_Print_Tee_White_EX9894_01_laydown.jpg',
                secondImg: '/assets/boys/Camo_Allover_Print_Tee_White_EX9894_02_laydown_hover.jpg',
                description: `The bold camo print on this juniors' adidas t-shirt pretty much guarantees you'll stand out in the halls. Soft cotton jersey means you'll be relaxed and at ease with all the extra attention. It's really a win-win.`,
                specification: ['Regular fit', 'Crewneck', '100% cotton jersey', 'Allover Warped Camo print', 'Screenprinted adidas Badge of Sport', 'Imported', 'Product color: White', 'Product code: EX9894'],
                allImg: ['/assets/boys/Camo_Allover_Print_Tee_White_EX9894_01_laydown.jpg','/assets/boys/Camo_Allover_Print_Tee_White_EX9894_02_laydown_hover.jpg','/assets/boys/Camo_Allover_Print_Tee_White_EX9894_41_detail.jpg', '/assets/boys/Camo_Allover_Print_Tee_White_EX9894_42_detail.jpg', '/assets/boys/Camo_Allover_Print_Tee_White_EX9894_43_detail.jpg']
            },
            17: {
                id: 17,
                name: 'CAMO SHORTS AND TEE SET',
                price: 35.00,
                mainImg: '/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_01_laydown.jpg',
                secondImg: '/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_04_laydown.jpg',
                description: `They're so vibrant, not even camouflage can make them blend in. Get them dressed to explore in this toddlers' adidas shorts and t-shirt set. Bright yellow splashes on the camo shout to their unstoppable energy. Soft cotton fabric means they'll be comfy, no matter where their discoveries take them.

                By buying cotton products from us, you're supporting more sustainable cotton farming.`,
                specification: ['Regular fit', 'Tee: Shoulder snaps for easy on and off (up to size 86)', '100% cotton single jersey', 'Shorts: Drawcord on elastic waist', 'Better Cotton Initiative', 'Imported', 'Product color: Night Sky / Multicolor', 'Imported', 'Product code: H20308'],
                allImg: ['/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_01_laydown.jpg','/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_04_laydown.jpg','/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_05_laydown.jpg',
                '/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_06_laydown.jpg',
                '/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_07_laydown.jpg',
                '/assets/boys/Camo_Shorts_and_Tee_Set_Blue_H20308_41_detail.jpg']
            },
            18: {
                id: 18,
                name: 'MEXICO AWAY JERSEY',
                price: 70.00,
                mainImg: '/assets/boys/Mexico_Away_Jersey_White_GC7946_01_laydown.jpg',
                secondImg: '/assets/boys/Mexico_Away_Jersey_White_GC7946_02_laydown_hover.jpg',
                description: `Clean and crisp, this adidas Mexico Away Jersey for juniors displays a design that began life in an artist's studio. Soft, quick-drying fabric keeps you comfortable. Standing out on the chest, a team badge lets fans show pride in their soccer team.`,
                specification: ['Regular fit', 'Ribbed V-neck', '100% recycled polyester interlock', 'Soccer jersey for Mexico fans', 'Moisture-absorbing AEROREADY', 'Ribbed cuffs', 'Mexico woven crest', 'This jersey is made with recycled polyester to save resources and decrease emissions', 'Imported', 'Product color: White', 'Product code: GC7946'],
                allImg: ['/assets/boys/Mexico_Away_Jersey_White_GC7946_01_laydown.jpg','/assets/boys/Mexico_Away_Jersey_White_GC7946_02_laydown_hover.jpg','/assets/boys/Mexico_Away_Jersey_White_GC7946_41_detail.jpg', '/assets/boys/Mexico_Away_Jersey_White_GC7946_42_detail.jpg', '/assets/boys/Mexico_Away_Jersey_White_GC7946_43_detail.jpg']
            }                           
        }
    },
    pets: {
        title: 'PETS',
        linkUrl: '/pets',
        imgUrl: '/assets/pets-icon.jpg',
        imageAlt: 'Pets category',
        content: {
            19: {
                id: 19,
                name: 'Cobblestone-Print Recycled Content Polo',
                price: 65.00,
                mainImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg',
                secondImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg',
                description: `Make a statement on the course in this adidas golf polo shirt. It's made of lightweight fabric with a breathable feel so you can play through with no distractions. A slightly longer back hem keeps it tucked in. The allover print wears well at the clubhouse after you've sunk your last putt.`,
                specification: ['Regular fit', 'Three-button polo collar', '67% recycled polyester, 33% nylon jacquard', 'Dry, breathable feel', 'Lightweight fabric', 'Slight droptail hem', 'Imported', 'Product color: Sonic Aqua / Violet Tone / Crew Navy', 'Product code: GU2661'],
                allImg: ['/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_25_model.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM1.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM2.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM3.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_42_detail.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_01_laydown.jpg']
            },
            20: {
                id: 20,
                name: 'MEXICO HOME JERSEY',
                price: 90.00,
                mainImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg',
                secondImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg',
                description: 'Pride and passion. Azteca-style details in vivid hues leap out from the black backdrop of this Mexico Home Jersey. Soft fabric absorbs moisture to keep you comfortable even when things get tense on the soccer field. A woven badge adds the finishing touch.',
                specification: ['Regular fit', 'Ribbed crewneck', '100% recycled polyester interlock', 'Soccer jersey for Mexico fans', 'Moisture-absorbing AEROREADY', 'Ribbed cuffs', 'Mexico woven crest', 'Imported', 'Product color: Black / Real Magenta', 'Product code: FT9648'],
                allImg: ['/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_model.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_outfit.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_41_detail.jpg',
            '/assets/mens/Mexico_Home_Jersey_Black_FT9648_42_detail.jpg', '/assets/mens/Mexico_Home_Jersey_Black_FT9648_01_laydown.png']
            },
            21: {
                id: 21,
                name: 'LOGO PLAY TEE',
                price: 35.00,
                mainImg: '/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg',
                secondImg: '/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg',
                description: `People say go big or go home. We say you can do both simultaneously. With this adidas t-shirt, specifically. Absolutely ready to make a statement while you're out and about, it's also so down to settle in on the couch or make an impression over video calls. Contrast colors and oversize Trefoils remix together for a bold look.`,
                specification: ['Regular fit', 'Ribbed crewneck', '100% cotton single jersey', 'Better Cotton Initiative', 'Product color: Black', 'Product code: H31314'],
                allImg: ['/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_25_model.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_41_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_42_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_01_laydown.jpg']
            },
            22: {
                id: 22,
                name: 'Cobblestone-Print Recycled Content Polo',
                price: 65.00,
                mainImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg',
                secondImg: '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg',
                description: `Make a statement on the course in this adidas golf polo shirt. It's made of lightweight fabric with a breathable feel so you can play through with no distractions. A slightly longer back hem keeps it tucked in. The allover print wears well at the clubhouse after you've sunk your last putt.`,
                specification: ['Regular fit', 'Three-button polo collar', '67% recycled polyester, 33% nylon jacquard', 'Dry, breathable feel', 'Lightweight fabric', 'Slight droptail hem', 'Imported', 'Product color: Sonic Aqua / Violet Tone / Crew Navy', 'Product code: GU2661'],
                allImg: ['/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_21_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_23_hover_model.jpg','/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_25_model.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM1.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM2.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_HM3.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_42_detail.jpg', '/assets/mens/Cobblestone-Print_Recycled_Content_Polo_Shirt_Turquoise_GU2661_01_laydown.jpg']
            },
            23: {
                id: 23,
                name: 'MEXICO HOME JERSEY',
                price: 90.00,
                mainImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg',
                secondImg: '/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg',
                description: 'Pride and passion. Azteca-style details in vivid hues leap out from the black backdrop of this Mexico Home Jersey. Soft fabric absorbs moisture to keep you comfortable even when things get tense on the soccer field. A woven badge adds the finishing touch.',
                specification: ['Regular fit', 'Ribbed crewneck', '100% recycled polyester interlock', 'Soccer jersey for Mexico fans', 'Moisture-absorbing AEROREADY', 'Ribbed cuffs', 'Mexico woven crest', 'Imported', 'Product color: Black / Real Magenta', 'Product code: FT9648'],
                allImg: ['/assets/mens/Mexico_Home_Jersey_Black_FT9648_21_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_23_hover_model.jpg','/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_model.jpg',
                '/assets/mens/Mexico_Home_Jersey_Black_FT9648_25_outfit.jpg',
                '/assets/mens/Mexico_Home_Jersey_Black_FT9648_41_detail.jpg',
                '/assets/mens/Mexico_Home_Jersey_Black_FT9648_42_detail.jpg', 'Mexico_Home_Jersey_Black_FT9648_01_laydown.png']
            },
            24: {
                id: 24,
                name: 'LOGO PLAY TEE',
                price: 35.00,
                mainImg: '/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg',
                secondImg: '/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg',
                description: `People say go big or go home. We say you can do both simultaneously. With this adidas t-shirt, specifically. Absolutely ready to make a statement while you're out and about, it's also so down to settle in on the couch or make an impression over video calls. Contrast colors and oversize Trefoils remix together for a bold look.`,
                specification: ['Regular fit', 'Ribbed crewneck', '100% cotton single jersey', 'Better Cotton Initiative', 'Product color: Black', 'Product code: H31314'],
                allImg: ['/assets/mens/Logo_Play_Tee_Black_H31314_21_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_23_hover_model.jpg','/assets/mens/Logo_Play_Tee_Black_H31314_25_model.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_41_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_42_detail.jpg', '/assets/mens/Logo_Play_Tee_Black_H31314_01_laydown.jpg']
            }                           
        }
    }
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.GET_DATA: 
            return state;
        default: 
            return state;
    }
};

export default shopReducer;