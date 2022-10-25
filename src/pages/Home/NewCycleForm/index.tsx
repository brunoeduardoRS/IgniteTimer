import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        list="tasks-suggestions"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="tasks-suggestions">
        <option value="Projeto 1" />
      </datalist>
      <label htmlFor="minutesAmount">durante:</label>
      <MinutesAmountInput
        placeholder="00"
        id="minutesAmount"
        type="number"
        step={5}
        min={5}
        disabled={!!activeCycle}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minuto.</span>
    </FormContainer>
  );
}
