
const Row=({type, amount, currency, index})=>{

    const decoration= (index % 2  == 0) ? "row-white" : "row-grey"
    
    return(
        <tr>
            <td className={decoration}>{type}</td>
            <td className={decoration}>{amount}</td>
            <td className={decoration}>{currency}</td>
        </tr>
    )
}

export const TransactionHistory =({transactions})=>{
return     <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction,index)=>{
                        return(
                            <Row 
                            key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                            index={index}
                            />
                        )
                    })}

                </tbody>
            </table>


}