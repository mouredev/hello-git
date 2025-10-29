import math
from typing import List, Tuple

def sumar(a: float, b: float) -> float:
		return a + b

def restar(a: float, b: float) -> float:
		return a - b

def multiplicar(a: float, b: float) -> float:
		return a * b

def dividir(a: float, b: float) -> float:
		if b == 0:
				raise ZeroDivisionError("División por cero")
		return a / b

def potencia(a: float, b: float) -> float:
		return a ** b

def modulo(a: float, b: float) -> float:
		if b == 0:
				raise ZeroDivisionError("Módulo por cero")
		return a % b

def raiz(a: float) -> float:
		if a < 0:
				raise ValueError("Raíz de número negativo")
		return math.sqrt(a)

def pedir_numero(prompt: str) -> float:
		while True:
				val = input(prompt).strip()
				try:
						return float(val)
				except ValueError:
						print("Entrada inválida. Intenta de nuevo.")

def mostrar_menu() -> None:
		print("\n--- Calculadora ---")
		print("1) Sumar")
		print("2) Restar")
		print("3) Multiplicar")
		print("4) Dividir")
		print("5) Potencia (a^b)")
		print("6) Módulo (a % b)")
		print("7) Raíz (sqrt a)")
		print("h) Historial")
		print("c) Limpiar historial")
		print("q) Salir")

def main() -> None:
		history: List[Tuple[str, str]] = []
		ops = {
				"1": ("+", sumar, 2),
				"2": ("-", restar, 2),
				"3": ("*", multiplicar, 2),
				"4": ("/", dividir, 2),
				"5": ("^", potencia, 2),
				"6": ("%", modulo, 2),
				"7": ("sqrt", raiz, 1),
		}

		while True:
				mostrar_menu()
				choice = input("Elige una opción: ").strip().lower()
				if choice == "q":
						print("Saliendo...")
						break
				if choice == "h":
						if not history:
								print("Historial vacío.")
						else:
								print("\nHistorial:")
								for i, (expr, res) in enumerate(history, 1):
										print(f"{i}) {expr} = {res}")
						continue
				if choice == "c":
						history.clear()
						print("Historial limpiado.")
						continue
				if choice not in ops:
						print("Opción inválida.")
						continue

				symbol, func, nargs = ops[choice]
				try:
						if nargs == 2:
								a = pedir_numero("Introduce primer número: ")
								b = pedir_numero("Introduce segundo número: ")
								res = func(a, b)
								expr = f"{a} {symbol} {b}"
						else:
								a = pedir_numero("Introduce número: ")
								res = func(a)
								expr = f"{symbol}({a})"
				except Exception as e:
						print(f"Error: {e}")
						continue

				print(f"Resultado: {res}")
				history.append((expr, str(res)))

if __name__ == "__main__":
		main()