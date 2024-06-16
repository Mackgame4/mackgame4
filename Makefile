path = "react-pdf"

all: run

run:
	@echo "Running in development mode"
	@cd $(path) && npm run dev

build:
	@echo "Building web pdf viewer"
	@cd $(path) && npm run build