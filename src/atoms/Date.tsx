export default function PtData() {
  const currentTime = new Date()
  // const horas = currentTime.getHours()
  // let minutos = currentTime.getMinutes()
  // let segundos = currentTime.getSeconds()
  let dia = currentTime.getDate()
  let mes = currentTime.getMonth()
  const ano = currentTime.getFullYear()
  const Dia = currentTime.getDay()
  const Mes = currentTime.getUTCMonth()

  // if (minutos < 10) minutos = +`0${minutos}`
  // if (segundos < 10) segundos = +`0${segundos}`
  if (dia < 10) dia = +`0${dia}`
  if (mes < 10) mes = +`0${mes}`

  const arrayDia = []
  arrayDia[0] = 'Domingo'
  arrayDia[1] = 'Segunda-Feira'
  arrayDia[2] = 'Terça-Feira'
  arrayDia[3] = 'Quarta-Feira'
  arrayDia[4] = 'Quinta-Feira'
  arrayDia[5] = 'Sexta-Feira'
  arrayDia[6] = 'Sábado'

  const arrayMes = []
  arrayMes[0] = 'Janeiro'
  arrayMes[1] = 'Fevereiro'
  arrayMes[2] = 'Março'
  arrayMes[3] = 'Abril'
  arrayMes[4] = 'Maio'
  arrayMes[5] = 'Junho'
  arrayMes[6] = 'Julho'
  arrayMes[7] = 'Agosto'
  arrayMes[8] = 'Setembro'
  arrayMes[9] = 'Outubro'
  arrayMes[10] = 'Novembro'
  arrayMes[11] = 'Dezembro'

  return (
    <span>
      <p className="text-md font-bold">{arrayMes[Mes]}</p>
      <p className="text-sm font-extralight text-navTitle">{`${
        arrayDia[Dia]
      } - ${dia} de ${arrayMes[Mes]?.slice(0, 3)} - ${ano}`}</p>
    </span>
  )
}
