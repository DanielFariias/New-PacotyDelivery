const data = [
  // Beleza
  {
    type: 'Beauty',
    title: "Barbearia Sr. Viller",
    link: "https://api.whatsapp.com/send?phone=5585992374476"
  },
  {
    type: 'Beauty',
    title: "Barbearia Bruno Lima",
    link: "https://api.whatsapp.com/send?phone=5585986848126"
  },
  {
    type: 'Beauty',
    title: "Bronze da Serra",
    link: "https://api.whatsapp.com/send?phone=5585991166452"
  },
  {
    type: 'Beauty',
    title: "Espaço de Beleza Vitória",
    link: "https://api.whatsapp.com/send?phone=5585988346647"
  },
  {
    type: 'Beauty',
    title: "Carla Andrade Cortes",
    link: "https://api.whatsapp.com/send?phone=5585986359156"
  },
  {
    type: 'Beauty',
    title: "Espaço Atila Araújo",
    link: "https://api.whatsapp.com/send?phone=5585987214250"
  },
  // Roupas
  {
    type: 'Clothes',
    title: "Gn Modas",
    link: "https://api.whatsapp.com/send?phone=5585996026888"
  },
  {
    type: 'Clothes',
    title: "Belíssima",
    link: "https://api.whatsapp.com/send?phone=5585986437549"
  },
  {
    type: 'Clothes',
    title: "Ateliê da Moda",
    link: "https://api.whatsapp.com/send?phone=5585989403478"
  },
  {
    type: 'Clothes',
    title: "Galerie",
    link: "https://api.whatsapp.com/send?phone=5585989045858"
  },
  {
    type: 'Clothes',
    title: "Maciço Imports",
    link: "https://api.whatsapp.com/send?phone=5585997491480"
  },
  {
    type: 'Clothes',
    title: "Bebê Cheiroso",
    link: "https://api.whatsapp.com/send?phone=5585988197186"
  },
  {
    type: 'Clothes',
    title: "Bem Calçado",
    link: "https://api.whatsapp.com/send?phone=5585986950009"
  },
  {
    type: 'Clothes',
    title: "Boutique Serrana",
    link: "https://api.whatsapp.com/send?phone=5585988523434"
  },
  {
    type: 'Clothes',
    title: "Estilo Mulher",
    link: "https://api.whatsapp.com/send?phone=5585985367274"
  },
  {
    type: 'Clothes',
    title: "Fafá Modas",
    link: "https://api.whatsapp.com/send?phone=5585988645818"
  },
  {
    type: 'Clothes',
    title: "Criança Feliz",
    link: "https://api.whatsapp.com/send?phone=5585988686585"
  },
  // Restaurant
  {
    type: 'Restaurant',
    title: "Divino Sabor",
    link: "https://api.whatsapp.com/send?phone=5585988679493"
  },
  {
    type: 'Restaurant',
    title: "Soumi Casa de Sushi",
    link: "https://api.whatsapp.com/send?phone=5585991790222"
  },
  {
    type: 'Restaurant',
    title: "Salgadinhos da Osana",
    link: "https://api.whatsapp.com/send?phone=5585989915303"
  },
  {
    type: 'Restaurant',
    title: "Tempero Portugês",
    link: "https://api.whatsapp.com/send?phone=5585996585872"
  },
  {
    type: 'Restaurant',
    title: "Família Doce",
    link: "https://api.whatsapp.com/send?phone=5585989913610"
  },
  {
    type: 'Restaurant',
    title: "Praça Gourmet",
    link: "https://api.whatsapp.com/send?phone=5585987595577"
  },
  {
    type: 'Restaurant',
    title: "Panificadora Pacoti",
    link: "https://api.whatsapp.com/send?phone=5585988378914"
  },
  {
    type: 'Restaurant',
    title: "Lourenço Gourmet",
    link: "https://api.whatsapp.com/send?phone=5585996814003"
  },
  {
    type: 'Restaurant',
    title: "Space Burguer",
    link: "https://api.whatsapp.com/send?phone=5585985020327"
  },
  {
    type: 'Restaurant',
    title: "Mineiro Casa de Amigos",
    link: "https://api.whatsapp.com/send?phone=5585988188003"
  },
  {
    type: 'Restaurant',
    title: "Baião Gostoso",
    link: "https://api.whatsapp.com/send?phone=5585988545767"
  },
  {
    type: 'Restaurant',
    title: "Delivery da Gil",
    link: "https://api.whatsapp.com/send?phone=5585988598735"
  },
  {
    type: 'Restaurant',
    title: "Doces e Sabores",
    link: "https://api.whatsapp.com/send?phone=5585984185796"
  },
  {
    type: 'Restaurant',
    title: "Nobre Lanches",
    link: "https://api.whatsapp.com/send?phone=5585988368988"
  },
  // DrugStore
  {
    type: 'DrugStore',
    title: "Pacoti Pharma",
    link: "https://api.whatsapp.com/send?phone=5585988679493"
  },
  {
    type: 'DrugStore',
    title: "Maciço Farma",
    link: "https://api.whatsapp.com/send?phone=5585997321340"
  },
  {
    type: 'DrugStore',
    title: "Farmácia Menor Preço",
    link: "https://api.whatsapp.com/send?phone=5585988681932"
  },
  {
    type: 'DrugStore',
    title: "Farmacia do Trabalhador",
    link: "https://api.whatsapp.com/send?phone=5585989469877"
  },
  {
    type: 'DrugStore',
    title: "Clínica Arcanjo",
    link: "https://api.whatsapp.com/send?phone=5585991560597"
  },
  // Market
  {
    type: 'Market',
    title: "Daniel da Verdura",
    link: "https://api.whatsapp.com/send?phone=5585985757926"
  },
  {
    type: 'Market',
    title: "Comercial o Mardonio",
    link: "https://api.whatsapp.com/send?phone=5585986851709"
  },
  {
    type: 'Market',
    title: "Comercial o Flávio",
    link: "https://api.whatsapp.com/send?phone=5585986850197"
  },
  {
    type: 'Market',
    title: "Mercantil Serra Nossa",
    link: "https://api.whatsapp.com/send?phone=5585992862898"
  },
  {
    type: 'Market',
    title: "Verduras e Frutas",
    link: "https://api.whatsapp.com/send?phone=5585986027738"
  },
  {
    type: 'Market',
    title: "Comercial Bom de Preço",
    link: "https://api.whatsapp.com/send?phone=5585985152260"
  },
  {
    type: 'Market',
    title: "Mercantil Super Compras",
    link: "https://api.whatsapp.com/send?phone=5585986082216"
  },
  {
    type: 'Market',
    title: "Frigorifico Silvestre",
    link: "https://api.whatsapp.com/send?phone=5585997983010"
  },
  {
    type: 'Market',
    title: "Frigorifico Pai e Filhos",
    link: "https://api.whatsapp.com/send?phone=5585988033012"
  },
  {
    type: 'Market',
    title: "Daniel da Verdura",
    link: "https://api.whatsapp.com/send?phone=5585985757926"
  },
  {
    type: 'Market',
    title: "Los Manos Produtos de Limpeza",
    link: "https://api.whatsapp.com/send?phone=5585999697378"
  },
  {
    type: 'Market',
    title: "Frigorifico Carlinhos Castelo",
    link: "https://api.whatsapp.com/send?phone=5585991715956"
  },
  // Others
  {
    type: 'Others',
    title: "Pacoti Variedades",
    link: "https://api.whatsapp.com/send?phone=5585992310902"
  },
  {
    type: 'Others',
    title: "Moto Peças Pacoti",
    link: "https://api.whatsapp.com/send?phone=5585989438944"
  },
  {
    type: 'Others',
    title: "Agromace",
    link: "https://api.whatsapp.com/send?phone=5585987214607"
  },
  {
    type: 'Others',
    title: "Armazém Serrano",
    link: "https://api.whatsapp.com/send?phone=5585989370455"
  },
  {
    type: 'Others',
    title: "Casa Peixoto",
    link: "https://api.whatsapp.com/send?phone=5585988440083"
  },
  {
    type: 'Others',
    title: "MB Acessórios",
    link: "https://api.whatsapp.com/send?phone=5585992754568"
  },
  {
    type: 'Others',
    title: "Paty Variedades",
    link: "https://api.whatsapp.com/send?phone=5585986841897"
  },
  {
    type: 'Others',
    title: "Andrade Tintas",
    link: "https://api.whatsapp.com/send?phone=5585988015709"
  },
  {
    type: 'Others',
    title: "Deposito Netinho",
    link: "https://api.whatsapp.com/send?phone=5585988001929"
  },
  {
    type: 'Others',
    title: "BS KIDS",
    link: "https://api.whatsapp.com/send?phone=5585996364197"
  },
  {
    type: 'Others',
    title: "Casa Uchôa",
    link: "https://api.whatsapp.com/send?phone=5585989157788"
  },
  {
    type: 'Others',
    title: "Raimundinha Variedades",
    link: "https://api.whatsapp.com/send?phone=5585988550044"
  },
]

export default data