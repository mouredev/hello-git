import tkinter as tk
from tkinter import messagebox, ttk
import math

def _make_safe_namespace():
	# Exponer funciones matemáticas seguras
	safe = {name: getattr(math, name) for name in dir(math) if not name.startswith("__")}
	# alias útiles
	safe.update({
		'ln': math.log,
		'log': math.log10,
		'pi': math.pi,
		'e': math.e,
		'pow': pow,
	})
	# bloquear builtins
	return safe

class CalculadoraGUI(tk.Tk):
		def __init__(self):
				super().__init__()
				self.title("Calculadora Científica")
				self.geometry("400x550")
				self.resizable(False, False)
				self.safe_ns = _make_safe_namespace()
				self.history = []

				self._create_widgets()

		def _create_widgets(self):
				# Entrada
				self.expr_var = tk.StringVar()
				entry = ttk.Entry(self, textvariable=self.expr_var, font=("Segoe UI", 16))
				entry.pack(fill="x", padx=10, pady=10)
				entry.focus()

				# Panel de botones
				btn_frame = ttk.Frame(self)
				btn_frame.pack(padx=10, pady=5, fill="both", expand=False)

				buttons = [
						['7','8','9','/','sqrt'],
						['4','5','6','*','^'],
						['1','2','3','-','('],
						['0','.','%','+',')'],
						['sin','cos','tan','log','ln'],
						['fact','C','<-','=','Ans']
				]

				for r, row in enumerate(buttons):
						for c, label in enumerate(row):
								action = lambda v=label: self._on_button(v)
								b = ttk.Button(btn_frame, text=label, command=action)
								b.grid(row=r, column=c, padx=4, pady=4, ipadx=6, ipady=8, sticky="nsew")

				for i in range(len(buttons[0])):
						btn_frame.columnconfigure(i, weight=1)

				# Historial
				hist_label = ttk.Label(self, text="Historial")
				hist_label.pack(anchor="w", padx=10, pady=(10,0))
				self.hist_list = tk.Listbox(self, height=8)
				self.hist_list.pack(fill="both", padx=10, pady=(0,10), expand=True)
				self.hist_list.bind("<Double-Button-1>", self._on_hist_double)

		def _on_button(self, label: str):
				if label == 'C':
						self.expr_var.set("")
						return
				if label == '<-':
						self.expr_var.set(self.expr_var.get()[:-1])
						return
				if label == '=':
						self._evaluate()
						return
				if label == 'Ans':
						if self.history:
								self.expr_var.set(self.expr_var.get() + str(self.history[-1][1]))
						return

				# Map buttons a texto de la expresión
				mapper = {
						'sqrt': 'sqrt(',
						'^': '**',
						'ln': 'ln(',
						'log': 'log(',
						'sin': 'sin(',
						'cos': 'cos(',
						'tan': 'tan(',
						'fact': 'factorial(',
						'%': '%',
				}
				to_insert = mapper.get(label, label)
				self.expr_var.set(self.expr_var.get() + to_insert)

		def _evaluate(self):
				expr = self.expr_var.get().strip()
				if not expr:
						return
				# Ajustes rápidos: permitir '^' ya convertido por botones, pero por si el usuario lo escribió:
				expr = expr.replace('^', '**')
				try:
						# Evaluación segura
						result = eval(expr, {"__builtins__": None}, self.safe_ns)
				except Exception as e:
						messagebox.showerror("Error", f"Expresión inválida:\n{e}")
						return

				# Formateo del resultado
				if isinstance(result, float):
						res_str = str(round(result, 12)).rstrip('0').rstrip('.') if '.' in str(result) else str(result)
				else:
						res_str = str(result)

				self.history.append((expr, res_str))
				self.hist_list.insert(tk.END, f"{expr} = {res_str}")
				self.expr_var.set(res_str)

		def _on_hist_double(self, event):
				sel = self.hist_list.curselection()
				if not sel:
						return
				text = self.hist_list.get(sel[0])
				# cargar la expresión (antes del '=')
				if '=' in text:
						expr = text.split('=')[0].strip()
				else:
						expr = text
				self.expr_var.set(expr)

def main():
		app = CalculadoraGUI()
		app.mainloop()

if __name__ == "__main__":
		main()