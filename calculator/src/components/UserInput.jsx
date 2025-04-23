export default function UserInput({userInput, onChange}){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="investment">Investimento Inicial</label>
                    <input 
                    id="investment" type="number" required 
                    value={userInput.initialInvestment}
                    onChange={(e) => onChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="investmentA">Investimento Anual</label>
                    <input id="investmentA" type="number" required
                    value={userInput.annualInvestment}
                    onChange={(e) => onChange('annualInvestment', e.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="return">Retorno Esperado</label>
                    <input id="return" type="number" required
                    value={userInput.expectedReturn}
                    onChange={(e) => onChange('expectedReturn', e.target.value)} 
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duração</label>
                    <input id="duration" type="number" required 
                    value={userInput.duration}
                    onChange={(e) => onChange('duration', e.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}