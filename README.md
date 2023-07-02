Za pokretanje projekta unesti u terminal
# "npm install"
i
# "npm start da se pokrene projekt

Projekt je napravljen sa Reactom.Section sam napravio responzivnim na način da
Card elementi uvijek budu po 3 u redu te sam za manje screen sizeove smanjivao veličine
texta i containera.Nije bilo definirano da na dovoljno malom screenu ide 1 card element po redu
pa sam išao ovim pristupom.

Pokušavao sam dobiti identičan izgled sectiona kao i sa maila no nisam mogao pronaći na vašoj stranici
sliku sa crvenom pozadinom te sam uzeo zelenu.

Kod generiranja random cardova koristio sam objekte u kojima sam grupirao link slike sa vrijednostima boja koje su u pozadini te slike da bi sve i jedan card imao istu boju slike i backgrounda gumbova i age limit ikoni.

Pri prvom loadanju card elemenata duljina cardova se produlje jer section nema dovoljno visine da se pojavi scroll-bar na browseru te kad se učita novi red cardova širina ekrana se smanji te se to desi,no kad bi se taj section ukomponirao u neku stranicu di bi već bio scroll-bar nebi bilo nikakvih problema.
Ovaj problem sam mogao rijšiti samo da sam stavio da je min-height body-a ili sectiona veći od 100% no ostavio sam ovako da bi se lakše moglo ukomponirati u projekt.
