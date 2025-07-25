// Mock data for Trip'Tik Restaurant Website
export const mockData = {
  restaurant: {
    name: "Trip'Tik",
    tagline: "Modern Bistro • Traditional Soul",
    location: "Saint-Pierre, Reunion Island",
    description: "A modern and welcoming bistro, blending traditional spirit with contemporary touches. Our cozy and intimate interior, with exposed rubble walls and shelves filled with wine bottles, evokes the soul of Parisian bistros while bringing a touch of modernity.",
    phone: "0262 59 66 94",
    email: "contact@triptik-reunion.com",
    address: "7 rue Auguste Babet, 97410 Saint-Pierre, Reunion Island",
    instagram: "https://www.instagram.com/triptikrestaurant/",
    hours: {
      weekdays: "12:00 - 14:30 • 19:00 - 22:30",
      saturday: "19:00 - 23:00",
      weekend: "Fermé",
      closed: "Dimanche et Lundi"
    }
  },
  
  navigation: [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ],

  menuCategories: [
    {
      id: 1,
      name: "Entrées",
      items: [
        {
          id: 1,
          name: "Tataki De Thon",
          description: "Thon snacké juste saisi, julienne de navet et papaye, mayonnaise au wasabi, gingembre confit et wakamé. Fraîcheur iodée et peps exotique au rendez-vous.",
          price: "12,00 €"
        },
        {
          id: 2,
          name: "Quiche Lorraine Déstructurée",
          description: "Pâte brisée croustillante, lard grillé, flan onctueux au syphon et tuile d'emmental. Toute la gourmandise de la Lorraine en version contemporaine.",
          price: "10,00 €"
        },
        {
          id: 3,
          name: "Patate Douce Façon Gemüse",
          description: "Patate douce rôtie, feta, courgette snackée, éclats de grenade, menthe parfumée et noisettes torréfiées. Une explosion végétale en bouche.",
          price: "10,00 €"
        },
        {
          id: 4,
          name: "Poireaux Vinaigrette",
          description: "Poireaux braisés fondants, œuf poché, espuma aérien, pickles croquants de poireau et gressin maison. Un jeu de textures et de saveurs en toute légèreté.",
          price: "10,00 €"
        },
        {
          id: 5,
          name: "Z'escargots Du Tampon",
          description: "Nappés d'une persillade créole relevée à l'ail et aux fines herbes. Une invitation au terroir réunionnais.",
          price: "x6: 12,00 € / x12: 20,00 €"
        }
      ]
    },
    {
      id: 2,
      name: "Plats Principaux",
      items: [
        {
          id: 6,
          name: "Magret De Canard",
          description: "Magret tendre cuisson basse température, confit d'oignons en sauce meurette, mille-feuille de pommes de terre crousti-fondantes et carottes rôties. Une vraie gourmandise pour les amateurs de finesse.",
          price: "25,00 €"
        },
        {
          id: 7,
          name: "Cordon Bleu",
          description: "Cordon bleu de veau généreux et fait maison, nappé d'une sauce crème aux champignons, accompagné de spaetzle moelleux et de courgettes grillées. Une assiette réconfortante et pleine de caractère.",
          price: "24,00 €"
        },
        {
          id: 8,
          name: "Pièce Du Boucher",
          description: "Une viande juteuse cuite à la perfection, sublimée par un beurre maître d'hôtel fondant et des potatoes maisons croustillantes à souhait.",
          price: "20,00 €"
        },
        {
          id: 9,
          name: "Poulpe Grillé",
          description: "Poulpe tendre saisi au gril, écrasé de pomme de terre à l'olive, chimichurri maison et poivrons confits. Voyage garanti entre terre et mer.",
          price: "23,00 €"
        },
        {
          id: 10,
          name: "Pavé De Daurade",
          description: "Dorade meunière, peau croustillante et chair délicate, servie avec des légumes glacés et un riz pilaf parfumé. Une assiette marine tout en élégance.",
          price: "23,00 €"
        },
        {
          id: 11,
          name: "Risotto Pesto",
          description: "Risotto crémeux au pesto maison, burrata coulante, tomates confites, caviar d'aubergine et amandes effilées. Une balade méditerranéenne végétarienne pleine de soleil.",
          price: "22,00 €"
        }
      ]
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        {
          id: 12,
          name: "Ananas Rôti",
          description: "Ananas rôti au beurre salé, ganache onctueuse au chocolat blanc et brunoise d'ananas frais. Fraîcheur, douceur, et une pointe d'exotisme.",
          price: "11,00 €"
        },
        {
          id: 13,
          name: "Brownie Chocolat",
          description: "Brownie fondant, noix de macadamia croquantes, ganache aux chocolats blanc et noir. Pour les amoureux du chocolat.",
          price: "11,00 €"
        },
        {
          id: 14,
          name: "Crème Brulée Du Moment",
          description: "L'inspiration sucrée du chef selon la saison…laissez-vous surprendre !",
          price: "8,00 €"
        },
        {
          id: 15,
          name: "Moelleux Chocolat",
          description: "Meringue craquante, confiture de patate douce à la vanille, segments d'orange et sorbet de tangor. Un dessert aérien, fruité et étonnant.",
          price: "11,00 €"
        },
        {
          id: 16,
          name: "Café Ou Thé Gourmand",
          description: "Un assortiment de mini douceurs maison pour finir en beauté sans devoir choisir.",
          price: "10,00 €"
        },
        {
          id: 17,
          name: "Dégustation De Fromage",
          description: "Sélection de fromages du moment x3, (±100g)",
          price: "12,00 €"
        }
      ]
    },
    {
      id: 4,
      name: "Menu Enfant",
      items: [
        {
          id: 18,
          name: "Menu Enfant",
          description: "Demi portion de la Pièce Du Boucher OU du Poisson Du Jour + Garniture au choix + Sirop + Boule de glace ou migniardises",
          price: "14,00 €"
        }
      ]
    }
  ],

  wines: [
    // Vins Rouges
    {
      id: 1,
      name: "Languedoc",
      type: "Rouge",
      description: "L'intemporel - AOP Languedoc - 2022",
      price: "27€"
    },
    {
      id: 2,
      name: "Rouge de Garde",
      type: "Rouge", 
      description: "AOP Languedoc - Domaine Saint Pierre",
      price: "32€"
    },
    {
      id: 3,
      name: "L'Air de Rien",
      type: "Rouge",
      description: "AOP Minervois - 2022",
      price: "30€"
    },
    {
      id: 4,
      name: "Vallée du Rhône",
      type: "Rouge",
      description: "AOP Côtes du Rhône - 2021",
      price: "30€"
    },
    {
      id: 5,
      name: "Côtes du Roussillon",
      type: "Rouge", 
      description: "AOP Côtes du Roussillon Villages",
      price: "40€"
    },
    
    // Vins Blancs
    {
      id: 6,
      name: "Sud Ouest",
      type: "Blanc",
      description: "Côtes de Gascogne - IGP",
      price: "26€"
    },
    {
      id: 7,
      name: "Chablis",
      type: "Blanc",
      description: "AOP Chablis - 2022",
      price: "46€"
    },
    {
      id: 8,
      name: "Languedoc Blanc",
      type: "Blanc",
      description: "AOP Languedoc - Pic Saint Loup",
      price: "27€"
    },
    {
      id: 9,
      name: "Vallée du Rhône Blanc",
      type: "Blanc",
      description: "AOP Côtes du Rhône",
      price: "32€"
    },
    
    // Vins Rosés  
    {
      id: 10,
      name: "Côte de Provence",
      type: "Rosé",
      description: "AOP Côtes de Provence - 2023",
      price: "34€"
    },
    {
      id: 11,
      name: "Rosé de Rêve",
      type: "Rosé", 
      description: "IGP Côtes Catalanes - Orange/Greffe",
      price: "30€"
    },
    
    // Champagnes
    {
      id: 12,
      name: "Yveline Prat",
      type: "Champagne",
      description: "Champagne Premier Cru",
      price: "69€"
    },
    {
      id: 13,
      name: "Billecart Salmon",
      type: "Champagne",
      description: "Brut Réserve - NV",
      price: "120€"
    }
  ],

  beverages: [
    // Cocktails
    {
      category: "Cocktails",
      items: [
        { name: "Mojito", price: "8€" },
        { name: "Caipirinha", price: "8€" },
        { name: "Kalou", price: "8€" },
        { name: "Rhum arrangé", price: "7€" },
        { name: "Whisky Sour", price: "9€" },
        { name: "Punch Coco", price: "8€" },
        { name: "Piña Colada", price: "9€" },
        { name: "Bloody Mary", price: "8€" }
      ]
    },
    
    // Bières
    {
      category: "Bières",
      items: [
        { name: "Pression 25cl", price: "3,50€" },
        { name: "Pression 50cl", price: "5,50€" },
        { name: "Dodo (33cl)", price: "4,50€" },
        { name: "Heineken (33cl)", price: "4,50€" },
        { name: "Desperados (33cl)", price: "5€" }
      ]
    },
    
    // Whiskys
    {
      category: "Whiskys", 
      items: [
        { name: "Jameson", price: "6€" },
        { name: "Jack Daniel's", price: "7€" },
        { name: "Chivas 12 ans", price: "12€" },
        { name: "Macallan 12 ans", price: "15€" }
      ]
    },
    
    // Softs
    {
      category: "Softs & Jus",
      items: [
        { name: "Jus d'orange frais", price: "4€" },
        { name: "Limonade maison", price: "4€" },
        { name: "Thé glacé maison", price: "4€" },
        { name: "Coca Cola", price: "3,50€" },
        { name: "Eau plate/gazeuse", price: "3€" }
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Helene Baron Hoarau",
      text: "Très bon moment au Trip Tik. Accueil et service très agréable, chaleureux. Cuisine de qualité et si généreuse. Une petite carte mais parfaitement maîtrisée avec des produits frais et simples mais parfaitement exécutés avec du goût. Le café gourmand est excellent avec une pâte artisanale de très bonne qualité.",
      rating: 5
    },
    {
      id: 2,
      name: "E.M.",
      text: "Une adresse qu'il ne faut pas manquer ! Un endroit atypique où l'art se mélange avec un petit fond musical appréciable. Côté bar et cuisine, un joli menu dans une carte limitée mais de qualité, une cuisine inventive et savoureuse... À découvrir !",
      rating: 5
    },
    {
      id: 3,
      name: "Val Val",
      text: "Une carte qui sait s'adapter à différents goûts gourmets avec des produits frais délicatement cuisinés. J'ai emmené ma maman de 96 ans qui s'est régalée ! Longue vie au Trip'Tik.",
      rating: 5
    },
    {
      id: 4,
      name: "Thousand Roses",
      text: "Très bon restaurant, situé en centre ville de St Pierre, dans une ambiance bistrot parisien authentique, et une carte qui change régulièrement. Cuisine inventive et savoureuse, service de qualité qui se traduit en choix vigoureux à la carte.",
      rating: 5
    }
  ],

  features: [
    {
      icon: "Wine",
      title: "Cave à Vins Sélectionnée",
      description: "Une sélection exceptionnelle de vins locaux et français soigneusement choisie."
    },
    {
      icon: "Users",
      title: "Ambiance Intimiste",
      description: "Tables espacées dans un cadre cosy parfait pour vos moments en famille ou entre amis."
    },
    {
      icon: "Chef",
      title: "Cuisine Authentique",
      description: "Plats traditionnels français revisités avec une touche créole locale."
    },
    {
      icon: "Music",
      title: "Atmosphère Jazz",
      description: "Musique jazz en fond sonore pour créer une atmosphère détendue et sophistiquée."
    }
  ],

  galleryImages: [
    {
      id: 1,
      alt: "Interior dining room with exposed walls",
      caption: "Notre salle principale avec ses murs apparents"
    },
    {
      id: 2,
      alt: "Wine display and bar area",
      caption: "Cave à vins et espace bar"
    },
    {
      id: 3,
      alt: "Cozy table setting",
      caption: "Table dressée dans notre atmosphère intimiste"
    },
    {
      id: 4,
      alt: "Chef preparing dish",
      caption: "Notre chef en action"
    }
  ]
};