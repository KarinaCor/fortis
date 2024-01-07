import * as SC from './Form.styled'
import { IMG } from "../../../../images";

export const Form = () => {
    return (
      <>
        <SC.Wrapper>
          <SC.LeftSide>
            <SC.Map>
              <SC.Img src={IMG.introducingImage} alt="introducing" />
            </SC.Map>
          </SC.LeftSide>
          <SC.RightSide>
            <SC.Form>
              <SC.Label>
                Name
                <SC.Input
                  type="text"
                  name="name"
                  //   value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  required
                />
              </SC.Label>
              <SC.Label>
                Email
                <SC.Input
                  type="password"
                  name="pwd"
                  minlength="5"
                  maxlength="12"
                />
              </SC.Label>
              <SC.Label>
                Telefon
                <SC.Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                  required
                />
              </SC.Label>
              <SC.Label>
                Subject
                <SC.Input type="text" name="" />
              </SC.Label>
              <SC.Label>
                Mesaj
                <SC.Input type="text" name="" />
              </SC.Label>
              <SC.Button type="submit">Trimite</SC.Button>
            </SC.Form>
          </SC.RightSide>
        </SC.Wrapper>
      </>
    );
}