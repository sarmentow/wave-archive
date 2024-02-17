import os
from datetime import datetime

command = f"wget --reject jpg,JPG,jpeg --adjust-extension -H -Dsurfguru.space,surfguru.com.br --convert-links --no-directories --page-requisites --directory-prefix=\"{datetime.today()}\" --tries=1 https://surfguru.com.br/previsao/brasil/rio-grande-do-norte/natal/oceanica"

os.system(command)

print("finished")
