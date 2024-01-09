import * as SC from './Form.styled'


export const Form = () => {
    return (
      <>
        <SC.Wrapper>
          <SC.LeftSide>
            <SC.Map>
              <SC.Iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d363747.594143694!2d27.388125!3d44.581109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b0513ff8bc4c8d%3A0x8063c821244e5943!2sParcul%20Industrial%20IMM%20Slobozia!5e0!3m2!1sen!2sus!4v1704636034669!5m2!1sen!2sus"
          width="350"
          height="320"
          style={{ display: "block", border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></SC.Iframe>
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