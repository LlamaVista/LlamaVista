from config import TextGenerationConfig, llm
from components import Manager
from test_modules import test_summarizer, test_goals, test_vizgen
lida = Manager(text_gen=llm("llama"))

