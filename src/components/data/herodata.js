import { ImMobile } from 'react-icons/im'
import { GiTShirt, GiSofa, GiLipstick } from 'react-icons/gi'
import { MdHomeMax , MdToys, MdSportsSoccer} from 'react-icons/md'
import { GoTools } from 'react-icons/go'

// MENU items
export const items = [
    {
      label: "Consumer's Electronic",
      key: 'Gadgets',
      icon: <ImMobile />,
      children:[
        {
          type: 'group',
          label: 'Mobile',
          children: [
            {
              label: 'Samsung',
              key: 'mb-1',
            },
            {
              label: 'iPhone',
              key: 'mb-2',
            },
          ],
        }
  
      ]
    },
    
    {
      label: "TV & Home Appliances",
      key: 'TV&Appliances',
      icon: <MdHomeMax />,
      children:[
        {
          type: 'group',
          label: 'Smart TV',
          children: [
            {
              label: "TLC 24 inches",
              key: 'tv-1',
            },
            {
              label: 'Samsung 32 inches',
              key: 'tv-2',
            },
          ],
        }
  
      ]
    },
    {
      label: 'Home and Living',
      key: 'Home&living',
      icon: <GiSofa />,
      children:[
        {
          type: 'group',
          label: 'Furniture',
          children: [
            {
              label: 'Sofas',
              key: 'sofa1',
            },
            {
              label: 'Living room Furniture',
              key: 'lrf1',
            },
          ],
        }
  
      ]
    },
    {
      label: 'Apparel',
      key: 'Apparel',
      icon: <GiTShirt />,
      children:[
        {
          type: 'group',
          label: "Men's Clothing",
          children: [
            {
              label: "Men's Hoodies",
              key: 'hoodies1',
            },
            {
              label: "Men's Jeans",
              key: 'jeans1',
            },
          ],
        }
  
      ]
    },
    
    
    {
      label: "Health & Beauty",
      key: 'Health&Beauty',
      icon: <GiLipstick/>,
      children:[
        {
          type: 'group',
          label: 'Skin Care',
          children: [
            {
              label: 'Derma Care',
              key: 'sc-1',
            },
            {
              label: 'Face Mask and Packs',
              key: 'sc-2',
            },
          ],
        }
  
      ]
    },
    {
      label: "Baby's & Toy's",
      key: 'KidToys',
      icon: <MdToys />,
      children:[
        {
          type: "group",
          label: "Toys & Games",
          children: [
            {
              label: 'Collectables',
              key: 'cl-1',
            },
            {
              label: "Building Block's",
              key: 'bb-1',
            },
          ],
        }
  
      ]
    },
    {
      label: "Sports & Lifestyle",
      key: 'Sports',
      icon: <MdSportsSoccer />,
      children:[
        {
          type: 'group',
          label: 'Sports Equipment',
          children: [
            {
              label: 'BasketBall',
              key: 'ball1',
            },
            {
              label: 'Baseball',
              key: 'ball2',
            },
          ],
        }
  
      ]
    },
    {
      label: "Tools & Hardware",
      key: 'Tools',
      icon: <GoTools />,
      children:[
        {
          type: 'group',
          label: 'Home Tools',
          children: [
            {
              label: 'Grinder',
              key: 'mt-1',
            },
            {
              label: 'Hammer',
              key: 'mt-2',
            },
          ],
        }
  
      ]
    },
    

  ]