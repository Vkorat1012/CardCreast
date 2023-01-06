import { ADD_TO_CARD ,INITIAL_SLIDE, LOCK ,SHOW_CARD} from "../actions/types";

const InitialState = {
cards: [{                      name:'Vaibhav Korat',
                               number :'6521515012357896',
                               bank_name:'Hdfc Bank',
                               card_type : 'debit',
                               cvv:'521',
                               id : 0,
                               valid_month: 5,
                               valid_year: 2030,
                               lock : false,
                               archieve : false,
                               default :false,
                               gpay : false ,
                               show : true
  },
  {                      name:'Tom Cruise',
                               number :'7984465179854651',
                               bank_name:'ICICI Bank',
                               card_type : 'credit',
                               cvv:'323',
                               id : 0,
                               valid_month: 9,
                               valid_year: 2026,
                               lock : false,
                               archieve : false,
                               default :false,
                               gpay : false ,
                               show : true
  },
  {                      name:'raj Patel',
                               number :'6512798479854651',
                               bank_name:'Axis Bank',
                               card_type : 'debit',
                               cvv:'521',
                               id : 1,
                               valid_month: 6,
                               valid_year: 2027,
                               lock : false,
                               archieve : false,
                               default :false,
                               gpay : false ,
                               show : false
  },
  {                      name:'cris lyne',
                               number :'5478895632124578',
                               bank_name:'Bank of Baroda',
                               card_type : 'credit',
                               cvv:'323',
                               id : 1,
                               valid_month: 8,
                               valid_year: 2025,
                               lock : false,
                               archieve : false,
                               default :false,
                               gpay : false ,
                               show : false
  },
  // {                      name:'Nikhil sekhaliya',
  //                              number :'1324798479854651',
  //                              bank_name:'Axis Bank',
  //                              card_type : 'debit',
  //                              cvv:'721',
  //                              id : 2,
  //                              valid_month: 2,
  //                              valid_year: 2024,
  //                              lock : false,
  //                              archieve : false,
  //                              default :false,
  //                              gpay : false ,
  //                              show : false
  // },
  // {                      name:'cris lyne',
  //                              number :'9878895632124578',
  //                              bank_name:'Bank of Baroda',
  //                              card_type : 'credit',
  //                              cvv:'12',
  //                              id : 2,
  //                              valid_month: 8,
  //                              valid_year: 2029,
  //                              lock : false,
  //                              archieve : false,
  //                              default :false,
  //                              gpay : false ,
  //                              show : false
  // }
    
  ],
    current_slide : 0
  
};

export default function cardItem(state = InitialState, Action ) {
  console.log("card : - >",Action.type)
  console.log("Action type" ,Action.payload)
  console.log("card type" ,Action.card)
  
  switch (Action.type) {
    case ADD_TO_CARD:
      const debit = state.cards.filter((item)=>item.card_type === "debit" && item)
      const debit_length = debit.length;

      const credit = state.cards.filter((item)=>item.card_type === "credit" && item)
       const credit_length = credit.length; 
    
      return {
        ...state,
        cards: [
          ...state.cards,
          { ...Action.payload, valid_month: 5,
                               valid_year: 2030,
                               lock : false,
                               archive : false,
                               default :false,
                               gpay :false,
                               id: Action.extra === "debit" ? (debit_length ) : credit_length,
                               show : false
                              },
        ],
      };
    case INITIAL_SLIDE :
      return{
      ...state,
      current_slide : Action.current_slide
      // cards : state.cards.map((item)=>
      //     item.id === Action.payload ?{...item, archive : 1} : item)
  
      }
      case LOCK :
        return{
        ...state,
        cards : state.cards.map((item)=>
          (item.id === Action.payload && item.card_type === Action.card)?{...item, lock : !(item.lock)} : item)
        }
        case SHOW_CARD :
          return{ ...state,
            cards : state.cards.map((item)=>
              (item.id === Action.payload && item.card_type === Action.card)?{...item, show : !(item.show)} : item)}
    default:
      return state;
  }
}
