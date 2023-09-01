import {Allow, Entity, Fields, remult} from 'remult'

@Entity("todos", {
  allowApiCrud: Allow.authenticated,
  apiPrefilter: () => ({
    user: remult.user.id
  })
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

  @Fields.string({
    allowApiUpdate: false
  })
  user = remult.user.id;
}