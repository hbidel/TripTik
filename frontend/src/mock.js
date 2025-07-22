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
          id: 8,
          name: "Tarte Tatin",
          description: "Upside-down apple tart with vanilla ice cream",
          price: "€8"
        },
        {
          id: 9,
          name: "Mousse au Chocolat",
          description: "Dark chocolate mousse with raspberry coulis",
          price: "€7"
        },
        {
          id: 10,
          name: "Crème Brûlée Vanille",
          description: "Classic vanilla crème brûlée with caramelized sugar",
          price: "€8"
        }
      ]
    }
  ],

  wines: [
    {
      id: 1,
      name: "Château de Bourbon",
      type: "Rouge",
      description: "Local red wine from Reunion Island",
      price: "€32"
    },
    {
      id: 2,
      name: "Sancerre",
      type: "Blanc",
      description: "Crisp Loire Valley white wine",
      price: "€38"
    },
    {
      id: 3,
      name: "Champagne Brut",
      type: "Pétillant",
      description: "House champagne selection",
      price: "€52"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      text: "Une ambiance exceptionnelle qui nous transporte directement dans un bistro parisien. La cuisine est remarquable !",
      rating: 5
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      text: "Le cadre intimiste et la qualité des plats font du Trip'Tik une adresse incontournable à la Réunion.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Legrand",
      text: "Service impeccable, décor chaleureux. Un vrai coup de cœur pour ce restaurant unique !",
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