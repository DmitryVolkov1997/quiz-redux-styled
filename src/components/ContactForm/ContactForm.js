import styled from "styled-components"
import {useForm, Controller} from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 10rem;
  width: 100%;
  padding: 10rem 1.5rem;
`

const Body = styled.div`
  width: 100%;
  max-width: 60rem;
`;

const Input = styled.input`
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  display: block;
  border: 1px solid rgb(226, 232, 240);
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 0 1rem;
  width: 100%;
  transition: all 300ms ease-in-out;

  &:focus {
    border-color: rgb(49, 130, 206);
    box-shadow: rgb(49 130 206) 0px 0px 0px 1px;
  }
`

const Title = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--colors-text);
  margin: 0rem 0rem 2rem 0rem;
  text-align: center;
`;

const Label = styled.label`

`
const InputSubmit = styled.input`
  background-color: rgb(43, 108, 176);
  color: #fff;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: .6rem;
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  width: 100%;

  margin-top: 2rem;
`

const ErrorMessage = styled.div`
  height: 2rem;

  & > p {
    color: rgb(197, 48, 48);
    font-weight: var(--fw-medium);
  }
`

const SelectEl = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            borderRadius: "var(--radius)",
            border: "1px solid rgb(226,232,240)",
            height: "45px",
            fontSize: "var(--fs-sm)",
            fontWeight: "var(--fw-medium)",
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: "pointer",
        }),
    }
})`
  margin-bottom: 3rem;
`;

const optionsRegion = [
    {value: "Акмолинская", label: "Акмолинская"},
    {value: "Актюбинская", label: "Актюбинская"},
    {value: "Алматинская", label: "Алматинская"},
    {value: "Алматы", label: "Алматы"},
    {value: "Астана", label: "Астана"},
    {value: "Атырауская", label: "Атырауская"},
    {value: "Восточно-Казахстанская область", label: "Восточно-Казахстанская область"},
    {value: "Жамбылская", label: "Жамбылская"},
    {value: "ЗКО", label: "ЗКО"},
    {value: "Карагандинская", label: "Карагандинская"},
    {value: "Костанайская", label: "Костанайская"},
    {value: "Кызылординская", label: "Кызылординская"},
    {value: "Мангыстауская", label: "Мангыстауская"},
    {value: "Павлодарская", label: "Павлодарская"},
    {value: "Северо-Казахстанская область", label: "Северо-Казахстанская область"},
    {value: "Туркестанская", label: "Туркестанская"},
    {value: "Шымкент", label: "Шымкент"},
    {value: "ЮКО", label: "ЮКО"},
]
const optionsSocialStatus = [
    {value: "благополучная семья", label: "благополучная семья"},
    {value: "инвалид детства", label: "инвалид детства"},
    {value: "инвалид 1 группы", label: "инвалид 1 группы"},
    {value: "инвалид 2 группы", label: "инвалид 2 группы"},
    {value: "инвалид 3 группы", label: "инвалид 3 группы"},
    {value: "дети сироты (школа интернат)", label: "дети сироты (школа интернат)"},
    {value: "дети сироты (патронатная семья)", label: "дети сироты (патронатная семья)"},
]
const optionsAchievement = [
    {value: "претендент на знак «Алтын белгі» ", label: "претендент на знак «Алтын белгі» "},
    {
        value: "победитель олимпиад и спортивных соревнований (международных, республиканских, областных)» ",
        label: "победитель олимпиад и спортивных соревнований (международных, республиканских, областных)» "
    },
    {
        value: "победитель Республиканской Интернет-олимпиады, проводимой КарТУ»",
        label: "победитель Республиканской Интернет-олимпиады, проводимой КарТУ"
    },
]
const optionsPayment = [
    {value: "за счет Республиканского выделенного гранта", label: "за счет Республиканского выделенного гранта"},
    {value: "за счет собственных средств", label: "за счет собственных средств"},
    {value: "за счет работодателя", label: "за счет работодателя"},
]

const ContactForm = () => {
    const {register, control, formState: {errors}, handleSubmit, reset} = useForm({mode: "onChange"})
    const methods = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        try {
            await axios.post("https://contact-form-2d4a6-default-rtdb.firebaseio.com/contact.json", [{
                user: {
                    Имя: data.firstName,
                    Фамилия: data.lastName,
                    Отчество: data.patronymic,
                    Email: data.email,
                    Регион: data.region,
                    "Социальный стутус": data.socialStatus,
                    "Предполагаемая форма оплаты за обучение в ВУЗе": data.payment,
                    "Награды и достижение": data.achievement,
                    "Дата регистрации": new Date()
                }
            }]);
            // reset()
        } catch (e) {
            console.log(e);
        }
    }

    return (
      <Wrapper>
          <Body>
              <Title>Регистрация</Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <Label>
                      <Input placeholder="Аты (Имя)*" {...register('firstName', {
                          required: "Поле обязательно к заполнению",
                          minLength: {
                              value: 2,
                              message: "Минимум 2 символа"
                          }
                      })}/>
                  </Label>
                  <ErrorMessage>
                      {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                  </ErrorMessage>
                  <Label>
                      <Input placeholder="Тегі (Фамилия)*" {...register('lastName', {
                          required: "Поле обязательно к заполнению",
                          minLength: {
                              value: 2,
                              message: "Минимум 2 символа"
                          }
                      })}/>
                  </Label>
                  <ErrorMessage>
                      {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
                  </ErrorMessage>
                  <Label>
                      <Input placeholder="Әкесінің аты (Отчество)*" {...register('patronymic', {
                          required: "Поле обязательно к заполнению",
                          minLength: {
                              value: 2,
                              message: "Минимум 2 символа"
                          }
                      })}/>
                  </Label>
                  <ErrorMessage>
                      {errors?.patronymic && <p>{errors?.patronymic?.message || "Error!"}</p>}
                  </ErrorMessage>
                  <Controller
                    control={control}
                    name="socialStatus"
                    render={({field: {onChange, value, name, ref}}) => (
                      <SelectEl
                        placeholder="Социальный статус"
                        inputRef={ref}
                        classNamePrefix="addl-class"
                        options={optionsSocialStatus}
                        value={optionsSocialStatus.find((c) => c.value === value)}
                        onChange={val => onChange(val.value)}
                      />
                    )}
                  />
                  <Label>
                      <Input placeholder="Email*" {...register('email', {
                          required: "Поле обязательно к заполнению",
                          pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Введенное значение не соответствует формату электронной почты"
                          }
                      })}/>
                  </Label>
                  <ErrorMessage>
                      {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                  </ErrorMessage>

                  <Controller
                    control={control}
                    name="region"
                    render={({field: {onChange, value, name, ref}}) => (
                      <SelectEl
                        placeholder="Аймақ
													(Регион)"
                        inputRef={ref}
                        classNamePrefix="addl-class"
                        options={optionsRegion}
                        value={optionsRegion.find((c) => c.value === value)}
                        onChange={val => onChange(val.value)}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="achievement"
                    render={({field: {onChange, value, name, ref}}) => (
                      <SelectEl
                        placeholder="Награды и достижение"
                        inputRef={ref}
                        classNamePrefix="addl-class"
                        options={optionsAchievement}
                        value={optionsAchievement.find((c) => c.value === value)}
                        onChange={val => onChange(val.value)}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="payment"
                    render={({field: {onChange, value, name, ref}}) => (
                      <SelectEl
                        placeholder="Предполагаемая форма оплаты за обучение в ВУЗе"
                        inputRef={ref}
                        classNamePrefix="addl-class"
                        options={optionsPayment}
                        value={optionsPayment.find((c) => c.value === value)}
                        onChange={val => onChange(val.value)}
                      />
                    )}
                  />
                  <InputSubmit type="submit"/>
              </form>
          </Body>
      </Wrapper>
    );
};

export default ContactForm;
