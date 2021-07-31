import {gql} from "apollo-boost";


const getCurrencyQuery = gql`
 {
     currencies
}`


const getProductsQuery = gql`
{
    category{
       products{
           name
           inStock
          gallery
          description
          category
          attributes{
              id
              name
              type
              items{
                  id 
                  value
                  displayValue
              }
          }
          prices{
              currency
              amount
          }
   
   }
}

}
`
const getCategoryQuery = gql`
 {
     category{
        products{
           category
        }
    }
}`

export {getCurrencyQuery,getProductsQuery,getCategoryQuery};