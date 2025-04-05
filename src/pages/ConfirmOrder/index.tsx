import {
  AdressComplement,
  ContentConfirmOrder,
  ContentInformationOrder,
  DivSeparationOrderInformation,
  ImageMotoBoy,
  InformationOrder,
} from "./styles";
import IllustationImage from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { FormTypeData } from "../Payment";
import { useEffect } from "react";

interface LocationType {
  state: FormTypeData | undefined;
}

const ConfirmOrder = () => {
  const theme = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true }); 
    }
  }, [state, navigate]);
  if (!state) return null
  return (
    <ContentConfirmOrder>
      <InformationOrder>
        <h1>Uhu! Pedido confirmado</h1>
        <span className="SubTitleOrder">
          Agora é só aguardar que logo o café chegará até você
        </span>
        <DivSeparationOrderInformation>
          <ContentInformationOrder>
            <div className="DeliveryDetails">
              <span>
                <MapPin
                  color={theme.colors["base-white"]}
                  size={24}
                  weight="fill"
                  style={{ backgroundColor: theme.colors["brand-purple"] }}
                />
              </span>
              <div>
                <span>
                  Entrega em <strong> {state.rua}</strong>
                </span>
                <AdressComplement>
                  {state.bairro} - {state.cidade}, {state.uf}
                </AdressComplement>
              </div>
            </div>
            <div className="DeliveryDetails">
              <span>
                <Timer
                  color={theme.colors["base-white"]}
                  size={24}
                  weight="fill"
                  style={{ backgroundColor: theme.colors["brand-yellow"] }}
                />
              </span>
              <div>
                <span>Previsão de entrega</span>
                <span>20 min - 30 min</span>
              </div>
            </div>
            <div className="DeliveryDetails">
              <span>
                <CurrencyDollar
                  color={theme.colors["base-white"]}
                  size={24}
                  style={{ backgroundColor: theme.colors["brand-yellow-dark"] }}
                />
              </span>
              <div>
                <span>Pagamento na entrega</span>
                <span>{state.payamentMethod}</span>
              </div>
            </div>
          </ContentInformationOrder>
          <ImageMotoBoy>
            <img src={IllustationImage} alt="imagem Moto boy" />
          </ImageMotoBoy>
        </DivSeparationOrderInformation>
      </InformationOrder>
    </ContentConfirmOrder>
  );
};

export default ConfirmOrder;
