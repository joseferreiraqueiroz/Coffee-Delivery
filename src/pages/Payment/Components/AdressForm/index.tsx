import { useFormContext } from "react-hook-form"
import { AddressForm, AddressFormContent } from "./style"

export const AdressFormComponent = () => {

    const { register } = useFormContext()
  
    return (
    <AddressForm>
            <h2>Complete seu pedido</h2>
            <AddressFormContent>
              <div>
                <input
                  type="text"
                  placeholder="CEP"
                  className="cep"
                  {...register("cep")}
                />
          
                <input
                  type="text"
                  placeholder="Rua"
                  className="rua"
                  {...register("rua")}
                />
            

                <input
                  placeholder="Número"
                  {...register("número")}
                />

                <input
                  type="text"
                  placeholder="Complemento Opcional"
                  className="complemento"
                  {...register("complemento")}
                />
              
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("bairro")}
                />
            
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register("cidade")}
                />
              
                <input
                  type="text"
                  placeholder="UF"
                  {...register("uf")}
                  
                />
             
              </div>
            </AddressFormContent>
          </AddressForm>
  )
}
