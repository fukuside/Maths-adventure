const multiStepTypes = new Set([
  "addition_word", "subtraction_word", "multiply_word", "division_word", "decimal_word",
  "addition_boss", "subtraction_boss", "multiply_boss", "division_boss", "decimal_boss",
  "curriculum_writtenAdd", "curriculum_writtenSubtract", "curriculum_writtenMultiply",
  "curriculum_writtenDivide", "upper_mul2", "upper_mul3",
  "upper_decimal_add", "upper_decimal_sub", "curriculum_decimalIntMultiply",
  "curriculum_decimalIntDivide", "curriculum_compositeArea", "curriculum_orderOperations",
  "cube_net"
]);

const quickUpperGradeTypes = new Set([
  "curriculum_multiple", "curriculum_divisor", "curriculum_frequency", "curriculum_mode"
]);

export function getStageQuestionCount(stage) {
  if (stage?.world >= 101) return 5;
  const types = stage?.questionTypes ?? [stage?.type];
  const needsMoreTime = types.some(type => multiStepTypes.has(type))
    || (stage?.world >= 5 && stage.world <= 6
      && types.some(type => !quickUpperGradeTypes.has(type)));
  return needsMoreTime ? 6 : (stage?.questionCount ?? 10);
}
