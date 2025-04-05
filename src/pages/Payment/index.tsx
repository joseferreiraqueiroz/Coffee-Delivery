import { CreditCard, CurrencyDollar, HouseLine, Money } from "phosphor-react";
import { DeliveryForm, PayamentComponentParent, PayamentFormat } from "./style";
import { CoffeeContext } from "../../components/context/context";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AdressFormComponent } from "./Components/AdressForm";
import { CartProductsComponent } from "./Components/CartProducts";

const PayamentMethodEnum = z.enum([
  "cartão de crédito",
  "cartão de débito",
  "dinheiro",
]);

const ProductsCoffeType = z.object({
  cep: z.string().min(1, "CEP é obrigatório"),
  rua: z.string().min(1, "Rua é obrigatória"),
  número: z.string().min(1, "Número é obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  uf: z.string().min(1, "UF é obrigatória").toUpperCase(),
  payamentMethod: PayamentMethodEnum,
});

export type FormTypeData = z.infer<typeof ProductsCoffeType>;

const Index = () => {
  const newCycleForm = useForm({
    resolver: zodResolver(ProductsCoffeType),
  });
  const { handleSubmit, setValue } = newCycleForm;
  const { cartItems, HandleRemoveItensInCartNoToast } =
    useContext(CoffeeContext);

  function MethodPayament(
    method: "cartão de crédito" | "cartão de débito" | "dinheiro"
  ) {
    setValue("payamentMethod", method);
  }
  const navigate = useNavigate();

  const handleSubmitFormAdress = (data: FormTypeData) => {
    if (cartItems.length === 0) {
      toast.error(
        "Seu carrinho está vazio! Adicione produtos antes de continuar."
      );
      return;
    }
    console.log("Formulário enviado:", data);
    navigate("/confirmOrder", {
      state: data,
    });
    HandleRemoveItensInCartNoToast();
  };
  return (
    <PayamentComponentParent>
      <form onSubmit={handleSubmit(handleSubmitFormAdress)}>
        <DeliveryForm>
          <FormProvider {...newCycleForm}>
            <AdressFormComponent />
          </FormProvider>
          <PayamentFormat>
            <h3>
              <CurrencyDollar size={24} />
              Pagamento
            </h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
            <div>
              <button
                type="button"
                onClick={() => {
                  MethodPayament("cartão de crédito");
                }}
              >
                <CreditCard /> cartão de crédito
              </button>
              <button
                type="button"
                onClick={() => {
                  MethodPayament("cartão de débito");
                }}
              >
                <HouseLine /> cartão de débito
              </button>
              <button
                type="button"
                onClick={() => {
                  MethodPayament("dinheiro");
                }}
              >
                <Money /> dinheiro
              </button>
            </div>
          </PayamentFormat>
        </DeliveryForm>
        <CartProductsComponent />
      </form>
    </PayamentComponentParent>
  );
};

export default Index;
