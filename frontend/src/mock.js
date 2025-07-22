// Mock data for Trip'Tik Restaurant Website
export const mockData = {
  restaurant: {
    name: "Trip'Tik",
    tagline: "Modern Bistro • Traditional Soul",
    location: "Reunion Island",
    description: "A modern and welcoming bistro, blending traditional spirit with contemporary touches. Our cozy and intimate interior, with exposed rubble walls and shelves filled with wine bottles, evokes the soul of Parisian bistros while bringing a touch of modernity.",
    phone: "+262 262 12 34 56",
    email: "contact@triptik-reunion.com",
    address: "123 Rue de la République, Saint-Denis, Reunion Island",
    hours: {
      weekdays: "12:00 - 14:30 • 19:00 - 22:30",
      weekend: "12:00 - 15:00 • 19:00 - 23:00",
      closed: "Monday"
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
          name: "Terrine de Canard aux Pistaches",
          description: "Duck terrine with pistachios, served with toasted brioche",
          price: "€14"
        },
        {
          id: 2,
          name: "Salade de Chèvre Chaud",
          description: "Warm goat cheese salad with honey and walnuts",
          price: "€12"
        },
        {
          id: 3,
          name: "Soupe à l'Oignon Gratinée",
          description: "Traditional French onion soup with gruyère cheese",
          price: "€10"
        }
      ]
    },
    {
      id: 2,
      name: "Plats Principaux",
      items: [
        {
          id: 4,
          name: "Coq au Vin",
          description: "Chicken braised in red wine with pearl onions and mushrooms",
          price: "€22"
        },
        {
          id: 5,
          name: "Bouillabaisse Créole",
          description: "Local fish stew with Reunion spices and rouille",
          price: "€28"
        },
        {
          id: 6,
          name: "Entrecôte aux Échalotes",
          description: "Ribeye steak with shallot confit and herb butter",
          price: "€26"
        },
        {
          id: 7,
          name: "Risotto aux Fruits de Mer",
          description: "Creamy seafood risotto with local prawns and scallops",
          price: "€24"
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