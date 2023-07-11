import { DatePicker } from "@mui/x-date-pickers";

const Food = () => {
  return (
    <>
      <div>
        <DatePicker
          value={new Date('1/1/1963')}
          // defaultValue={new Date('1/1/1963')}
        />
      </div>
      <label htmlFor="date">
        Datepicker
      </label>
    </>
  )
}
export default Food