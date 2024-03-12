// Write your code here
import {useState} from 'react'
import {
  Container,
  Heading,
  Input,
  Card,
  ErrorMessage,
  Paragraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [isValid, setIsValid] = useState(false)
  const onChangeHandler=(event)=>{
    if(event.target.value.length>=8)
      setIsValid(true)
    else 
      setIsValid(false)
  }
  return (
    <Container>
      <Card>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is you password</Paragraph>
        <Input type="password" onChange={onChangeHandler}/>
        {!isValid && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </Card>
    </Container>
  )
}
export default PasswordValidator
