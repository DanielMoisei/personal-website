import React, {useState} from "react"
import "./style.css"

function CurrencyConverter() {

  const [formData, setFormData] = useState({money: "", initialCurrency: "", newCurrency: "", ratio: "", result: 0, showResult: false})

  const handleChange = (e) => {
      const {name, value} = e.target
      setFormData(prevForm => ({
          ...prevForm,
          [name]: value
      }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormData(prevForm => ({
          ...prevForm,
          result: parseFloat(parseInt(prevForm.money) * parseFloat(prevForm.ratio)),
          showResult: true
      }))
  }

  const handleReset = (e) => {
      e.preventDefault()
      setFormData({money: "", initialCurrency: "", newCurrency: "", ratio: "", result: 0, showResult: false})
  }

  return (
    <div id="main-curr">
        <h1 id="title-curr">Manual Currency Converter</h1>
        <form id="form-curr">
            <div id="money-div-curr">
                <h2 id="convert-curr">Convert</h2>
                <input id="money-curr"
                    type="text"
                    name="money"
                    value={formData.money}
                    onChange={handleChange}
                    placeholder="0"
                />
                <input id="first-currency-curr"
                    type="text"
                    name="initialCurrency"
                    value={formData.initialCurrency}
                    onChange={handleChange}
                    placeholder="CUR"
                />
                <h2 id="to-curr">to</h2>
                <input id="new-currency-curr"
                    type="text"
                    name="newCurrency"
                    value={formData.newCurrency}
                    onChange={handleChange}
                    placeholder="CUR"
                />
            </div>

            <div id="ratio-div-curr">
                <h2 id="ratio-h2-curr">Conversion ratio</h2>
                <input id="ratio-field-curr"
                    type="text"
                    name="ratio"
                    value={formData.ratio}
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>
            <div id="buttons-curr">
                <button className="button-curr" onClick={handleSubmit}>Convert</button>
                <button className="button-curr" onClick={handleReset}>New conversion</button>
            </div>
        </form>
        {formData.showResult ? <p>Your {formData.money} {formData.initialCurrency} will get you {formData.result} {formData.newCurrency}</p> : null}
    </div>
  )
}

export default CurrencyConverter
