import { Id, getElementById } from "./core";
import * as v1 from "./npm/AwesomeValueFramework/v1";
import * as v2 from "./npm/AwesomeValueFramework/v2";
import * as appV1 from "./app/formatValue/v1";
import * as appV2 from "./app/formatValue/v2";

main();

function main() {
  getElementById(Id.app).innerHTML = render(Id.value, Id.save);
  v1.awesomeValueFramework(
    getElementById(Id.value),
    getElementById(Id.save),
    appV1.formatValue
  );
  v2.awesomeValueFramework(
    getElementById(Id.value),
    getElementById(Id.save),
    appV2.formatValue
  );
}

function render(valueId: Id, saveId: Id) {
  return `
    <div>
      <input type="string" id="${valueId}"/>
      <button id="${saveId}">save</button>
    </div>
  `;
}
