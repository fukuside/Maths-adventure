export default {

  id: "expression",

  keys(button) {

    return [

      button("1"),
      button("2"),
      button("3"),

      button("4"),
      button("5"),
      button("6"),

      button("7"),
      button("8"),
      button("9"),

      button("0"),
      button(".", "・", "expression-decimal-key"),

      button("+", "＋", "expression-operation-key"),
      button("-", "－", "expression-operation-key"),
      button("*", "×", "expression-operation-key"),
      button("/", "÷", "expression-operation-key"),

      button("=", "＝", "expression-equals-key"),

      button(
        "back",
        "ひとつ もどす",
        "expression-control-key"
      ),

      button(
        "clear",
        "ぜんぶ けす",
        "expression-control-key"
      )
    ];
  }
};