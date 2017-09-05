---
title: Integració Participa - Discourse
service: Desenvolupament Web
tags:
- Desenvolupament
client: Barcelona En Comú
client-url: https://barcelonaencomu.cat/
techs:
- Ruby on Rails
- Ember
- Docker
project-url: https://github.com/search?q=org%3Aadab1ts+participa
project-date: Juny 2017
image: bec.jpg
thumbnail: bec-thumbnail.jpg
modal-id: 9
---
BeC ens va encarregar la integració de la plataforma de comunicació i discussió *Discourse* amb la seva plataforma de participació [*Participa*](https://participa.barcelonaencomu.cat/). Específicament, calia delegar el registre i inici de sessió a *Discourse* en *Participa*, per tal de mantenir un únic registre d'usuàries per tota la infraestructura.

A tal efecte, vam adaptar *Participa* per donar servei com a proveïdor OAuth 2, i vam desenvolupar una estratègia OmniAuth específica per modificar el flux d'autenticació i accés a *Discourse*, i delegar en *Participa* la gestió de grups.
