import {Allow, Entity, Fields} from 'remult'

@Entity("todos", {
  allowApiCrud: Allow.authenticated
})
export class TodoEntity {
  @Fields.cuid()
  id = ""

  @Fields.string()
  title = ""

  @Fields.string()
  image = ""

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string()
  user = "";
}