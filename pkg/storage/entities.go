package storage

type appState struct {
	Name  string
	Cards []*card
}

type card struct {
	Title  string
	Text   string
	Labels []string
}
