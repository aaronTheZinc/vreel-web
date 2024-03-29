import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $username: String!
    $account_type: String!
  ) {
    register(
      input: {
        email: $email
        password: $password
        username: $username
        account_type: $account_type
      }
    ) {
      id
      username
      email
    }
  }
`;

export const registerUser = async (username: string, email: string, password: string, accout_type: string) => {

}

export const CREATE_SLIDE = gql`
mutation CreateSlide($token: String!, $vreelId: String) {
    createSlide(token: $token, vreelId: $vreelId) {
      id
      author
    }
  }

`

export const UPDATE_USER = gql`
  mutation updateUser($token: String!,$fields: [VreelFields!] ) {
    updateUser(token: $token, fields: $fields){
  message
  succeeded
}
  }
`

export const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($token: String!,$employee: String!, $fields: [VreelFields!] ) {
    updateEmployee(token: $token, fields: $fields, employee: $employee){
      message
      succeeded
}
  }
`

export const ADD_EMPLOYEE_TO_ENTERPRISE = gql`
  mutation addEmployee($token: String!, $input: NewUser! ) {
    addEmployeeToEnterprise(token: $token, newUser: $input) {
      id
    }
  }
`

export const REMOVE_EMPLOYEE_FROM_ENTERPRISE = gql`
  mutation removeEmployee($token: String!, $employee: String!) {
    removeEmployeeFromEnterprise(token: $token, employee: $employee ) {
      message
      succeeded
    }
  }
`

export const UPDATE_VREEL_FIELDS = gql`
  mutation updateVreelFields($token: String!, $fields: [VreelFields!]!, $vreelId: String) {
    updateVreelFields(token: $token, fields: $fields, vreelId: $vreelId) {
      message 
      succeeded
    }
  }
`

export const CREATE_PAGE = gql`
  mutation addPage($token: String!) {
    addPage(token: $token) {
      message
      succeeded
    }
  }
`

export const UPDATE_ELEMENT_BACKGROUND_COLOR = gql`
  mutation editBackgroundColor($token: String!, $elementId: String!, $elementType: String!, $backgroundColor: String!) {
	editElementBackgroundColor(token: $token
  	elementId: $elementId,
    elementType:$elementType
    backgroundColor: $backgroundColor
  )  {
    succeeded
    message
  }
}
`