import { JsonDataProvider, Remult } from "remult"

const remult = new Remult(new JsonDataProvider(localStorage));

export default remult;

