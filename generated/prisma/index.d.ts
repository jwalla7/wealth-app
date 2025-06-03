
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DefaultUser
 * 
 */
export type DefaultUser = $Result.DefaultSelection<Prisma.$DefaultUserPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Holdings
 * 
 */
export type Holdings = $Result.DefaultSelection<Prisma.$HoldingsPayload>
/**
 * Model MajorAssetClass
 * 
 */
export type MajorAssetClass = $Result.DefaultSelection<Prisma.$MajorAssetClassPayload>
/**
 * Model AssetClass
 * 
 */
export type AssetClass = $Result.DefaultSelection<Prisma.$AssetClassPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DefaultUsers
 * const defaultUsers = await prisma.defaultUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DefaultUsers
   * const defaultUsers = await prisma.defaultUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.defaultUser`: Exposes CRUD operations for the **DefaultUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DefaultUsers
    * const defaultUsers = await prisma.defaultUser.findMany()
    * ```
    */
  get defaultUser(): Prisma.DefaultUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holdings`: Exposes CRUD operations for the **Holdings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holdings
    * const holdings = await prisma.holdings.findMany()
    * ```
    */
  get holdings(): Prisma.HoldingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.majorAssetClass`: Exposes CRUD operations for the **MajorAssetClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MajorAssetClasses
    * const majorAssetClasses = await prisma.majorAssetClass.findMany()
    * ```
    */
  get majorAssetClass(): Prisma.MajorAssetClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetClass`: Exposes CRUD operations for the **AssetClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetClasses
    * const assetClasses = await prisma.assetClass.findMany()
    * ```
    */
  get assetClass(): Prisma.AssetClassDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DefaultUser: 'DefaultUser',
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Asset: 'Asset',
    Holdings: 'Holdings',
    MajorAssetClass: 'MajorAssetClass',
    AssetClass: 'AssetClass'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "defaultUser" | "user" | "account" | "session" | "verificationToken" | "asset" | "holdings" | "majorAssetClass" | "assetClass"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DefaultUser: {
        payload: Prisma.$DefaultUserPayload<ExtArgs>
        fields: Prisma.DefaultUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefaultUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefaultUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          findFirst: {
            args: Prisma.DefaultUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefaultUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          findMany: {
            args: Prisma.DefaultUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>[]
          }
          create: {
            args: Prisma.DefaultUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          createMany: {
            args: Prisma.DefaultUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefaultUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>[]
          }
          delete: {
            args: Prisma.DefaultUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          update: {
            args: Prisma.DefaultUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          deleteMany: {
            args: Prisma.DefaultUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefaultUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefaultUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>[]
          }
          upsert: {
            args: Prisma.DefaultUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultUserPayload>
          }
          aggregate: {
            args: Prisma.DefaultUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefaultUser>
          }
          groupBy: {
            args: Prisma.DefaultUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefaultUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefaultUserCountArgs<ExtArgs>
            result: $Utils.Optional<DefaultUserCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Holdings: {
        payload: Prisma.$HoldingsPayload<ExtArgs>
        fields: Prisma.HoldingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoldingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoldingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          findFirst: {
            args: Prisma.HoldingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoldingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          findMany: {
            args: Prisma.HoldingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          create: {
            args: Prisma.HoldingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          createMany: {
            args: Prisma.HoldingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoldingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          delete: {
            args: Prisma.HoldingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          update: {
            args: Prisma.HoldingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          deleteMany: {
            args: Prisma.HoldingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoldingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoldingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          upsert: {
            args: Prisma.HoldingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          aggregate: {
            args: Prisma.HoldingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoldings>
          }
          groupBy: {
            args: Prisma.HoldingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoldingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoldingsCountArgs<ExtArgs>
            result: $Utils.Optional<HoldingsCountAggregateOutputType> | number
          }
        }
      }
      MajorAssetClass: {
        payload: Prisma.$MajorAssetClassPayload<ExtArgs>
        fields: Prisma.MajorAssetClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorAssetClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorAssetClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          findFirst: {
            args: Prisma.MajorAssetClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorAssetClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          findMany: {
            args: Prisma.MajorAssetClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>[]
          }
          create: {
            args: Prisma.MajorAssetClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          createMany: {
            args: Prisma.MajorAssetClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorAssetClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>[]
          }
          delete: {
            args: Prisma.MajorAssetClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          update: {
            args: Prisma.MajorAssetClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          deleteMany: {
            args: Prisma.MajorAssetClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorAssetClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorAssetClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>[]
          }
          upsert: {
            args: Prisma.MajorAssetClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorAssetClassPayload>
          }
          aggregate: {
            args: Prisma.MajorAssetClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajorAssetClass>
          }
          groupBy: {
            args: Prisma.MajorAssetClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorAssetClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorAssetClassCountArgs<ExtArgs>
            result: $Utils.Optional<MajorAssetClassCountAggregateOutputType> | number
          }
        }
      }
      AssetClass: {
        payload: Prisma.$AssetClassPayload<ExtArgs>
        fields: Prisma.AssetClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          findFirst: {
            args: Prisma.AssetClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          findMany: {
            args: Prisma.AssetClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>[]
          }
          create: {
            args: Prisma.AssetClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          createMany: {
            args: Prisma.AssetClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>[]
          }
          delete: {
            args: Prisma.AssetClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          update: {
            args: Prisma.AssetClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          deleteMany: {
            args: Prisma.AssetClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>[]
          }
          upsert: {
            args: Prisma.AssetClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetClassPayload>
          }
          aggregate: {
            args: Prisma.AssetClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetClass>
          }
          groupBy: {
            args: Prisma.AssetClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetClassCountArgs<ExtArgs>
            result: $Utils.Optional<AssetClassCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    defaultUser?: DefaultUserOmit
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    asset?: AssetOmit
    holdings?: HoldingsOmit
    majorAssetClass?: MajorAssetClassOmit
    assetClass?: AssetClassOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type HoldingsCountOutputType
   */

  export type HoldingsCountOutputType = {
    majorAssetClasses: number
  }

  export type HoldingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorAssetClasses?: boolean | HoldingsCountOutputTypeCountMajorAssetClassesArgs
  }

  // Custom InputTypes
  /**
   * HoldingsCountOutputType without action
   */
  export type HoldingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoldingsCountOutputType
     */
    select?: HoldingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HoldingsCountOutputType without action
   */
  export type HoldingsCountOutputTypeCountMajorAssetClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorAssetClassWhereInput
  }


  /**
   * Count Type MajorAssetClassCountOutputType
   */

  export type MajorAssetClassCountOutputType = {
    assetClasses: number
  }

  export type MajorAssetClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assetClasses?: boolean | MajorAssetClassCountOutputTypeCountAssetClassesArgs
  }

  // Custom InputTypes
  /**
   * MajorAssetClassCountOutputType without action
   */
  export type MajorAssetClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClassCountOutputType
     */
    select?: MajorAssetClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorAssetClassCountOutputType without action
   */
  export type MajorAssetClassCountOutputTypeCountAssetClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetClassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DefaultUser
   */

  export type AggregateDefaultUser = {
    _count: DefaultUserCountAggregateOutputType | null
    _avg: DefaultUserAvgAggregateOutputType | null
    _sum: DefaultUserSumAggregateOutputType | null
    _min: DefaultUserMinAggregateOutputType | null
    _max: DefaultUserMaxAggregateOutputType | null
  }

  export type DefaultUserAvgAggregateOutputType = {
    id: number | null
  }

  export type DefaultUserSumAggregateOutputType = {
    id: number | null
  }

  export type DefaultUserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type DefaultUserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type DefaultUserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    _all: number
  }


  export type DefaultUserAvgAggregateInputType = {
    id?: true
  }

  export type DefaultUserSumAggregateInputType = {
    id?: true
  }

  export type DefaultUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type DefaultUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type DefaultUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type DefaultUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultUser to aggregate.
     */
    where?: DefaultUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultUsers to fetch.
     */
    orderBy?: DefaultUserOrderByWithRelationInput | DefaultUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefaultUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DefaultUsers
    **/
    _count?: true | DefaultUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DefaultUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DefaultUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefaultUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefaultUserMaxAggregateInputType
  }

  export type GetDefaultUserAggregateType<T extends DefaultUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDefaultUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefaultUser[P]>
      : GetScalarType<T[P], AggregateDefaultUser[P]>
  }




  export type DefaultUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultUserWhereInput
    orderBy?: DefaultUserOrderByWithAggregationInput | DefaultUserOrderByWithAggregationInput[]
    by: DefaultUserScalarFieldEnum[] | DefaultUserScalarFieldEnum
    having?: DefaultUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefaultUserCountAggregateInputType | true
    _avg?: DefaultUserAvgAggregateInputType
    _sum?: DefaultUserSumAggregateInputType
    _min?: DefaultUserMinAggregateInputType
    _max?: DefaultUserMaxAggregateInputType
  }

  export type DefaultUserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string | null
    _count: DefaultUserCountAggregateOutputType | null
    _avg: DefaultUserAvgAggregateOutputType | null
    _sum: DefaultUserSumAggregateOutputType | null
    _min: DefaultUserMinAggregateOutputType | null
    _max: DefaultUserMaxAggregateOutputType | null
  }

  type GetDefaultUserGroupByPayload<T extends DefaultUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefaultUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefaultUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefaultUserGroupByOutputType[P]>
            : GetScalarType<T[P], DefaultUserGroupByOutputType[P]>
        }
      >
    >


  export type DefaultUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["defaultUser"]>

  export type DefaultUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["defaultUser"]>

  export type DefaultUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["defaultUser"]>

  export type DefaultUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type DefaultUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name", ExtArgs["result"]["defaultUser"]>

  export type $DefaultUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DefaultUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string | null
    }, ExtArgs["result"]["defaultUser"]>
    composites: {}
  }

  type DefaultUserGetPayload<S extends boolean | null | undefined | DefaultUserDefaultArgs> = $Result.GetResult<Prisma.$DefaultUserPayload, S>

  type DefaultUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefaultUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefaultUserCountAggregateInputType | true
    }

  export interface DefaultUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DefaultUser'], meta: { name: 'DefaultUser' } }
    /**
     * Find zero or one DefaultUser that matches the filter.
     * @param {DefaultUserFindUniqueArgs} args - Arguments to find a DefaultUser
     * @example
     * // Get one DefaultUser
     * const defaultUser = await prisma.defaultUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefaultUserFindUniqueArgs>(args: SelectSubset<T, DefaultUserFindUniqueArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DefaultUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefaultUserFindUniqueOrThrowArgs} args - Arguments to find a DefaultUser
     * @example
     * // Get one DefaultUser
     * const defaultUser = await prisma.defaultUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefaultUserFindUniqueOrThrowArgs>(args: SelectSubset<T, DefaultUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserFindFirstArgs} args - Arguments to find a DefaultUser
     * @example
     * // Get one DefaultUser
     * const defaultUser = await prisma.defaultUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefaultUserFindFirstArgs>(args?: SelectSubset<T, DefaultUserFindFirstArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserFindFirstOrThrowArgs} args - Arguments to find a DefaultUser
     * @example
     * // Get one DefaultUser
     * const defaultUser = await prisma.defaultUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefaultUserFindFirstOrThrowArgs>(args?: SelectSubset<T, DefaultUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DefaultUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DefaultUsers
     * const defaultUsers = await prisma.defaultUser.findMany()
     * 
     * // Get first 10 DefaultUsers
     * const defaultUsers = await prisma.defaultUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const defaultUserWithIdOnly = await prisma.defaultUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefaultUserFindManyArgs>(args?: SelectSubset<T, DefaultUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DefaultUser.
     * @param {DefaultUserCreateArgs} args - Arguments to create a DefaultUser.
     * @example
     * // Create one DefaultUser
     * const DefaultUser = await prisma.defaultUser.create({
     *   data: {
     *     // ... data to create a DefaultUser
     *   }
     * })
     * 
     */
    create<T extends DefaultUserCreateArgs>(args: SelectSubset<T, DefaultUserCreateArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DefaultUsers.
     * @param {DefaultUserCreateManyArgs} args - Arguments to create many DefaultUsers.
     * @example
     * // Create many DefaultUsers
     * const defaultUser = await prisma.defaultUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefaultUserCreateManyArgs>(args?: SelectSubset<T, DefaultUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DefaultUsers and returns the data saved in the database.
     * @param {DefaultUserCreateManyAndReturnArgs} args - Arguments to create many DefaultUsers.
     * @example
     * // Create many DefaultUsers
     * const defaultUser = await prisma.defaultUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DefaultUsers and only return the `id`
     * const defaultUserWithIdOnly = await prisma.defaultUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefaultUserCreateManyAndReturnArgs>(args?: SelectSubset<T, DefaultUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DefaultUser.
     * @param {DefaultUserDeleteArgs} args - Arguments to delete one DefaultUser.
     * @example
     * // Delete one DefaultUser
     * const DefaultUser = await prisma.defaultUser.delete({
     *   where: {
     *     // ... filter to delete one DefaultUser
     *   }
     * })
     * 
     */
    delete<T extends DefaultUserDeleteArgs>(args: SelectSubset<T, DefaultUserDeleteArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DefaultUser.
     * @param {DefaultUserUpdateArgs} args - Arguments to update one DefaultUser.
     * @example
     * // Update one DefaultUser
     * const defaultUser = await prisma.defaultUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefaultUserUpdateArgs>(args: SelectSubset<T, DefaultUserUpdateArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DefaultUsers.
     * @param {DefaultUserDeleteManyArgs} args - Arguments to filter DefaultUsers to delete.
     * @example
     * // Delete a few DefaultUsers
     * const { count } = await prisma.defaultUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefaultUserDeleteManyArgs>(args?: SelectSubset<T, DefaultUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DefaultUsers
     * const defaultUser = await prisma.defaultUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefaultUserUpdateManyArgs>(args: SelectSubset<T, DefaultUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultUsers and returns the data updated in the database.
     * @param {DefaultUserUpdateManyAndReturnArgs} args - Arguments to update many DefaultUsers.
     * @example
     * // Update many DefaultUsers
     * const defaultUser = await prisma.defaultUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DefaultUsers and only return the `id`
     * const defaultUserWithIdOnly = await prisma.defaultUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DefaultUserUpdateManyAndReturnArgs>(args: SelectSubset<T, DefaultUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DefaultUser.
     * @param {DefaultUserUpsertArgs} args - Arguments to update or create a DefaultUser.
     * @example
     * // Update or create a DefaultUser
     * const defaultUser = await prisma.defaultUser.upsert({
     *   create: {
     *     // ... data to create a DefaultUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DefaultUser we want to update
     *   }
     * })
     */
    upsert<T extends DefaultUserUpsertArgs>(args: SelectSubset<T, DefaultUserUpsertArgs<ExtArgs>>): Prisma__DefaultUserClient<$Result.GetResult<Prisma.$DefaultUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DefaultUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserCountArgs} args - Arguments to filter DefaultUsers to count.
     * @example
     * // Count the number of DefaultUsers
     * const count = await prisma.defaultUser.count({
     *   where: {
     *     // ... the filter for the DefaultUsers we want to count
     *   }
     * })
    **/
    count<T extends DefaultUserCountArgs>(
      args?: Subset<T, DefaultUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefaultUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DefaultUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DefaultUserAggregateArgs>(args: Subset<T, DefaultUserAggregateArgs>): Prisma.PrismaPromise<GetDefaultUserAggregateType<T>>

    /**
     * Group by DefaultUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DefaultUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefaultUserGroupByArgs['orderBy'] }
        : { orderBy?: DefaultUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DefaultUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefaultUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DefaultUser model
   */
  readonly fields: DefaultUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DefaultUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefaultUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DefaultUser model
   */
  interface DefaultUserFieldRefs {
    readonly id: FieldRef<"DefaultUser", 'Int'>
    readonly createdAt: FieldRef<"DefaultUser", 'DateTime'>
    readonly email: FieldRef<"DefaultUser", 'String'>
    readonly name: FieldRef<"DefaultUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DefaultUser findUnique
   */
  export type DefaultUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter, which DefaultUser to fetch.
     */
    where: DefaultUserWhereUniqueInput
  }

  /**
   * DefaultUser findUniqueOrThrow
   */
  export type DefaultUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter, which DefaultUser to fetch.
     */
    where: DefaultUserWhereUniqueInput
  }

  /**
   * DefaultUser findFirst
   */
  export type DefaultUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter, which DefaultUser to fetch.
     */
    where?: DefaultUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultUsers to fetch.
     */
    orderBy?: DefaultUserOrderByWithRelationInput | DefaultUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultUsers.
     */
    cursor?: DefaultUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultUsers.
     */
    distinct?: DefaultUserScalarFieldEnum | DefaultUserScalarFieldEnum[]
  }

  /**
   * DefaultUser findFirstOrThrow
   */
  export type DefaultUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter, which DefaultUser to fetch.
     */
    where?: DefaultUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultUsers to fetch.
     */
    orderBy?: DefaultUserOrderByWithRelationInput | DefaultUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultUsers.
     */
    cursor?: DefaultUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultUsers.
     */
    distinct?: DefaultUserScalarFieldEnum | DefaultUserScalarFieldEnum[]
  }

  /**
   * DefaultUser findMany
   */
  export type DefaultUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter, which DefaultUsers to fetch.
     */
    where?: DefaultUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultUsers to fetch.
     */
    orderBy?: DefaultUserOrderByWithRelationInput | DefaultUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DefaultUsers.
     */
    cursor?: DefaultUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultUsers.
     */
    skip?: number
    distinct?: DefaultUserScalarFieldEnum | DefaultUserScalarFieldEnum[]
  }

  /**
   * DefaultUser create
   */
  export type DefaultUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * The data needed to create a DefaultUser.
     */
    data: XOR<DefaultUserCreateInput, DefaultUserUncheckedCreateInput>
  }

  /**
   * DefaultUser createMany
   */
  export type DefaultUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DefaultUsers.
     */
    data: DefaultUserCreateManyInput | DefaultUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultUser createManyAndReturn
   */
  export type DefaultUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * The data used to create many DefaultUsers.
     */
    data: DefaultUserCreateManyInput | DefaultUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultUser update
   */
  export type DefaultUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * The data needed to update a DefaultUser.
     */
    data: XOR<DefaultUserUpdateInput, DefaultUserUncheckedUpdateInput>
    /**
     * Choose, which DefaultUser to update.
     */
    where: DefaultUserWhereUniqueInput
  }

  /**
   * DefaultUser updateMany
   */
  export type DefaultUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DefaultUsers.
     */
    data: XOR<DefaultUserUpdateManyMutationInput, DefaultUserUncheckedUpdateManyInput>
    /**
     * Filter which DefaultUsers to update
     */
    where?: DefaultUserWhereInput
    /**
     * Limit how many DefaultUsers to update.
     */
    limit?: number
  }

  /**
   * DefaultUser updateManyAndReturn
   */
  export type DefaultUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * The data used to update DefaultUsers.
     */
    data: XOR<DefaultUserUpdateManyMutationInput, DefaultUserUncheckedUpdateManyInput>
    /**
     * Filter which DefaultUsers to update
     */
    where?: DefaultUserWhereInput
    /**
     * Limit how many DefaultUsers to update.
     */
    limit?: number
  }

  /**
   * DefaultUser upsert
   */
  export type DefaultUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * The filter to search for the DefaultUser to update in case it exists.
     */
    where: DefaultUserWhereUniqueInput
    /**
     * In case the DefaultUser found by the `where` argument doesn't exist, create a new DefaultUser with this data.
     */
    create: XOR<DefaultUserCreateInput, DefaultUserUncheckedCreateInput>
    /**
     * In case the DefaultUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefaultUserUpdateInput, DefaultUserUncheckedUpdateInput>
  }

  /**
   * DefaultUser delete
   */
  export type DefaultUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
    /**
     * Filter which DefaultUser to delete.
     */
    where: DefaultUserWhereUniqueInput
  }

  /**
   * DefaultUser deleteMany
   */
  export type DefaultUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultUsers to delete
     */
    where?: DefaultUserWhereInput
    /**
     * Limit how many DefaultUsers to delete.
     */
    limit?: number
  }

  /**
   * DefaultUser without action
   */
  export type DefaultUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultUser
     */
    select?: DefaultUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultUser
     */
    omit?: DefaultUserOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    balanceCostBasis: number | null
    balanceCurrent: number | null
    balancePrice: number | null
    balanceQuantityCurrent: number | null
    institutionId: number | null
  }

  export type AssetSumAggregateOutputType = {
    balanceCostBasis: number | null
    balanceCurrent: number | null
    balancePrice: number | null
    balanceQuantityCurrent: number | null
    institutionId: number | null
  }

  export type AssetMinAggregateOutputType = {
    assetId: string | null
    assetDescription: string | null
    assetInfoType: string | null
    assetMask: string | null
    assetName: string | null
    assetOwnerName: string | null
    balanceAsOf: Date | null
    balanceCostBasis: number | null
    balanceCostFrom: string | null
    balanceCurrent: number | null
    balanceFrom: string | null
    balancePrice: number | null
    balancePriceFrom: string | null
    balanceQuantityCurrent: number | null
    cognitoId: string | null
    creationDate: Date | null
    currencyCode: string | null
    deactivateBy: Date | null
    descriptionEstatePlan: string | null
    hasInvestment: boolean | null
    includeInNetWorth: boolean | null
    institutionId: number | null
    institutionName: string | null
    integrationAccountId: string | null
    isActive: boolean | null
    isAsset: boolean | null
    isFavorite: boolean | null
    isLinkedVendor: boolean | null
    lastUpdate: Date | null
    lastUpdateAttempt: Date | null
    logoName: string | null
    modificationDate: Date | null
    nextUpdate: Date | null
    nickname: string | null
    note: string | null
    noteDate: Date | null
    ownership: string | null
    primaryAssetCategory: string | null
    status: string | null
    statusCode: string | null
    userInstitutionId: string | null
    vendorAccountType: string | null
    vendorContainer: string | null
    vendorResponseType: string | null
    wealthAssetType: string | null
    wid: string | null
  }

  export type AssetMaxAggregateOutputType = {
    assetId: string | null
    assetDescription: string | null
    assetInfoType: string | null
    assetMask: string | null
    assetName: string | null
    assetOwnerName: string | null
    balanceAsOf: Date | null
    balanceCostBasis: number | null
    balanceCostFrom: string | null
    balanceCurrent: number | null
    balanceFrom: string | null
    balancePrice: number | null
    balancePriceFrom: string | null
    balanceQuantityCurrent: number | null
    cognitoId: string | null
    creationDate: Date | null
    currencyCode: string | null
    deactivateBy: Date | null
    descriptionEstatePlan: string | null
    hasInvestment: boolean | null
    includeInNetWorth: boolean | null
    institutionId: number | null
    institutionName: string | null
    integrationAccountId: string | null
    isActive: boolean | null
    isAsset: boolean | null
    isFavorite: boolean | null
    isLinkedVendor: boolean | null
    lastUpdate: Date | null
    lastUpdateAttempt: Date | null
    logoName: string | null
    modificationDate: Date | null
    nextUpdate: Date | null
    nickname: string | null
    note: string | null
    noteDate: Date | null
    ownership: string | null
    primaryAssetCategory: string | null
    status: string | null
    statusCode: string | null
    userInstitutionId: string | null
    vendorAccountType: string | null
    vendorContainer: string | null
    vendorResponseType: string | null
    wealthAssetType: string | null
    wid: string | null
  }

  export type AssetCountAggregateOutputType = {
    assetId: number
    assetDescription: number
    assetInfo: number
    assetInfoType: number
    assetMask: number
    assetName: number
    assetOwnerName: number
    balanceAsOf: number
    balanceCostBasis: number
    balanceCostFrom: number
    balanceCurrent: number
    balanceFrom: number
    balancePrice: number
    balancePriceFrom: number
    balanceQuantityCurrent: number
    beneficiaryComposition: number
    cognitoId: number
    creationDate: number
    currencyCode: number
    deactivateBy: number
    descriptionEstatePlan: number
    hasInvestment: number
    includeInNetWorth: number
    institutionId: number
    institutionName: number
    integration: number
    integrationAccountId: number
    isActive: number
    isAsset: number
    isFavorite: number
    isLinkedVendor: number
    lastUpdate: number
    lastUpdateAttempt: number
    logoName: number
    modificationDate: number
    nextUpdate: number
    nickname: number
    note: number
    noteDate: number
    ownership: number
    primaryAssetCategory: number
    status: number
    statusCode: number
    userInstitutionId: number
    vendorAccountType: number
    vendorContainer: number
    vendorResponse: number
    vendorResponseType: number
    wealthAssetType: number
    wid: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    balanceCostBasis?: true
    balanceCurrent?: true
    balancePrice?: true
    balanceQuantityCurrent?: true
    institutionId?: true
  }

  export type AssetSumAggregateInputType = {
    balanceCostBasis?: true
    balanceCurrent?: true
    balancePrice?: true
    balanceQuantityCurrent?: true
    institutionId?: true
  }

  export type AssetMinAggregateInputType = {
    assetId?: true
    assetDescription?: true
    assetInfoType?: true
    assetMask?: true
    assetName?: true
    assetOwnerName?: true
    balanceAsOf?: true
    balanceCostBasis?: true
    balanceCostFrom?: true
    balanceCurrent?: true
    balanceFrom?: true
    balancePrice?: true
    balancePriceFrom?: true
    balanceQuantityCurrent?: true
    cognitoId?: true
    creationDate?: true
    currencyCode?: true
    deactivateBy?: true
    descriptionEstatePlan?: true
    hasInvestment?: true
    includeInNetWorth?: true
    institutionId?: true
    institutionName?: true
    integrationAccountId?: true
    isActive?: true
    isAsset?: true
    isFavorite?: true
    isLinkedVendor?: true
    lastUpdate?: true
    lastUpdateAttempt?: true
    logoName?: true
    modificationDate?: true
    nextUpdate?: true
    nickname?: true
    note?: true
    noteDate?: true
    ownership?: true
    primaryAssetCategory?: true
    status?: true
    statusCode?: true
    userInstitutionId?: true
    vendorAccountType?: true
    vendorContainer?: true
    vendorResponseType?: true
    wealthAssetType?: true
    wid?: true
  }

  export type AssetMaxAggregateInputType = {
    assetId?: true
    assetDescription?: true
    assetInfoType?: true
    assetMask?: true
    assetName?: true
    assetOwnerName?: true
    balanceAsOf?: true
    balanceCostBasis?: true
    balanceCostFrom?: true
    balanceCurrent?: true
    balanceFrom?: true
    balancePrice?: true
    balancePriceFrom?: true
    balanceQuantityCurrent?: true
    cognitoId?: true
    creationDate?: true
    currencyCode?: true
    deactivateBy?: true
    descriptionEstatePlan?: true
    hasInvestment?: true
    includeInNetWorth?: true
    institutionId?: true
    institutionName?: true
    integrationAccountId?: true
    isActive?: true
    isAsset?: true
    isFavorite?: true
    isLinkedVendor?: true
    lastUpdate?: true
    lastUpdateAttempt?: true
    logoName?: true
    modificationDate?: true
    nextUpdate?: true
    nickname?: true
    note?: true
    noteDate?: true
    ownership?: true
    primaryAssetCategory?: true
    status?: true
    statusCode?: true
    userInstitutionId?: true
    vendorAccountType?: true
    vendorContainer?: true
    vendorResponseType?: true
    wealthAssetType?: true
    wid?: true
  }

  export type AssetCountAggregateInputType = {
    assetId?: true
    assetDescription?: true
    assetInfo?: true
    assetInfoType?: true
    assetMask?: true
    assetName?: true
    assetOwnerName?: true
    balanceAsOf?: true
    balanceCostBasis?: true
    balanceCostFrom?: true
    balanceCurrent?: true
    balanceFrom?: true
    balancePrice?: true
    balancePriceFrom?: true
    balanceQuantityCurrent?: true
    beneficiaryComposition?: true
    cognitoId?: true
    creationDate?: true
    currencyCode?: true
    deactivateBy?: true
    descriptionEstatePlan?: true
    hasInvestment?: true
    includeInNetWorth?: true
    institutionId?: true
    institutionName?: true
    integration?: true
    integrationAccountId?: true
    isActive?: true
    isAsset?: true
    isFavorite?: true
    isLinkedVendor?: true
    lastUpdate?: true
    lastUpdateAttempt?: true
    logoName?: true
    modificationDate?: true
    nextUpdate?: true
    nickname?: true
    note?: true
    noteDate?: true
    ownership?: true
    primaryAssetCategory?: true
    status?: true
    statusCode?: true
    userInstitutionId?: true
    vendorAccountType?: true
    vendorContainer?: true
    vendorResponse?: true
    vendorResponseType?: true
    wealthAssetType?: true
    wid?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    assetId: string
    assetDescription: string | null
    assetInfo: JsonValue | null
    assetInfoType: string | null
    assetMask: string | null
    assetName: string | null
    assetOwnerName: string | null
    balanceAsOf: Date | null
    balanceCostBasis: number | null
    balanceCostFrom: string | null
    balanceCurrent: number | null
    balanceFrom: string | null
    balancePrice: number | null
    balancePriceFrom: string | null
    balanceQuantityCurrent: number | null
    beneficiaryComposition: JsonValue | null
    cognitoId: string | null
    creationDate: Date | null
    currencyCode: string | null
    deactivateBy: Date | null
    descriptionEstatePlan: string | null
    hasInvestment: boolean | null
    includeInNetWorth: boolean | null
    institutionId: number | null
    institutionName: string | null
    integration: JsonValue | null
    integrationAccountId: string | null
    isActive: boolean | null
    isAsset: boolean | null
    isFavorite: boolean | null
    isLinkedVendor: boolean | null
    lastUpdate: Date | null
    lastUpdateAttempt: Date | null
    logoName: string | null
    modificationDate: Date | null
    nextUpdate: Date | null
    nickname: string | null
    note: string | null
    noteDate: Date | null
    ownership: string | null
    primaryAssetCategory: string | null
    status: string | null
    statusCode: string | null
    userInstitutionId: string | null
    vendorAccountType: string | null
    vendorContainer: string | null
    vendorResponse: JsonValue | null
    vendorResponseType: string | null
    wealthAssetType: string | null
    wid: string | null
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assetId?: boolean
    assetDescription?: boolean
    assetInfo?: boolean
    assetInfoType?: boolean
    assetMask?: boolean
    assetName?: boolean
    assetOwnerName?: boolean
    balanceAsOf?: boolean
    balanceCostBasis?: boolean
    balanceCostFrom?: boolean
    balanceCurrent?: boolean
    balanceFrom?: boolean
    balancePrice?: boolean
    balancePriceFrom?: boolean
    balanceQuantityCurrent?: boolean
    beneficiaryComposition?: boolean
    cognitoId?: boolean
    creationDate?: boolean
    currencyCode?: boolean
    deactivateBy?: boolean
    descriptionEstatePlan?: boolean
    hasInvestment?: boolean
    includeInNetWorth?: boolean
    institutionId?: boolean
    institutionName?: boolean
    integration?: boolean
    integrationAccountId?: boolean
    isActive?: boolean
    isAsset?: boolean
    isFavorite?: boolean
    isLinkedVendor?: boolean
    lastUpdate?: boolean
    lastUpdateAttempt?: boolean
    logoName?: boolean
    modificationDate?: boolean
    nextUpdate?: boolean
    nickname?: boolean
    note?: boolean
    noteDate?: boolean
    ownership?: boolean
    primaryAssetCategory?: boolean
    status?: boolean
    statusCode?: boolean
    userInstitutionId?: boolean
    vendorAccountType?: boolean
    vendorContainer?: boolean
    vendorResponse?: boolean
    vendorResponseType?: boolean
    wealthAssetType?: boolean
    wid?: boolean
    holdings?: boolean | Asset$holdingsArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assetId?: boolean
    assetDescription?: boolean
    assetInfo?: boolean
    assetInfoType?: boolean
    assetMask?: boolean
    assetName?: boolean
    assetOwnerName?: boolean
    balanceAsOf?: boolean
    balanceCostBasis?: boolean
    balanceCostFrom?: boolean
    balanceCurrent?: boolean
    balanceFrom?: boolean
    balancePrice?: boolean
    balancePriceFrom?: boolean
    balanceQuantityCurrent?: boolean
    beneficiaryComposition?: boolean
    cognitoId?: boolean
    creationDate?: boolean
    currencyCode?: boolean
    deactivateBy?: boolean
    descriptionEstatePlan?: boolean
    hasInvestment?: boolean
    includeInNetWorth?: boolean
    institutionId?: boolean
    institutionName?: boolean
    integration?: boolean
    integrationAccountId?: boolean
    isActive?: boolean
    isAsset?: boolean
    isFavorite?: boolean
    isLinkedVendor?: boolean
    lastUpdate?: boolean
    lastUpdateAttempt?: boolean
    logoName?: boolean
    modificationDate?: boolean
    nextUpdate?: boolean
    nickname?: boolean
    note?: boolean
    noteDate?: boolean
    ownership?: boolean
    primaryAssetCategory?: boolean
    status?: boolean
    statusCode?: boolean
    userInstitutionId?: boolean
    vendorAccountType?: boolean
    vendorContainer?: boolean
    vendorResponse?: boolean
    vendorResponseType?: boolean
    wealthAssetType?: boolean
    wid?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assetId?: boolean
    assetDescription?: boolean
    assetInfo?: boolean
    assetInfoType?: boolean
    assetMask?: boolean
    assetName?: boolean
    assetOwnerName?: boolean
    balanceAsOf?: boolean
    balanceCostBasis?: boolean
    balanceCostFrom?: boolean
    balanceCurrent?: boolean
    balanceFrom?: boolean
    balancePrice?: boolean
    balancePriceFrom?: boolean
    balanceQuantityCurrent?: boolean
    beneficiaryComposition?: boolean
    cognitoId?: boolean
    creationDate?: boolean
    currencyCode?: boolean
    deactivateBy?: boolean
    descriptionEstatePlan?: boolean
    hasInvestment?: boolean
    includeInNetWorth?: boolean
    institutionId?: boolean
    institutionName?: boolean
    integration?: boolean
    integrationAccountId?: boolean
    isActive?: boolean
    isAsset?: boolean
    isFavorite?: boolean
    isLinkedVendor?: boolean
    lastUpdate?: boolean
    lastUpdateAttempt?: boolean
    logoName?: boolean
    modificationDate?: boolean
    nextUpdate?: boolean
    nickname?: boolean
    note?: boolean
    noteDate?: boolean
    ownership?: boolean
    primaryAssetCategory?: boolean
    status?: boolean
    statusCode?: boolean
    userInstitutionId?: boolean
    vendorAccountType?: boolean
    vendorContainer?: boolean
    vendorResponse?: boolean
    vendorResponseType?: boolean
    wealthAssetType?: boolean
    wid?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    assetId?: boolean
    assetDescription?: boolean
    assetInfo?: boolean
    assetInfoType?: boolean
    assetMask?: boolean
    assetName?: boolean
    assetOwnerName?: boolean
    balanceAsOf?: boolean
    balanceCostBasis?: boolean
    balanceCostFrom?: boolean
    balanceCurrent?: boolean
    balanceFrom?: boolean
    balancePrice?: boolean
    balancePriceFrom?: boolean
    balanceQuantityCurrent?: boolean
    beneficiaryComposition?: boolean
    cognitoId?: boolean
    creationDate?: boolean
    currencyCode?: boolean
    deactivateBy?: boolean
    descriptionEstatePlan?: boolean
    hasInvestment?: boolean
    includeInNetWorth?: boolean
    institutionId?: boolean
    institutionName?: boolean
    integration?: boolean
    integrationAccountId?: boolean
    isActive?: boolean
    isAsset?: boolean
    isFavorite?: boolean
    isLinkedVendor?: boolean
    lastUpdate?: boolean
    lastUpdateAttempt?: boolean
    logoName?: boolean
    modificationDate?: boolean
    nextUpdate?: boolean
    nickname?: boolean
    note?: boolean
    noteDate?: boolean
    ownership?: boolean
    primaryAssetCategory?: boolean
    status?: boolean
    statusCode?: boolean
    userInstitutionId?: boolean
    vendorAccountType?: boolean
    vendorContainer?: boolean
    vendorResponse?: boolean
    vendorResponseType?: boolean
    wealthAssetType?: boolean
    wid?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assetId" | "assetDescription" | "assetInfo" | "assetInfoType" | "assetMask" | "assetName" | "assetOwnerName" | "balanceAsOf" | "balanceCostBasis" | "balanceCostFrom" | "balanceCurrent" | "balanceFrom" | "balancePrice" | "balancePriceFrom" | "balanceQuantityCurrent" | "beneficiaryComposition" | "cognitoId" | "creationDate" | "currencyCode" | "deactivateBy" | "descriptionEstatePlan" | "hasInvestment" | "includeInNetWorth" | "institutionId" | "institutionName" | "integration" | "integrationAccountId" | "isActive" | "isAsset" | "isFavorite" | "isLinkedVendor" | "lastUpdate" | "lastUpdateAttempt" | "logoName" | "modificationDate" | "nextUpdate" | "nickname" | "note" | "noteDate" | "ownership" | "primaryAssetCategory" | "status" | "statusCode" | "userInstitutionId" | "vendorAccountType" | "vendorContainer" | "vendorResponse" | "vendorResponseType" | "wealthAssetType" | "wid", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | Asset$holdingsArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      holdings: Prisma.$HoldingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      assetId: string
      assetDescription: string | null
      assetInfo: Prisma.JsonValue | null
      assetInfoType: string | null
      assetMask: string | null
      assetName: string | null
      assetOwnerName: string | null
      balanceAsOf: Date | null
      balanceCostBasis: number | null
      balanceCostFrom: string | null
      balanceCurrent: number | null
      balanceFrom: string | null
      balancePrice: number | null
      balancePriceFrom: string | null
      balanceQuantityCurrent: number | null
      beneficiaryComposition: Prisma.JsonValue | null
      cognitoId: string | null
      creationDate: Date | null
      currencyCode: string | null
      deactivateBy: Date | null
      descriptionEstatePlan: string | null
      hasInvestment: boolean | null
      includeInNetWorth: boolean | null
      institutionId: number | null
      institutionName: string | null
      integration: Prisma.JsonValue | null
      integrationAccountId: string | null
      isActive: boolean | null
      isAsset: boolean | null
      isFavorite: boolean | null
      isLinkedVendor: boolean | null
      lastUpdate: Date | null
      lastUpdateAttempt: Date | null
      logoName: string | null
      modificationDate: Date | null
      nextUpdate: Date | null
      nickname: string | null
      note: string | null
      noteDate: Date | null
      ownership: string | null
      primaryAssetCategory: string | null
      status: string | null
      statusCode: string | null
      userInstitutionId: string | null
      vendorAccountType: string | null
      vendorContainer: string | null
      vendorResponse: Prisma.JsonValue | null
      vendorResponseType: string | null
      wealthAssetType: string | null
      wid: string | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `assetId`
     * const assetWithAssetIdOnly = await prisma.asset.findMany({ select: { assetId: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `assetId`
     * const assetWithAssetIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { assetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `assetId`
     * const assetWithAssetIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { assetId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    holdings<T extends Asset$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$holdingsArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly assetId: FieldRef<"Asset", 'String'>
    readonly assetDescription: FieldRef<"Asset", 'String'>
    readonly assetInfo: FieldRef<"Asset", 'Json'>
    readonly assetInfoType: FieldRef<"Asset", 'String'>
    readonly assetMask: FieldRef<"Asset", 'String'>
    readonly assetName: FieldRef<"Asset", 'String'>
    readonly assetOwnerName: FieldRef<"Asset", 'String'>
    readonly balanceAsOf: FieldRef<"Asset", 'DateTime'>
    readonly balanceCostBasis: FieldRef<"Asset", 'Float'>
    readonly balanceCostFrom: FieldRef<"Asset", 'String'>
    readonly balanceCurrent: FieldRef<"Asset", 'Float'>
    readonly balanceFrom: FieldRef<"Asset", 'String'>
    readonly balancePrice: FieldRef<"Asset", 'Float'>
    readonly balancePriceFrom: FieldRef<"Asset", 'String'>
    readonly balanceQuantityCurrent: FieldRef<"Asset", 'Float'>
    readonly beneficiaryComposition: FieldRef<"Asset", 'Json'>
    readonly cognitoId: FieldRef<"Asset", 'String'>
    readonly creationDate: FieldRef<"Asset", 'DateTime'>
    readonly currencyCode: FieldRef<"Asset", 'String'>
    readonly deactivateBy: FieldRef<"Asset", 'DateTime'>
    readonly descriptionEstatePlan: FieldRef<"Asset", 'String'>
    readonly hasInvestment: FieldRef<"Asset", 'Boolean'>
    readonly includeInNetWorth: FieldRef<"Asset", 'Boolean'>
    readonly institutionId: FieldRef<"Asset", 'Int'>
    readonly institutionName: FieldRef<"Asset", 'String'>
    readonly integration: FieldRef<"Asset", 'Json'>
    readonly integrationAccountId: FieldRef<"Asset", 'String'>
    readonly isActive: FieldRef<"Asset", 'Boolean'>
    readonly isAsset: FieldRef<"Asset", 'Boolean'>
    readonly isFavorite: FieldRef<"Asset", 'Boolean'>
    readonly isLinkedVendor: FieldRef<"Asset", 'Boolean'>
    readonly lastUpdate: FieldRef<"Asset", 'DateTime'>
    readonly lastUpdateAttempt: FieldRef<"Asset", 'DateTime'>
    readonly logoName: FieldRef<"Asset", 'String'>
    readonly modificationDate: FieldRef<"Asset", 'DateTime'>
    readonly nextUpdate: FieldRef<"Asset", 'DateTime'>
    readonly nickname: FieldRef<"Asset", 'String'>
    readonly note: FieldRef<"Asset", 'String'>
    readonly noteDate: FieldRef<"Asset", 'DateTime'>
    readonly ownership: FieldRef<"Asset", 'String'>
    readonly primaryAssetCategory: FieldRef<"Asset", 'String'>
    readonly status: FieldRef<"Asset", 'String'>
    readonly statusCode: FieldRef<"Asset", 'String'>
    readonly userInstitutionId: FieldRef<"Asset", 'String'>
    readonly vendorAccountType: FieldRef<"Asset", 'String'>
    readonly vendorContainer: FieldRef<"Asset", 'String'>
    readonly vendorResponse: FieldRef<"Asset", 'Json'>
    readonly vendorResponseType: FieldRef<"Asset", 'String'>
    readonly wealthAssetType: FieldRef<"Asset", 'String'>
    readonly wid: FieldRef<"Asset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.holdings
   */
  export type Asset$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    where?: HoldingsWhereInput
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model Holdings
   */

  export type AggregateHoldings = {
    _count: HoldingsCountAggregateOutputType | null
    _avg: HoldingsAvgAggregateOutputType | null
    _sum: HoldingsSumAggregateOutputType | null
    _min: HoldingsMinAggregateOutputType | null
    _max: HoldingsMaxAggregateOutputType | null
  }

  export type HoldingsAvgAggregateOutputType = {
    id: number | null
  }

  export type HoldingsSumAggregateOutputType = {
    id: number | null
  }

  export type HoldingsMinAggregateOutputType = {
    id: number | null
    assetId: string | null
  }

  export type HoldingsMaxAggregateOutputType = {
    id: number | null
    assetId: string | null
  }

  export type HoldingsCountAggregateOutputType = {
    id: number
    assetId: number
    _all: number
  }


  export type HoldingsAvgAggregateInputType = {
    id?: true
  }

  export type HoldingsSumAggregateInputType = {
    id?: true
  }

  export type HoldingsMinAggregateInputType = {
    id?: true
    assetId?: true
  }

  export type HoldingsMaxAggregateInputType = {
    id?: true
    assetId?: true
  }

  export type HoldingsCountAggregateInputType = {
    id?: true
    assetId?: true
    _all?: true
  }

  export type HoldingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to aggregate.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holdings
    **/
    _count?: true | HoldingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoldingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoldingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoldingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoldingsMaxAggregateInputType
  }

  export type GetHoldingsAggregateType<T extends HoldingsAggregateArgs> = {
        [P in keyof T & keyof AggregateHoldings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoldings[P]>
      : GetScalarType<T[P], AggregateHoldings[P]>
  }




  export type HoldingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingsWhereInput
    orderBy?: HoldingsOrderByWithAggregationInput | HoldingsOrderByWithAggregationInput[]
    by: HoldingsScalarFieldEnum[] | HoldingsScalarFieldEnum
    having?: HoldingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoldingsCountAggregateInputType | true
    _avg?: HoldingsAvgAggregateInputType
    _sum?: HoldingsSumAggregateInputType
    _min?: HoldingsMinAggregateInputType
    _max?: HoldingsMaxAggregateInputType
  }

  export type HoldingsGroupByOutputType = {
    id: number
    assetId: string
    _count: HoldingsCountAggregateOutputType | null
    _avg: HoldingsAvgAggregateOutputType | null
    _sum: HoldingsSumAggregateOutputType | null
    _min: HoldingsMinAggregateOutputType | null
    _max: HoldingsMaxAggregateOutputType | null
  }

  type GetHoldingsGroupByPayload<T extends HoldingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoldingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoldingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoldingsGroupByOutputType[P]>
            : GetScalarType<T[P], HoldingsGroupByOutputType[P]>
        }
      >
    >


  export type HoldingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    majorAssetClasses?: boolean | Holdings$majorAssetClassesArgs<ExtArgs>
    _count?: boolean | HoldingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectScalar = {
    id?: boolean
    assetId?: boolean
  }

  export type HoldingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId", ExtArgs["result"]["holdings"]>
  export type HoldingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    majorAssetClasses?: boolean | Holdings$majorAssetClassesArgs<ExtArgs>
    _count?: boolean | HoldingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HoldingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type HoldingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $HoldingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holdings"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      majorAssetClasses: Prisma.$MajorAssetClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assetId: string
    }, ExtArgs["result"]["holdings"]>
    composites: {}
  }

  type HoldingsGetPayload<S extends boolean | null | undefined | HoldingsDefaultArgs> = $Result.GetResult<Prisma.$HoldingsPayload, S>

  type HoldingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoldingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoldingsCountAggregateInputType | true
    }

  export interface HoldingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holdings'], meta: { name: 'Holdings' } }
    /**
     * Find zero or one Holdings that matches the filter.
     * @param {HoldingsFindUniqueArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoldingsFindUniqueArgs>(args: SelectSubset<T, HoldingsFindUniqueArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holdings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoldingsFindUniqueOrThrowArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoldingsFindUniqueOrThrowArgs>(args: SelectSubset<T, HoldingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindFirstArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoldingsFindFirstArgs>(args?: SelectSubset<T, HoldingsFindFirstArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holdings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindFirstOrThrowArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoldingsFindFirstOrThrowArgs>(args?: SelectSubset<T, HoldingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holdings
     * const holdings = await prisma.holdings.findMany()
     * 
     * // Get first 10 Holdings
     * const holdings = await prisma.holdings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holdingsWithIdOnly = await prisma.holdings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoldingsFindManyArgs>(args?: SelectSubset<T, HoldingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holdings.
     * @param {HoldingsCreateArgs} args - Arguments to create a Holdings.
     * @example
     * // Create one Holdings
     * const Holdings = await prisma.holdings.create({
     *   data: {
     *     // ... data to create a Holdings
     *   }
     * })
     * 
     */
    create<T extends HoldingsCreateArgs>(args: SelectSubset<T, HoldingsCreateArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holdings.
     * @param {HoldingsCreateManyArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holdings = await prisma.holdings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoldingsCreateManyArgs>(args?: SelectSubset<T, HoldingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holdings and returns the data saved in the database.
     * @param {HoldingsCreateManyAndReturnArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holdings = await prisma.holdings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holdings and only return the `id`
     * const holdingsWithIdOnly = await prisma.holdings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoldingsCreateManyAndReturnArgs>(args?: SelectSubset<T, HoldingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holdings.
     * @param {HoldingsDeleteArgs} args - Arguments to delete one Holdings.
     * @example
     * // Delete one Holdings
     * const Holdings = await prisma.holdings.delete({
     *   where: {
     *     // ... filter to delete one Holdings
     *   }
     * })
     * 
     */
    delete<T extends HoldingsDeleteArgs>(args: SelectSubset<T, HoldingsDeleteArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holdings.
     * @param {HoldingsUpdateArgs} args - Arguments to update one Holdings.
     * @example
     * // Update one Holdings
     * const holdings = await prisma.holdings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoldingsUpdateArgs>(args: SelectSubset<T, HoldingsUpdateArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holdings.
     * @param {HoldingsDeleteManyArgs} args - Arguments to filter Holdings to delete.
     * @example
     * // Delete a few Holdings
     * const { count } = await prisma.holdings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoldingsDeleteManyArgs>(args?: SelectSubset<T, HoldingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holdings
     * const holdings = await prisma.holdings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoldingsUpdateManyArgs>(args: SelectSubset<T, HoldingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings and returns the data updated in the database.
     * @param {HoldingsUpdateManyAndReturnArgs} args - Arguments to update many Holdings.
     * @example
     * // Update many Holdings
     * const holdings = await prisma.holdings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holdings and only return the `id`
     * const holdingsWithIdOnly = await prisma.holdings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HoldingsUpdateManyAndReturnArgs>(args: SelectSubset<T, HoldingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holdings.
     * @param {HoldingsUpsertArgs} args - Arguments to update or create a Holdings.
     * @example
     * // Update or create a Holdings
     * const holdings = await prisma.holdings.upsert({
     *   create: {
     *     // ... data to create a Holdings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holdings we want to update
     *   }
     * })
     */
    upsert<T extends HoldingsUpsertArgs>(args: SelectSubset<T, HoldingsUpsertArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsCountArgs} args - Arguments to filter Holdings to count.
     * @example
     * // Count the number of Holdings
     * const count = await prisma.holdings.count({
     *   where: {
     *     // ... the filter for the Holdings we want to count
     *   }
     * })
    **/
    count<T extends HoldingsCountArgs>(
      args?: Subset<T, HoldingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoldingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HoldingsAggregateArgs>(args: Subset<T, HoldingsAggregateArgs>): Prisma.PrismaPromise<GetHoldingsAggregateType<T>>

    /**
     * Group by Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HoldingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoldingsGroupByArgs['orderBy'] }
        : { orderBy?: HoldingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoldingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoldingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holdings model
   */
  readonly fields: HoldingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holdings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoldingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    majorAssetClasses<T extends Holdings$majorAssetClassesArgs<ExtArgs> = {}>(args?: Subset<T, Holdings$majorAssetClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Holdings model
   */
  interface HoldingsFieldRefs {
    readonly id: FieldRef<"Holdings", 'Int'>
    readonly assetId: FieldRef<"Holdings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Holdings findUnique
   */
  export type HoldingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings findUniqueOrThrow
   */
  export type HoldingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings findFirst
   */
  export type HoldingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings findFirstOrThrow
   */
  export type HoldingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings findMany
   */
  export type HoldingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings create
   */
  export type HoldingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Holdings.
     */
    data: XOR<HoldingsCreateInput, HoldingsUncheckedCreateInput>
  }

  /**
   * Holdings createMany
   */
  export type HoldingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holdings.
     */
    data: HoldingsCreateManyInput | HoldingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holdings createManyAndReturn
   */
  export type HoldingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * The data used to create many Holdings.
     */
    data: HoldingsCreateManyInput | HoldingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holdings update
   */
  export type HoldingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Holdings.
     */
    data: XOR<HoldingsUpdateInput, HoldingsUncheckedUpdateInput>
    /**
     * Choose, which Holdings to update.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings updateMany
   */
  export type HoldingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
  }

  /**
   * Holdings updateManyAndReturn
   */
  export type HoldingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holdings upsert
   */
  export type HoldingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Holdings to update in case it exists.
     */
    where: HoldingsWhereUniqueInput
    /**
     * In case the Holdings found by the `where` argument doesn't exist, create a new Holdings with this data.
     */
    create: XOR<HoldingsCreateInput, HoldingsUncheckedCreateInput>
    /**
     * In case the Holdings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoldingsUpdateInput, HoldingsUncheckedUpdateInput>
  }

  /**
   * Holdings delete
   */
  export type HoldingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter which Holdings to delete.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings deleteMany
   */
  export type HoldingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to delete
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to delete.
     */
    limit?: number
  }

  /**
   * Holdings.majorAssetClasses
   */
  export type Holdings$majorAssetClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    where?: MajorAssetClassWhereInput
    orderBy?: MajorAssetClassOrderByWithRelationInput | MajorAssetClassOrderByWithRelationInput[]
    cursor?: MajorAssetClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorAssetClassScalarFieldEnum | MajorAssetClassScalarFieldEnum[]
  }

  /**
   * Holdings without action
   */
  export type HoldingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
  }


  /**
   * Model MajorAssetClass
   */

  export type AggregateMajorAssetClass = {
    _count: MajorAssetClassCountAggregateOutputType | null
    _avg: MajorAssetClassAvgAggregateOutputType | null
    _sum: MajorAssetClassSumAggregateOutputType | null
    _min: MajorAssetClassMinAggregateOutputType | null
    _max: MajorAssetClassMaxAggregateOutputType | null
  }

  export type MajorAssetClassAvgAggregateOutputType = {
    id: number | null
    holdingsId: number | null
  }

  export type MajorAssetClassSumAggregateOutputType = {
    id: number | null
    holdingsId: number | null
  }

  export type MajorAssetClassMinAggregateOutputType = {
    id: number | null
    holdingsId: number | null
    majorClass: string | null
  }

  export type MajorAssetClassMaxAggregateOutputType = {
    id: number | null
    holdingsId: number | null
    majorClass: string | null
  }

  export type MajorAssetClassCountAggregateOutputType = {
    id: number
    holdingsId: number
    majorClass: number
    _all: number
  }


  export type MajorAssetClassAvgAggregateInputType = {
    id?: true
    holdingsId?: true
  }

  export type MajorAssetClassSumAggregateInputType = {
    id?: true
    holdingsId?: true
  }

  export type MajorAssetClassMinAggregateInputType = {
    id?: true
    holdingsId?: true
    majorClass?: true
  }

  export type MajorAssetClassMaxAggregateInputType = {
    id?: true
    holdingsId?: true
    majorClass?: true
  }

  export type MajorAssetClassCountAggregateInputType = {
    id?: true
    holdingsId?: true
    majorClass?: true
    _all?: true
  }

  export type MajorAssetClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorAssetClass to aggregate.
     */
    where?: MajorAssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorAssetClasses to fetch.
     */
    orderBy?: MajorAssetClassOrderByWithRelationInput | MajorAssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorAssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorAssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorAssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MajorAssetClasses
    **/
    _count?: true | MajorAssetClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorAssetClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorAssetClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorAssetClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorAssetClassMaxAggregateInputType
  }

  export type GetMajorAssetClassAggregateType<T extends MajorAssetClassAggregateArgs> = {
        [P in keyof T & keyof AggregateMajorAssetClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajorAssetClass[P]>
      : GetScalarType<T[P], AggregateMajorAssetClass[P]>
  }




  export type MajorAssetClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorAssetClassWhereInput
    orderBy?: MajorAssetClassOrderByWithAggregationInput | MajorAssetClassOrderByWithAggregationInput[]
    by: MajorAssetClassScalarFieldEnum[] | MajorAssetClassScalarFieldEnum
    having?: MajorAssetClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorAssetClassCountAggregateInputType | true
    _avg?: MajorAssetClassAvgAggregateInputType
    _sum?: MajorAssetClassSumAggregateInputType
    _min?: MajorAssetClassMinAggregateInputType
    _max?: MajorAssetClassMaxAggregateInputType
  }

  export type MajorAssetClassGroupByOutputType = {
    id: number
    holdingsId: number
    majorClass: string | null
    _count: MajorAssetClassCountAggregateOutputType | null
    _avg: MajorAssetClassAvgAggregateOutputType | null
    _sum: MajorAssetClassSumAggregateOutputType | null
    _min: MajorAssetClassMinAggregateOutputType | null
    _max: MajorAssetClassMaxAggregateOutputType | null
  }

  type GetMajorAssetClassGroupByPayload<T extends MajorAssetClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorAssetClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorAssetClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorAssetClassGroupByOutputType[P]>
            : GetScalarType<T[P], MajorAssetClassGroupByOutputType[P]>
        }
      >
    >


  export type MajorAssetClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holdingsId?: boolean
    majorClass?: boolean
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
    assetClasses?: boolean | MajorAssetClass$assetClassesArgs<ExtArgs>
    _count?: boolean | MajorAssetClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorAssetClass"]>

  export type MajorAssetClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holdingsId?: boolean
    majorClass?: boolean
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorAssetClass"]>

  export type MajorAssetClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    holdingsId?: boolean
    majorClass?: boolean
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorAssetClass"]>

  export type MajorAssetClassSelectScalar = {
    id?: boolean
    holdingsId?: boolean
    majorClass?: boolean
  }

  export type MajorAssetClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "holdingsId" | "majorClass", ExtArgs["result"]["majorAssetClass"]>
  export type MajorAssetClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
    assetClasses?: boolean | MajorAssetClass$assetClassesArgs<ExtArgs>
    _count?: boolean | MajorAssetClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorAssetClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
  }
  export type MajorAssetClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | HoldingsDefaultArgs<ExtArgs>
  }

  export type $MajorAssetClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MajorAssetClass"
    objects: {
      holdings: Prisma.$HoldingsPayload<ExtArgs>
      assetClasses: Prisma.$AssetClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      holdingsId: number
      majorClass: string | null
    }, ExtArgs["result"]["majorAssetClass"]>
    composites: {}
  }

  type MajorAssetClassGetPayload<S extends boolean | null | undefined | MajorAssetClassDefaultArgs> = $Result.GetResult<Prisma.$MajorAssetClassPayload, S>

  type MajorAssetClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorAssetClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorAssetClassCountAggregateInputType | true
    }

  export interface MajorAssetClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MajorAssetClass'], meta: { name: 'MajorAssetClass' } }
    /**
     * Find zero or one MajorAssetClass that matches the filter.
     * @param {MajorAssetClassFindUniqueArgs} args - Arguments to find a MajorAssetClass
     * @example
     * // Get one MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorAssetClassFindUniqueArgs>(args: SelectSubset<T, MajorAssetClassFindUniqueArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MajorAssetClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorAssetClassFindUniqueOrThrowArgs} args - Arguments to find a MajorAssetClass
     * @example
     * // Get one MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorAssetClassFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorAssetClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorAssetClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassFindFirstArgs} args - Arguments to find a MajorAssetClass
     * @example
     * // Get one MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorAssetClassFindFirstArgs>(args?: SelectSubset<T, MajorAssetClassFindFirstArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorAssetClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassFindFirstOrThrowArgs} args - Arguments to find a MajorAssetClass
     * @example
     * // Get one MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorAssetClassFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorAssetClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MajorAssetClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MajorAssetClasses
     * const majorAssetClasses = await prisma.majorAssetClass.findMany()
     * 
     * // Get first 10 MajorAssetClasses
     * const majorAssetClasses = await prisma.majorAssetClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorAssetClassWithIdOnly = await prisma.majorAssetClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorAssetClassFindManyArgs>(args?: SelectSubset<T, MajorAssetClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MajorAssetClass.
     * @param {MajorAssetClassCreateArgs} args - Arguments to create a MajorAssetClass.
     * @example
     * // Create one MajorAssetClass
     * const MajorAssetClass = await prisma.majorAssetClass.create({
     *   data: {
     *     // ... data to create a MajorAssetClass
     *   }
     * })
     * 
     */
    create<T extends MajorAssetClassCreateArgs>(args: SelectSubset<T, MajorAssetClassCreateArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MajorAssetClasses.
     * @param {MajorAssetClassCreateManyArgs} args - Arguments to create many MajorAssetClasses.
     * @example
     * // Create many MajorAssetClasses
     * const majorAssetClass = await prisma.majorAssetClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorAssetClassCreateManyArgs>(args?: SelectSubset<T, MajorAssetClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MajorAssetClasses and returns the data saved in the database.
     * @param {MajorAssetClassCreateManyAndReturnArgs} args - Arguments to create many MajorAssetClasses.
     * @example
     * // Create many MajorAssetClasses
     * const majorAssetClass = await prisma.majorAssetClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MajorAssetClasses and only return the `id`
     * const majorAssetClassWithIdOnly = await prisma.majorAssetClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorAssetClassCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorAssetClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MajorAssetClass.
     * @param {MajorAssetClassDeleteArgs} args - Arguments to delete one MajorAssetClass.
     * @example
     * // Delete one MajorAssetClass
     * const MajorAssetClass = await prisma.majorAssetClass.delete({
     *   where: {
     *     // ... filter to delete one MajorAssetClass
     *   }
     * })
     * 
     */
    delete<T extends MajorAssetClassDeleteArgs>(args: SelectSubset<T, MajorAssetClassDeleteArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MajorAssetClass.
     * @param {MajorAssetClassUpdateArgs} args - Arguments to update one MajorAssetClass.
     * @example
     * // Update one MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorAssetClassUpdateArgs>(args: SelectSubset<T, MajorAssetClassUpdateArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MajorAssetClasses.
     * @param {MajorAssetClassDeleteManyArgs} args - Arguments to filter MajorAssetClasses to delete.
     * @example
     * // Delete a few MajorAssetClasses
     * const { count } = await prisma.majorAssetClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorAssetClassDeleteManyArgs>(args?: SelectSubset<T, MajorAssetClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorAssetClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MajorAssetClasses
     * const majorAssetClass = await prisma.majorAssetClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorAssetClassUpdateManyArgs>(args: SelectSubset<T, MajorAssetClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorAssetClasses and returns the data updated in the database.
     * @param {MajorAssetClassUpdateManyAndReturnArgs} args - Arguments to update many MajorAssetClasses.
     * @example
     * // Update many MajorAssetClasses
     * const majorAssetClass = await prisma.majorAssetClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MajorAssetClasses and only return the `id`
     * const majorAssetClassWithIdOnly = await prisma.majorAssetClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorAssetClassUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorAssetClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MajorAssetClass.
     * @param {MajorAssetClassUpsertArgs} args - Arguments to update or create a MajorAssetClass.
     * @example
     * // Update or create a MajorAssetClass
     * const majorAssetClass = await prisma.majorAssetClass.upsert({
     *   create: {
     *     // ... data to create a MajorAssetClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MajorAssetClass we want to update
     *   }
     * })
     */
    upsert<T extends MajorAssetClassUpsertArgs>(args: SelectSubset<T, MajorAssetClassUpsertArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MajorAssetClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassCountArgs} args - Arguments to filter MajorAssetClasses to count.
     * @example
     * // Count the number of MajorAssetClasses
     * const count = await prisma.majorAssetClass.count({
     *   where: {
     *     // ... the filter for the MajorAssetClasses we want to count
     *   }
     * })
    **/
    count<T extends MajorAssetClassCountArgs>(
      args?: Subset<T, MajorAssetClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorAssetClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MajorAssetClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorAssetClassAggregateArgs>(args: Subset<T, MajorAssetClassAggregateArgs>): Prisma.PrismaPromise<GetMajorAssetClassAggregateType<T>>

    /**
     * Group by MajorAssetClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAssetClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorAssetClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorAssetClassGroupByArgs['orderBy'] }
        : { orderBy?: MajorAssetClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorAssetClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorAssetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MajorAssetClass model
   */
  readonly fields: MajorAssetClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MajorAssetClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorAssetClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    holdings<T extends HoldingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HoldingsDefaultArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assetClasses<T extends MajorAssetClass$assetClassesArgs<ExtArgs> = {}>(args?: Subset<T, MajorAssetClass$assetClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MajorAssetClass model
   */
  interface MajorAssetClassFieldRefs {
    readonly id: FieldRef<"MajorAssetClass", 'Int'>
    readonly holdingsId: FieldRef<"MajorAssetClass", 'Int'>
    readonly majorClass: FieldRef<"MajorAssetClass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MajorAssetClass findUnique
   */
  export type MajorAssetClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter, which MajorAssetClass to fetch.
     */
    where: MajorAssetClassWhereUniqueInput
  }

  /**
   * MajorAssetClass findUniqueOrThrow
   */
  export type MajorAssetClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter, which MajorAssetClass to fetch.
     */
    where: MajorAssetClassWhereUniqueInput
  }

  /**
   * MajorAssetClass findFirst
   */
  export type MajorAssetClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter, which MajorAssetClass to fetch.
     */
    where?: MajorAssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorAssetClasses to fetch.
     */
    orderBy?: MajorAssetClassOrderByWithRelationInput | MajorAssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorAssetClasses.
     */
    cursor?: MajorAssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorAssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorAssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorAssetClasses.
     */
    distinct?: MajorAssetClassScalarFieldEnum | MajorAssetClassScalarFieldEnum[]
  }

  /**
   * MajorAssetClass findFirstOrThrow
   */
  export type MajorAssetClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter, which MajorAssetClass to fetch.
     */
    where?: MajorAssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorAssetClasses to fetch.
     */
    orderBy?: MajorAssetClassOrderByWithRelationInput | MajorAssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorAssetClasses.
     */
    cursor?: MajorAssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorAssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorAssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorAssetClasses.
     */
    distinct?: MajorAssetClassScalarFieldEnum | MajorAssetClassScalarFieldEnum[]
  }

  /**
   * MajorAssetClass findMany
   */
  export type MajorAssetClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter, which MajorAssetClasses to fetch.
     */
    where?: MajorAssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorAssetClasses to fetch.
     */
    orderBy?: MajorAssetClassOrderByWithRelationInput | MajorAssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MajorAssetClasses.
     */
    cursor?: MajorAssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorAssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorAssetClasses.
     */
    skip?: number
    distinct?: MajorAssetClassScalarFieldEnum | MajorAssetClassScalarFieldEnum[]
  }

  /**
   * MajorAssetClass create
   */
  export type MajorAssetClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * The data needed to create a MajorAssetClass.
     */
    data: XOR<MajorAssetClassCreateInput, MajorAssetClassUncheckedCreateInput>
  }

  /**
   * MajorAssetClass createMany
   */
  export type MajorAssetClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MajorAssetClasses.
     */
    data: MajorAssetClassCreateManyInput | MajorAssetClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorAssetClass createManyAndReturn
   */
  export type MajorAssetClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * The data used to create many MajorAssetClasses.
     */
    data: MajorAssetClassCreateManyInput | MajorAssetClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorAssetClass update
   */
  export type MajorAssetClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * The data needed to update a MajorAssetClass.
     */
    data: XOR<MajorAssetClassUpdateInput, MajorAssetClassUncheckedUpdateInput>
    /**
     * Choose, which MajorAssetClass to update.
     */
    where: MajorAssetClassWhereUniqueInput
  }

  /**
   * MajorAssetClass updateMany
   */
  export type MajorAssetClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MajorAssetClasses.
     */
    data: XOR<MajorAssetClassUpdateManyMutationInput, MajorAssetClassUncheckedUpdateManyInput>
    /**
     * Filter which MajorAssetClasses to update
     */
    where?: MajorAssetClassWhereInput
    /**
     * Limit how many MajorAssetClasses to update.
     */
    limit?: number
  }

  /**
   * MajorAssetClass updateManyAndReturn
   */
  export type MajorAssetClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * The data used to update MajorAssetClasses.
     */
    data: XOR<MajorAssetClassUpdateManyMutationInput, MajorAssetClassUncheckedUpdateManyInput>
    /**
     * Filter which MajorAssetClasses to update
     */
    where?: MajorAssetClassWhereInput
    /**
     * Limit how many MajorAssetClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorAssetClass upsert
   */
  export type MajorAssetClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * The filter to search for the MajorAssetClass to update in case it exists.
     */
    where: MajorAssetClassWhereUniqueInput
    /**
     * In case the MajorAssetClass found by the `where` argument doesn't exist, create a new MajorAssetClass with this data.
     */
    create: XOR<MajorAssetClassCreateInput, MajorAssetClassUncheckedCreateInput>
    /**
     * In case the MajorAssetClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorAssetClassUpdateInput, MajorAssetClassUncheckedUpdateInput>
  }

  /**
   * MajorAssetClass delete
   */
  export type MajorAssetClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
    /**
     * Filter which MajorAssetClass to delete.
     */
    where: MajorAssetClassWhereUniqueInput
  }

  /**
   * MajorAssetClass deleteMany
   */
  export type MajorAssetClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorAssetClasses to delete
     */
    where?: MajorAssetClassWhereInput
    /**
     * Limit how many MajorAssetClasses to delete.
     */
    limit?: number
  }

  /**
   * MajorAssetClass.assetClasses
   */
  export type MajorAssetClass$assetClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    where?: AssetClassWhereInput
    orderBy?: AssetClassOrderByWithRelationInput | AssetClassOrderByWithRelationInput[]
    cursor?: AssetClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetClassScalarFieldEnum | AssetClassScalarFieldEnum[]
  }

  /**
   * MajorAssetClass without action
   */
  export type MajorAssetClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorAssetClass
     */
    select?: MajorAssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorAssetClass
     */
    omit?: MajorAssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorAssetClassInclude<ExtArgs> | null
  }


  /**
   * Model AssetClass
   */

  export type AggregateAssetClass = {
    _count: AssetClassCountAggregateOutputType | null
    _avg: AssetClassAvgAggregateOutputType | null
    _sum: AssetClassSumAggregateOutputType | null
    _min: AssetClassMinAggregateOutputType | null
    _max: AssetClassMaxAggregateOutputType | null
  }

  export type AssetClassAvgAggregateOutputType = {
    id: number | null
    majorAssetClassId: number | null
    value: number | null
  }

  export type AssetClassSumAggregateOutputType = {
    id: number | null
    majorAssetClassId: number | null
    value: number | null
  }

  export type AssetClassMinAggregateOutputType = {
    id: number | null
    majorAssetClassId: number | null
    minorAssetClass: string | null
    value: number | null
  }

  export type AssetClassMaxAggregateOutputType = {
    id: number | null
    majorAssetClassId: number | null
    minorAssetClass: string | null
    value: number | null
  }

  export type AssetClassCountAggregateOutputType = {
    id: number
    majorAssetClassId: number
    minorAssetClass: number
    value: number
    _all: number
  }


  export type AssetClassAvgAggregateInputType = {
    id?: true
    majorAssetClassId?: true
    value?: true
  }

  export type AssetClassSumAggregateInputType = {
    id?: true
    majorAssetClassId?: true
    value?: true
  }

  export type AssetClassMinAggregateInputType = {
    id?: true
    majorAssetClassId?: true
    minorAssetClass?: true
    value?: true
  }

  export type AssetClassMaxAggregateInputType = {
    id?: true
    majorAssetClassId?: true
    minorAssetClass?: true
    value?: true
  }

  export type AssetClassCountAggregateInputType = {
    id?: true
    majorAssetClassId?: true
    minorAssetClass?: true
    value?: true
    _all?: true
  }

  export type AssetClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetClass to aggregate.
     */
    where?: AssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetClasses to fetch.
     */
    orderBy?: AssetClassOrderByWithRelationInput | AssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetClasses
    **/
    _count?: true | AssetClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetClassMaxAggregateInputType
  }

  export type GetAssetClassAggregateType<T extends AssetClassAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetClass[P]>
      : GetScalarType<T[P], AggregateAssetClass[P]>
  }




  export type AssetClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetClassWhereInput
    orderBy?: AssetClassOrderByWithAggregationInput | AssetClassOrderByWithAggregationInput[]
    by: AssetClassScalarFieldEnum[] | AssetClassScalarFieldEnum
    having?: AssetClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetClassCountAggregateInputType | true
    _avg?: AssetClassAvgAggregateInputType
    _sum?: AssetClassSumAggregateInputType
    _min?: AssetClassMinAggregateInputType
    _max?: AssetClassMaxAggregateInputType
  }

  export type AssetClassGroupByOutputType = {
    id: number
    majorAssetClassId: number
    minorAssetClass: string | null
    value: number | null
    _count: AssetClassCountAggregateOutputType | null
    _avg: AssetClassAvgAggregateOutputType | null
    _sum: AssetClassSumAggregateOutputType | null
    _min: AssetClassMinAggregateOutputType | null
    _max: AssetClassMaxAggregateOutputType | null
  }

  type GetAssetClassGroupByPayload<T extends AssetClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetClassGroupByOutputType[P]>
            : GetScalarType<T[P], AssetClassGroupByOutputType[P]>
        }
      >
    >


  export type AssetClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorAssetClassId?: boolean
    minorAssetClass?: boolean
    value?: boolean
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetClass"]>

  export type AssetClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorAssetClassId?: boolean
    minorAssetClass?: boolean
    value?: boolean
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetClass"]>

  export type AssetClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    majorAssetClassId?: boolean
    minorAssetClass?: boolean
    value?: boolean
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetClass"]>

  export type AssetClassSelectScalar = {
    id?: boolean
    majorAssetClassId?: boolean
    minorAssetClass?: boolean
    value?: boolean
  }

  export type AssetClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "majorAssetClassId" | "minorAssetClass" | "value", ExtArgs["result"]["assetClass"]>
  export type AssetClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }
  export type AssetClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }
  export type AssetClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorAssetClass?: boolean | MajorAssetClassDefaultArgs<ExtArgs>
  }

  export type $AssetClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetClass"
    objects: {
      majorAssetClass: Prisma.$MajorAssetClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      majorAssetClassId: number
      minorAssetClass: string | null
      value: number | null
    }, ExtArgs["result"]["assetClass"]>
    composites: {}
  }

  type AssetClassGetPayload<S extends boolean | null | undefined | AssetClassDefaultArgs> = $Result.GetResult<Prisma.$AssetClassPayload, S>

  type AssetClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetClassCountAggregateInputType | true
    }

  export interface AssetClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetClass'], meta: { name: 'AssetClass' } }
    /**
     * Find zero or one AssetClass that matches the filter.
     * @param {AssetClassFindUniqueArgs} args - Arguments to find a AssetClass
     * @example
     * // Get one AssetClass
     * const assetClass = await prisma.assetClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetClassFindUniqueArgs>(args: SelectSubset<T, AssetClassFindUniqueArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetClassFindUniqueOrThrowArgs} args - Arguments to find a AssetClass
     * @example
     * // Get one AssetClass
     * const assetClass = await prisma.assetClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetClassFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassFindFirstArgs} args - Arguments to find a AssetClass
     * @example
     * // Get one AssetClass
     * const assetClass = await prisma.assetClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetClassFindFirstArgs>(args?: SelectSubset<T, AssetClassFindFirstArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassFindFirstOrThrowArgs} args - Arguments to find a AssetClass
     * @example
     * // Get one AssetClass
     * const assetClass = await prisma.assetClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetClassFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetClasses
     * const assetClasses = await prisma.assetClass.findMany()
     * 
     * // Get first 10 AssetClasses
     * const assetClasses = await prisma.assetClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetClassWithIdOnly = await prisma.assetClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetClassFindManyArgs>(args?: SelectSubset<T, AssetClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetClass.
     * @param {AssetClassCreateArgs} args - Arguments to create a AssetClass.
     * @example
     * // Create one AssetClass
     * const AssetClass = await prisma.assetClass.create({
     *   data: {
     *     // ... data to create a AssetClass
     *   }
     * })
     * 
     */
    create<T extends AssetClassCreateArgs>(args: SelectSubset<T, AssetClassCreateArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetClasses.
     * @param {AssetClassCreateManyArgs} args - Arguments to create many AssetClasses.
     * @example
     * // Create many AssetClasses
     * const assetClass = await prisma.assetClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetClassCreateManyArgs>(args?: SelectSubset<T, AssetClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetClasses and returns the data saved in the database.
     * @param {AssetClassCreateManyAndReturnArgs} args - Arguments to create many AssetClasses.
     * @example
     * // Create many AssetClasses
     * const assetClass = await prisma.assetClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetClasses and only return the `id`
     * const assetClassWithIdOnly = await prisma.assetClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetClassCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssetClass.
     * @param {AssetClassDeleteArgs} args - Arguments to delete one AssetClass.
     * @example
     * // Delete one AssetClass
     * const AssetClass = await prisma.assetClass.delete({
     *   where: {
     *     // ... filter to delete one AssetClass
     *   }
     * })
     * 
     */
    delete<T extends AssetClassDeleteArgs>(args: SelectSubset<T, AssetClassDeleteArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetClass.
     * @param {AssetClassUpdateArgs} args - Arguments to update one AssetClass.
     * @example
     * // Update one AssetClass
     * const assetClass = await prisma.assetClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetClassUpdateArgs>(args: SelectSubset<T, AssetClassUpdateArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetClasses.
     * @param {AssetClassDeleteManyArgs} args - Arguments to filter AssetClasses to delete.
     * @example
     * // Delete a few AssetClasses
     * const { count } = await prisma.assetClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetClassDeleteManyArgs>(args?: SelectSubset<T, AssetClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetClasses
     * const assetClass = await prisma.assetClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetClassUpdateManyArgs>(args: SelectSubset<T, AssetClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetClasses and returns the data updated in the database.
     * @param {AssetClassUpdateManyAndReturnArgs} args - Arguments to update many AssetClasses.
     * @example
     * // Update many AssetClasses
     * const assetClass = await prisma.assetClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetClasses and only return the `id`
     * const assetClassWithIdOnly = await prisma.assetClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetClassUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssetClass.
     * @param {AssetClassUpsertArgs} args - Arguments to update or create a AssetClass.
     * @example
     * // Update or create a AssetClass
     * const assetClass = await prisma.assetClass.upsert({
     *   create: {
     *     // ... data to create a AssetClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetClass we want to update
     *   }
     * })
     */
    upsert<T extends AssetClassUpsertArgs>(args: SelectSubset<T, AssetClassUpsertArgs<ExtArgs>>): Prisma__AssetClassClient<$Result.GetResult<Prisma.$AssetClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassCountArgs} args - Arguments to filter AssetClasses to count.
     * @example
     * // Count the number of AssetClasses
     * const count = await prisma.assetClass.count({
     *   where: {
     *     // ... the filter for the AssetClasses we want to count
     *   }
     * })
    **/
    count<T extends AssetClassCountArgs>(
      args?: Subset<T, AssetClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetClassAggregateArgs>(args: Subset<T, AssetClassAggregateArgs>): Prisma.PrismaPromise<GetAssetClassAggregateType<T>>

    /**
     * Group by AssetClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetClassGroupByArgs['orderBy'] }
        : { orderBy?: AssetClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetClass model
   */
  readonly fields: AssetClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    majorAssetClass<T extends MajorAssetClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorAssetClassDefaultArgs<ExtArgs>>): Prisma__MajorAssetClassClient<$Result.GetResult<Prisma.$MajorAssetClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetClass model
   */
  interface AssetClassFieldRefs {
    readonly id: FieldRef<"AssetClass", 'Int'>
    readonly majorAssetClassId: FieldRef<"AssetClass", 'Int'>
    readonly minorAssetClass: FieldRef<"AssetClass", 'String'>
    readonly value: FieldRef<"AssetClass", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AssetClass findUnique
   */
  export type AssetClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter, which AssetClass to fetch.
     */
    where: AssetClassWhereUniqueInput
  }

  /**
   * AssetClass findUniqueOrThrow
   */
  export type AssetClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter, which AssetClass to fetch.
     */
    where: AssetClassWhereUniqueInput
  }

  /**
   * AssetClass findFirst
   */
  export type AssetClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter, which AssetClass to fetch.
     */
    where?: AssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetClasses to fetch.
     */
    orderBy?: AssetClassOrderByWithRelationInput | AssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetClasses.
     */
    cursor?: AssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetClasses.
     */
    distinct?: AssetClassScalarFieldEnum | AssetClassScalarFieldEnum[]
  }

  /**
   * AssetClass findFirstOrThrow
   */
  export type AssetClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter, which AssetClass to fetch.
     */
    where?: AssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetClasses to fetch.
     */
    orderBy?: AssetClassOrderByWithRelationInput | AssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetClasses.
     */
    cursor?: AssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetClasses.
     */
    distinct?: AssetClassScalarFieldEnum | AssetClassScalarFieldEnum[]
  }

  /**
   * AssetClass findMany
   */
  export type AssetClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter, which AssetClasses to fetch.
     */
    where?: AssetClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetClasses to fetch.
     */
    orderBy?: AssetClassOrderByWithRelationInput | AssetClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetClasses.
     */
    cursor?: AssetClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetClasses.
     */
    skip?: number
    distinct?: AssetClassScalarFieldEnum | AssetClassScalarFieldEnum[]
  }

  /**
   * AssetClass create
   */
  export type AssetClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetClass.
     */
    data: XOR<AssetClassCreateInput, AssetClassUncheckedCreateInput>
  }

  /**
   * AssetClass createMany
   */
  export type AssetClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetClasses.
     */
    data: AssetClassCreateManyInput | AssetClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetClass createManyAndReturn
   */
  export type AssetClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * The data used to create many AssetClasses.
     */
    data: AssetClassCreateManyInput | AssetClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetClass update
   */
  export type AssetClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetClass.
     */
    data: XOR<AssetClassUpdateInput, AssetClassUncheckedUpdateInput>
    /**
     * Choose, which AssetClass to update.
     */
    where: AssetClassWhereUniqueInput
  }

  /**
   * AssetClass updateMany
   */
  export type AssetClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetClasses.
     */
    data: XOR<AssetClassUpdateManyMutationInput, AssetClassUncheckedUpdateManyInput>
    /**
     * Filter which AssetClasses to update
     */
    where?: AssetClassWhereInput
    /**
     * Limit how many AssetClasses to update.
     */
    limit?: number
  }

  /**
   * AssetClass updateManyAndReturn
   */
  export type AssetClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * The data used to update AssetClasses.
     */
    data: XOR<AssetClassUpdateManyMutationInput, AssetClassUncheckedUpdateManyInput>
    /**
     * Filter which AssetClasses to update
     */
    where?: AssetClassWhereInput
    /**
     * Limit how many AssetClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetClass upsert
   */
  export type AssetClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetClass to update in case it exists.
     */
    where: AssetClassWhereUniqueInput
    /**
     * In case the AssetClass found by the `where` argument doesn't exist, create a new AssetClass with this data.
     */
    create: XOR<AssetClassCreateInput, AssetClassUncheckedCreateInput>
    /**
     * In case the AssetClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetClassUpdateInput, AssetClassUncheckedUpdateInput>
  }

  /**
   * AssetClass delete
   */
  export type AssetClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
    /**
     * Filter which AssetClass to delete.
     */
    where: AssetClassWhereUniqueInput
  }

  /**
   * AssetClass deleteMany
   */
  export type AssetClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetClasses to delete
     */
    where?: AssetClassWhereInput
    /**
     * Limit how many AssetClasses to delete.
     */
    limit?: number
  }

  /**
   * AssetClass without action
   */
  export type AssetClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetClass
     */
    select?: AssetClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetClass
     */
    omit?: AssetClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetClassInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DefaultUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name'
  };

  export type DefaultUserScalarFieldEnum = (typeof DefaultUserScalarFieldEnum)[keyof typeof DefaultUserScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    assetId: 'assetId',
    assetDescription: 'assetDescription',
    assetInfo: 'assetInfo',
    assetInfoType: 'assetInfoType',
    assetMask: 'assetMask',
    assetName: 'assetName',
    assetOwnerName: 'assetOwnerName',
    balanceAsOf: 'balanceAsOf',
    balanceCostBasis: 'balanceCostBasis',
    balanceCostFrom: 'balanceCostFrom',
    balanceCurrent: 'balanceCurrent',
    balanceFrom: 'balanceFrom',
    balancePrice: 'balancePrice',
    balancePriceFrom: 'balancePriceFrom',
    balanceQuantityCurrent: 'balanceQuantityCurrent',
    beneficiaryComposition: 'beneficiaryComposition',
    cognitoId: 'cognitoId',
    creationDate: 'creationDate',
    currencyCode: 'currencyCode',
    deactivateBy: 'deactivateBy',
    descriptionEstatePlan: 'descriptionEstatePlan',
    hasInvestment: 'hasInvestment',
    includeInNetWorth: 'includeInNetWorth',
    institutionId: 'institutionId',
    institutionName: 'institutionName',
    integration: 'integration',
    integrationAccountId: 'integrationAccountId',
    isActive: 'isActive',
    isAsset: 'isAsset',
    isFavorite: 'isFavorite',
    isLinkedVendor: 'isLinkedVendor',
    lastUpdate: 'lastUpdate',
    lastUpdateAttempt: 'lastUpdateAttempt',
    logoName: 'logoName',
    modificationDate: 'modificationDate',
    nextUpdate: 'nextUpdate',
    nickname: 'nickname',
    note: 'note',
    noteDate: 'noteDate',
    ownership: 'ownership',
    primaryAssetCategory: 'primaryAssetCategory',
    status: 'status',
    statusCode: 'statusCode',
    userInstitutionId: 'userInstitutionId',
    vendorAccountType: 'vendorAccountType',
    vendorContainer: 'vendorContainer',
    vendorResponse: 'vendorResponse',
    vendorResponseType: 'vendorResponseType',
    wealthAssetType: 'wealthAssetType',
    wid: 'wid'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const HoldingsScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId'
  };

  export type HoldingsScalarFieldEnum = (typeof HoldingsScalarFieldEnum)[keyof typeof HoldingsScalarFieldEnum]


  export const MajorAssetClassScalarFieldEnum: {
    id: 'id',
    holdingsId: 'holdingsId',
    majorClass: 'majorClass'
  };

  export type MajorAssetClassScalarFieldEnum = (typeof MajorAssetClassScalarFieldEnum)[keyof typeof MajorAssetClassScalarFieldEnum]


  export const AssetClassScalarFieldEnum: {
    id: 'id',
    majorAssetClassId: 'majorAssetClassId',
    minorAssetClass: 'minorAssetClass',
    value: 'value'
  };

  export type AssetClassScalarFieldEnum = (typeof AssetClassScalarFieldEnum)[keyof typeof AssetClassScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type DefaultUserWhereInput = {
    AND?: DefaultUserWhereInput | DefaultUserWhereInput[]
    OR?: DefaultUserWhereInput[]
    NOT?: DefaultUserWhereInput | DefaultUserWhereInput[]
    id?: IntFilter<"DefaultUser"> | number
    createdAt?: DateTimeFilter<"DefaultUser"> | Date | string
    email?: StringFilter<"DefaultUser"> | string
    name?: StringNullableFilter<"DefaultUser"> | string | null
  }

  export type DefaultUserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type DefaultUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: DefaultUserWhereInput | DefaultUserWhereInput[]
    OR?: DefaultUserWhereInput[]
    NOT?: DefaultUserWhereInput | DefaultUserWhereInput[]
    createdAt?: DateTimeFilter<"DefaultUser"> | Date | string
    name?: StringNullableFilter<"DefaultUser"> | string | null
  }, "id" | "email">

  export type DefaultUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: DefaultUserCountOrderByAggregateInput
    _avg?: DefaultUserAvgOrderByAggregateInput
    _max?: DefaultUserMaxOrderByAggregateInput
    _min?: DefaultUserMinOrderByAggregateInput
    _sum?: DefaultUserSumOrderByAggregateInput
  }

  export type DefaultUserScalarWhereWithAggregatesInput = {
    AND?: DefaultUserScalarWhereWithAggregatesInput | DefaultUserScalarWhereWithAggregatesInput[]
    OR?: DefaultUserScalarWhereWithAggregatesInput[]
    NOT?: DefaultUserScalarWhereWithAggregatesInput | DefaultUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DefaultUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DefaultUser"> | Date | string
    email?: StringWithAggregatesFilter<"DefaultUser"> | string
    name?: StringNullableWithAggregatesFilter<"DefaultUser"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    assetId?: StringFilter<"Asset"> | string
    assetDescription?: StringNullableFilter<"Asset"> | string | null
    assetInfo?: JsonNullableFilter<"Asset">
    assetInfoType?: StringNullableFilter<"Asset"> | string | null
    assetMask?: StringNullableFilter<"Asset"> | string | null
    assetName?: StringNullableFilter<"Asset"> | string | null
    assetOwnerName?: StringNullableFilter<"Asset"> | string | null
    balanceAsOf?: DateTimeNullableFilter<"Asset"> | Date | string | null
    balanceCostBasis?: FloatNullableFilter<"Asset"> | number | null
    balanceCostFrom?: StringNullableFilter<"Asset"> | string | null
    balanceCurrent?: FloatNullableFilter<"Asset"> | number | null
    balanceFrom?: StringNullableFilter<"Asset"> | string | null
    balancePrice?: FloatNullableFilter<"Asset"> | number | null
    balancePriceFrom?: StringNullableFilter<"Asset"> | string | null
    balanceQuantityCurrent?: FloatNullableFilter<"Asset"> | number | null
    beneficiaryComposition?: JsonNullableFilter<"Asset">
    cognitoId?: StringNullableFilter<"Asset"> | string | null
    creationDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    currencyCode?: StringNullableFilter<"Asset"> | string | null
    deactivateBy?: DateTimeNullableFilter<"Asset"> | Date | string | null
    descriptionEstatePlan?: StringNullableFilter<"Asset"> | string | null
    hasInvestment?: BoolNullableFilter<"Asset"> | boolean | null
    includeInNetWorth?: BoolNullableFilter<"Asset"> | boolean | null
    institutionId?: IntNullableFilter<"Asset"> | number | null
    institutionName?: StringNullableFilter<"Asset"> | string | null
    integration?: JsonNullableFilter<"Asset">
    integrationAccountId?: StringNullableFilter<"Asset"> | string | null
    isActive?: BoolNullableFilter<"Asset"> | boolean | null
    isAsset?: BoolNullableFilter<"Asset"> | boolean | null
    isFavorite?: BoolNullableFilter<"Asset"> | boolean | null
    isLinkedVendor?: BoolNullableFilter<"Asset"> | boolean | null
    lastUpdate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    lastUpdateAttempt?: DateTimeNullableFilter<"Asset"> | Date | string | null
    logoName?: StringNullableFilter<"Asset"> | string | null
    modificationDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    nextUpdate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    nickname?: StringNullableFilter<"Asset"> | string | null
    note?: StringNullableFilter<"Asset"> | string | null
    noteDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    ownership?: StringNullableFilter<"Asset"> | string | null
    primaryAssetCategory?: StringNullableFilter<"Asset"> | string | null
    status?: StringNullableFilter<"Asset"> | string | null
    statusCode?: StringNullableFilter<"Asset"> | string | null
    userInstitutionId?: StringNullableFilter<"Asset"> | string | null
    vendorAccountType?: StringNullableFilter<"Asset"> | string | null
    vendorContainer?: StringNullableFilter<"Asset"> | string | null
    vendorResponse?: JsonNullableFilter<"Asset">
    vendorResponseType?: StringNullableFilter<"Asset"> | string | null
    wealthAssetType?: StringNullableFilter<"Asset"> | string | null
    wid?: StringNullableFilter<"Asset"> | string | null
    holdings?: XOR<HoldingsNullableScalarRelationFilter, HoldingsWhereInput> | null
  }

  export type AssetOrderByWithRelationInput = {
    assetId?: SortOrder
    assetDescription?: SortOrderInput | SortOrder
    assetInfo?: SortOrderInput | SortOrder
    assetInfoType?: SortOrderInput | SortOrder
    assetMask?: SortOrderInput | SortOrder
    assetName?: SortOrderInput | SortOrder
    assetOwnerName?: SortOrderInput | SortOrder
    balanceAsOf?: SortOrderInput | SortOrder
    balanceCostBasis?: SortOrderInput | SortOrder
    balanceCostFrom?: SortOrderInput | SortOrder
    balanceCurrent?: SortOrderInput | SortOrder
    balanceFrom?: SortOrderInput | SortOrder
    balancePrice?: SortOrderInput | SortOrder
    balancePriceFrom?: SortOrderInput | SortOrder
    balanceQuantityCurrent?: SortOrderInput | SortOrder
    beneficiaryComposition?: SortOrderInput | SortOrder
    cognitoId?: SortOrderInput | SortOrder
    creationDate?: SortOrderInput | SortOrder
    currencyCode?: SortOrderInput | SortOrder
    deactivateBy?: SortOrderInput | SortOrder
    descriptionEstatePlan?: SortOrderInput | SortOrder
    hasInvestment?: SortOrderInput | SortOrder
    includeInNetWorth?: SortOrderInput | SortOrder
    institutionId?: SortOrderInput | SortOrder
    institutionName?: SortOrderInput | SortOrder
    integration?: SortOrderInput | SortOrder
    integrationAccountId?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isAsset?: SortOrderInput | SortOrder
    isFavorite?: SortOrderInput | SortOrder
    isLinkedVendor?: SortOrderInput | SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    lastUpdateAttempt?: SortOrderInput | SortOrder
    logoName?: SortOrderInput | SortOrder
    modificationDate?: SortOrderInput | SortOrder
    nextUpdate?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    noteDate?: SortOrderInput | SortOrder
    ownership?: SortOrderInput | SortOrder
    primaryAssetCategory?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    userInstitutionId?: SortOrderInput | SortOrder
    vendorAccountType?: SortOrderInput | SortOrder
    vendorContainer?: SortOrderInput | SortOrder
    vendorResponse?: SortOrderInput | SortOrder
    vendorResponseType?: SortOrderInput | SortOrder
    wealthAssetType?: SortOrderInput | SortOrder
    wid?: SortOrderInput | SortOrder
    holdings?: HoldingsOrderByWithRelationInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    assetId?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    assetDescription?: StringNullableFilter<"Asset"> | string | null
    assetInfo?: JsonNullableFilter<"Asset">
    assetInfoType?: StringNullableFilter<"Asset"> | string | null
    assetMask?: StringNullableFilter<"Asset"> | string | null
    assetName?: StringNullableFilter<"Asset"> | string | null
    assetOwnerName?: StringNullableFilter<"Asset"> | string | null
    balanceAsOf?: DateTimeNullableFilter<"Asset"> | Date | string | null
    balanceCostBasis?: FloatNullableFilter<"Asset"> | number | null
    balanceCostFrom?: StringNullableFilter<"Asset"> | string | null
    balanceCurrent?: FloatNullableFilter<"Asset"> | number | null
    balanceFrom?: StringNullableFilter<"Asset"> | string | null
    balancePrice?: FloatNullableFilter<"Asset"> | number | null
    balancePriceFrom?: StringNullableFilter<"Asset"> | string | null
    balanceQuantityCurrent?: FloatNullableFilter<"Asset"> | number | null
    beneficiaryComposition?: JsonNullableFilter<"Asset">
    cognitoId?: StringNullableFilter<"Asset"> | string | null
    creationDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    currencyCode?: StringNullableFilter<"Asset"> | string | null
    deactivateBy?: DateTimeNullableFilter<"Asset"> | Date | string | null
    descriptionEstatePlan?: StringNullableFilter<"Asset"> | string | null
    hasInvestment?: BoolNullableFilter<"Asset"> | boolean | null
    includeInNetWorth?: BoolNullableFilter<"Asset"> | boolean | null
    institutionId?: IntNullableFilter<"Asset"> | number | null
    institutionName?: StringNullableFilter<"Asset"> | string | null
    integration?: JsonNullableFilter<"Asset">
    integrationAccountId?: StringNullableFilter<"Asset"> | string | null
    isActive?: BoolNullableFilter<"Asset"> | boolean | null
    isAsset?: BoolNullableFilter<"Asset"> | boolean | null
    isFavorite?: BoolNullableFilter<"Asset"> | boolean | null
    isLinkedVendor?: BoolNullableFilter<"Asset"> | boolean | null
    lastUpdate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    lastUpdateAttempt?: DateTimeNullableFilter<"Asset"> | Date | string | null
    logoName?: StringNullableFilter<"Asset"> | string | null
    modificationDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    nextUpdate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    nickname?: StringNullableFilter<"Asset"> | string | null
    note?: StringNullableFilter<"Asset"> | string | null
    noteDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    ownership?: StringNullableFilter<"Asset"> | string | null
    primaryAssetCategory?: StringNullableFilter<"Asset"> | string | null
    status?: StringNullableFilter<"Asset"> | string | null
    statusCode?: StringNullableFilter<"Asset"> | string | null
    userInstitutionId?: StringNullableFilter<"Asset"> | string | null
    vendorAccountType?: StringNullableFilter<"Asset"> | string | null
    vendorContainer?: StringNullableFilter<"Asset"> | string | null
    vendorResponse?: JsonNullableFilter<"Asset">
    vendorResponseType?: StringNullableFilter<"Asset"> | string | null
    wealthAssetType?: StringNullableFilter<"Asset"> | string | null
    wid?: StringNullableFilter<"Asset"> | string | null
    holdings?: XOR<HoldingsNullableScalarRelationFilter, HoldingsWhereInput> | null
  }, "assetId">

  export type AssetOrderByWithAggregationInput = {
    assetId?: SortOrder
    assetDescription?: SortOrderInput | SortOrder
    assetInfo?: SortOrderInput | SortOrder
    assetInfoType?: SortOrderInput | SortOrder
    assetMask?: SortOrderInput | SortOrder
    assetName?: SortOrderInput | SortOrder
    assetOwnerName?: SortOrderInput | SortOrder
    balanceAsOf?: SortOrderInput | SortOrder
    balanceCostBasis?: SortOrderInput | SortOrder
    balanceCostFrom?: SortOrderInput | SortOrder
    balanceCurrent?: SortOrderInput | SortOrder
    balanceFrom?: SortOrderInput | SortOrder
    balancePrice?: SortOrderInput | SortOrder
    balancePriceFrom?: SortOrderInput | SortOrder
    balanceQuantityCurrent?: SortOrderInput | SortOrder
    beneficiaryComposition?: SortOrderInput | SortOrder
    cognitoId?: SortOrderInput | SortOrder
    creationDate?: SortOrderInput | SortOrder
    currencyCode?: SortOrderInput | SortOrder
    deactivateBy?: SortOrderInput | SortOrder
    descriptionEstatePlan?: SortOrderInput | SortOrder
    hasInvestment?: SortOrderInput | SortOrder
    includeInNetWorth?: SortOrderInput | SortOrder
    institutionId?: SortOrderInput | SortOrder
    institutionName?: SortOrderInput | SortOrder
    integration?: SortOrderInput | SortOrder
    integrationAccountId?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    isAsset?: SortOrderInput | SortOrder
    isFavorite?: SortOrderInput | SortOrder
    isLinkedVendor?: SortOrderInput | SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    lastUpdateAttempt?: SortOrderInput | SortOrder
    logoName?: SortOrderInput | SortOrder
    modificationDate?: SortOrderInput | SortOrder
    nextUpdate?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    noteDate?: SortOrderInput | SortOrder
    ownership?: SortOrderInput | SortOrder
    primaryAssetCategory?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    userInstitutionId?: SortOrderInput | SortOrder
    vendorAccountType?: SortOrderInput | SortOrder
    vendorContainer?: SortOrderInput | SortOrder
    vendorResponse?: SortOrderInput | SortOrder
    vendorResponseType?: SortOrderInput | SortOrder
    wealthAssetType?: SortOrderInput | SortOrder
    wid?: SortOrderInput | SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    assetId?: StringWithAggregatesFilter<"Asset"> | string
    assetDescription?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    assetInfo?: JsonNullableWithAggregatesFilter<"Asset">
    assetInfoType?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    assetMask?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    assetName?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    assetOwnerName?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    balanceAsOf?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    balanceCostBasis?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    balanceCostFrom?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    balanceCurrent?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    balanceFrom?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    balancePrice?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    balancePriceFrom?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    balanceQuantityCurrent?: FloatNullableWithAggregatesFilter<"Asset"> | number | null
    beneficiaryComposition?: JsonNullableWithAggregatesFilter<"Asset">
    cognitoId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    creationDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    currencyCode?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    deactivateBy?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    descriptionEstatePlan?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    hasInvestment?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    includeInNetWorth?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    institutionId?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    institutionName?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    integration?: JsonNullableWithAggregatesFilter<"Asset">
    integrationAccountId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    isAsset?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    isFavorite?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    isLinkedVendor?: BoolNullableWithAggregatesFilter<"Asset"> | boolean | null
    lastUpdate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    lastUpdateAttempt?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    logoName?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    modificationDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    nextUpdate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    nickname?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    note?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    noteDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    ownership?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    primaryAssetCategory?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    status?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    statusCode?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    userInstitutionId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    vendorAccountType?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    vendorContainer?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    vendorResponse?: JsonNullableWithAggregatesFilter<"Asset">
    vendorResponseType?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    wealthAssetType?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    wid?: StringNullableWithAggregatesFilter<"Asset"> | string | null
  }

  export type HoldingsWhereInput = {
    AND?: HoldingsWhereInput | HoldingsWhereInput[]
    OR?: HoldingsWhereInput[]
    NOT?: HoldingsWhereInput | HoldingsWhereInput[]
    id?: IntFilter<"Holdings"> | number
    assetId?: StringFilter<"Holdings"> | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    majorAssetClasses?: MajorAssetClassListRelationFilter
  }

  export type HoldingsOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    asset?: AssetOrderByWithRelationInput
    majorAssetClasses?: MajorAssetClassOrderByRelationAggregateInput
  }

  export type HoldingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assetId?: string
    AND?: HoldingsWhereInput | HoldingsWhereInput[]
    OR?: HoldingsWhereInput[]
    NOT?: HoldingsWhereInput | HoldingsWhereInput[]
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    majorAssetClasses?: MajorAssetClassListRelationFilter
  }, "id" | "assetId">

  export type HoldingsOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    _count?: HoldingsCountOrderByAggregateInput
    _avg?: HoldingsAvgOrderByAggregateInput
    _max?: HoldingsMaxOrderByAggregateInput
    _min?: HoldingsMinOrderByAggregateInput
    _sum?: HoldingsSumOrderByAggregateInput
  }

  export type HoldingsScalarWhereWithAggregatesInput = {
    AND?: HoldingsScalarWhereWithAggregatesInput | HoldingsScalarWhereWithAggregatesInput[]
    OR?: HoldingsScalarWhereWithAggregatesInput[]
    NOT?: HoldingsScalarWhereWithAggregatesInput | HoldingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Holdings"> | number
    assetId?: StringWithAggregatesFilter<"Holdings"> | string
  }

  export type MajorAssetClassWhereInput = {
    AND?: MajorAssetClassWhereInput | MajorAssetClassWhereInput[]
    OR?: MajorAssetClassWhereInput[]
    NOT?: MajorAssetClassWhereInput | MajorAssetClassWhereInput[]
    id?: IntFilter<"MajorAssetClass"> | number
    holdingsId?: IntFilter<"MajorAssetClass"> | number
    majorClass?: StringNullableFilter<"MajorAssetClass"> | string | null
    holdings?: XOR<HoldingsScalarRelationFilter, HoldingsWhereInput>
    assetClasses?: AssetClassListRelationFilter
  }

  export type MajorAssetClassOrderByWithRelationInput = {
    id?: SortOrder
    holdingsId?: SortOrder
    majorClass?: SortOrderInput | SortOrder
    holdings?: HoldingsOrderByWithRelationInput
    assetClasses?: AssetClassOrderByRelationAggregateInput
  }

  export type MajorAssetClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MajorAssetClassWhereInput | MajorAssetClassWhereInput[]
    OR?: MajorAssetClassWhereInput[]
    NOT?: MajorAssetClassWhereInput | MajorAssetClassWhereInput[]
    holdingsId?: IntFilter<"MajorAssetClass"> | number
    majorClass?: StringNullableFilter<"MajorAssetClass"> | string | null
    holdings?: XOR<HoldingsScalarRelationFilter, HoldingsWhereInput>
    assetClasses?: AssetClassListRelationFilter
  }, "id">

  export type MajorAssetClassOrderByWithAggregationInput = {
    id?: SortOrder
    holdingsId?: SortOrder
    majorClass?: SortOrderInput | SortOrder
    _count?: MajorAssetClassCountOrderByAggregateInput
    _avg?: MajorAssetClassAvgOrderByAggregateInput
    _max?: MajorAssetClassMaxOrderByAggregateInput
    _min?: MajorAssetClassMinOrderByAggregateInput
    _sum?: MajorAssetClassSumOrderByAggregateInput
  }

  export type MajorAssetClassScalarWhereWithAggregatesInput = {
    AND?: MajorAssetClassScalarWhereWithAggregatesInput | MajorAssetClassScalarWhereWithAggregatesInput[]
    OR?: MajorAssetClassScalarWhereWithAggregatesInput[]
    NOT?: MajorAssetClassScalarWhereWithAggregatesInput | MajorAssetClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MajorAssetClass"> | number
    holdingsId?: IntWithAggregatesFilter<"MajorAssetClass"> | number
    majorClass?: StringNullableWithAggregatesFilter<"MajorAssetClass"> | string | null
  }

  export type AssetClassWhereInput = {
    AND?: AssetClassWhereInput | AssetClassWhereInput[]
    OR?: AssetClassWhereInput[]
    NOT?: AssetClassWhereInput | AssetClassWhereInput[]
    id?: IntFilter<"AssetClass"> | number
    majorAssetClassId?: IntFilter<"AssetClass"> | number
    minorAssetClass?: StringNullableFilter<"AssetClass"> | string | null
    value?: FloatNullableFilter<"AssetClass"> | number | null
    majorAssetClass?: XOR<MajorAssetClassScalarRelationFilter, MajorAssetClassWhereInput>
  }

  export type AssetClassOrderByWithRelationInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    minorAssetClass?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    majorAssetClass?: MajorAssetClassOrderByWithRelationInput
  }

  export type AssetClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssetClassWhereInput | AssetClassWhereInput[]
    OR?: AssetClassWhereInput[]
    NOT?: AssetClassWhereInput | AssetClassWhereInput[]
    majorAssetClassId?: IntFilter<"AssetClass"> | number
    minorAssetClass?: StringNullableFilter<"AssetClass"> | string | null
    value?: FloatNullableFilter<"AssetClass"> | number | null
    majorAssetClass?: XOR<MajorAssetClassScalarRelationFilter, MajorAssetClassWhereInput>
  }, "id">

  export type AssetClassOrderByWithAggregationInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    minorAssetClass?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: AssetClassCountOrderByAggregateInput
    _avg?: AssetClassAvgOrderByAggregateInput
    _max?: AssetClassMaxOrderByAggregateInput
    _min?: AssetClassMinOrderByAggregateInput
    _sum?: AssetClassSumOrderByAggregateInput
  }

  export type AssetClassScalarWhereWithAggregatesInput = {
    AND?: AssetClassScalarWhereWithAggregatesInput | AssetClassScalarWhereWithAggregatesInput[]
    OR?: AssetClassScalarWhereWithAggregatesInput[]
    NOT?: AssetClassScalarWhereWithAggregatesInput | AssetClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssetClass"> | number
    majorAssetClassId?: IntWithAggregatesFilter<"AssetClass"> | number
    minorAssetClass?: StringNullableWithAggregatesFilter<"AssetClass"> | string | null
    value?: FloatNullableWithAggregatesFilter<"AssetClass"> | number | null
  }

  export type DefaultUserCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type DefaultUserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type DefaultUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefaultUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefaultUserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type DefaultUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefaultUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    assetId: string
    assetDescription?: string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: string | null
    assetMask?: string | null
    assetName?: string | null
    assetOwnerName?: string | null
    balanceAsOf?: Date | string | null
    balanceCostBasis?: number | null
    balanceCostFrom?: string | null
    balanceCurrent?: number | null
    balanceFrom?: string | null
    balancePrice?: number | null
    balancePriceFrom?: string | null
    balanceQuantityCurrent?: number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: string | null
    creationDate?: Date | string | null
    currencyCode?: string | null
    deactivateBy?: Date | string | null
    descriptionEstatePlan?: string | null
    hasInvestment?: boolean | null
    includeInNetWorth?: boolean | null
    institutionId?: number | null
    institutionName?: string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: string | null
    isActive?: boolean | null
    isAsset?: boolean | null
    isFavorite?: boolean | null
    isLinkedVendor?: boolean | null
    lastUpdate?: Date | string | null
    lastUpdateAttempt?: Date | string | null
    logoName?: string | null
    modificationDate?: Date | string | null
    nextUpdate?: Date | string | null
    nickname?: string | null
    note?: string | null
    noteDate?: Date | string | null
    ownership?: string | null
    primaryAssetCategory?: string | null
    status?: string | null
    statusCode?: string | null
    userInstitutionId?: string | null
    vendorAccountType?: string | null
    vendorContainer?: string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: string | null
    wealthAssetType?: string | null
    wid?: string | null
    holdings?: HoldingsCreateNestedOneWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    assetId: string
    assetDescription?: string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: string | null
    assetMask?: string | null
    assetName?: string | null
    assetOwnerName?: string | null
    balanceAsOf?: Date | string | null
    balanceCostBasis?: number | null
    balanceCostFrom?: string | null
    balanceCurrent?: number | null
    balanceFrom?: string | null
    balancePrice?: number | null
    balancePriceFrom?: string | null
    balanceQuantityCurrent?: number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: string | null
    creationDate?: Date | string | null
    currencyCode?: string | null
    deactivateBy?: Date | string | null
    descriptionEstatePlan?: string | null
    hasInvestment?: boolean | null
    includeInNetWorth?: boolean | null
    institutionId?: number | null
    institutionName?: string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: string | null
    isActive?: boolean | null
    isAsset?: boolean | null
    isFavorite?: boolean | null
    isLinkedVendor?: boolean | null
    lastUpdate?: Date | string | null
    lastUpdateAttempt?: Date | string | null
    logoName?: string | null
    modificationDate?: Date | string | null
    nextUpdate?: Date | string | null
    nickname?: string | null
    note?: string | null
    noteDate?: Date | string | null
    ownership?: string | null
    primaryAssetCategory?: string | null
    status?: string | null
    statusCode?: string | null
    userInstitutionId?: string | null
    vendorAccountType?: string | null
    vendorContainer?: string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: string | null
    wealthAssetType?: string | null
    wid?: string | null
    holdings?: HoldingsUncheckedCreateNestedOneWithoutAssetInput
  }

  export type AssetUpdateInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
    holdings?: HoldingsUpdateOneWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
    holdings?: HoldingsUncheckedUpdateOneWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    assetId: string
    assetDescription?: string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: string | null
    assetMask?: string | null
    assetName?: string | null
    assetOwnerName?: string | null
    balanceAsOf?: Date | string | null
    balanceCostBasis?: number | null
    balanceCostFrom?: string | null
    balanceCurrent?: number | null
    balanceFrom?: string | null
    balancePrice?: number | null
    balancePriceFrom?: string | null
    balanceQuantityCurrent?: number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: string | null
    creationDate?: Date | string | null
    currencyCode?: string | null
    deactivateBy?: Date | string | null
    descriptionEstatePlan?: string | null
    hasInvestment?: boolean | null
    includeInNetWorth?: boolean | null
    institutionId?: number | null
    institutionName?: string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: string | null
    isActive?: boolean | null
    isAsset?: boolean | null
    isFavorite?: boolean | null
    isLinkedVendor?: boolean | null
    lastUpdate?: Date | string | null
    lastUpdateAttempt?: Date | string | null
    logoName?: string | null
    modificationDate?: Date | string | null
    nextUpdate?: Date | string | null
    nickname?: string | null
    note?: string | null
    noteDate?: Date | string | null
    ownership?: string | null
    primaryAssetCategory?: string | null
    status?: string | null
    statusCode?: string | null
    userInstitutionId?: string | null
    vendorAccountType?: string | null
    vendorContainer?: string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: string | null
    wealthAssetType?: string | null
    wid?: string | null
  }

  export type AssetUpdateManyMutationInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetUncheckedUpdateManyInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HoldingsCreateInput = {
    asset: AssetCreateNestedOneWithoutHoldingsInput
    majorAssetClasses?: MajorAssetClassCreateNestedManyWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateInput = {
    id?: number
    assetId: string
    majorAssetClasses?: MajorAssetClassUncheckedCreateNestedManyWithoutHoldingsInput
  }

  export type HoldingsUpdateInput = {
    asset?: AssetUpdateOneRequiredWithoutHoldingsNestedInput
    majorAssetClasses?: MajorAssetClassUpdateManyWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
    majorAssetClasses?: MajorAssetClassUncheckedUpdateManyWithoutHoldingsNestedInput
  }

  export type HoldingsCreateManyInput = {
    id?: number
    assetId: string
  }

  export type HoldingsUpdateManyMutationInput = {

  }

  export type HoldingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type MajorAssetClassCreateInput = {
    majorClass?: string | null
    holdings: HoldingsCreateNestedOneWithoutMajorAssetClassesInput
    assetClasses?: AssetClassCreateNestedManyWithoutMajorAssetClassInput
  }

  export type MajorAssetClassUncheckedCreateInput = {
    id?: number
    holdingsId: number
    majorClass?: string | null
    assetClasses?: AssetClassUncheckedCreateNestedManyWithoutMajorAssetClassInput
  }

  export type MajorAssetClassUpdateInput = {
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
    holdings?: HoldingsUpdateOneRequiredWithoutMajorAssetClassesNestedInput
    assetClasses?: AssetClassUpdateManyWithoutMajorAssetClassNestedInput
  }

  export type MajorAssetClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    holdingsId?: IntFieldUpdateOperationsInput | number
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
    assetClasses?: AssetClassUncheckedUpdateManyWithoutMajorAssetClassNestedInput
  }

  export type MajorAssetClassCreateManyInput = {
    id?: number
    holdingsId: number
    majorClass?: string | null
  }

  export type MajorAssetClassUpdateManyMutationInput = {
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MajorAssetClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    holdingsId?: IntFieldUpdateOperationsInput | number
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetClassCreateInput = {
    minorAssetClass?: string | null
    value?: number | null
    majorAssetClass: MajorAssetClassCreateNestedOneWithoutAssetClassesInput
  }

  export type AssetClassUncheckedCreateInput = {
    id?: number
    majorAssetClassId: number
    minorAssetClass?: string | null
    value?: number | null
  }

  export type AssetClassUpdateInput = {
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    majorAssetClass?: MajorAssetClassUpdateOneRequiredWithoutAssetClassesNestedInput
  }

  export type AssetClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    majorAssetClassId?: IntFieldUpdateOperationsInput | number
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AssetClassCreateManyInput = {
    id?: number
    majorAssetClassId: number
    minorAssetClass?: string | null
    value?: number | null
  }

  export type AssetClassUpdateManyMutationInput = {
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AssetClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    majorAssetClassId?: IntFieldUpdateOperationsInput | number
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DefaultUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type DefaultUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DefaultUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type DefaultUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type DefaultUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type HoldingsNullableScalarRelationFilter = {
    is?: HoldingsWhereInput | null
    isNot?: HoldingsWhereInput | null
  }

  export type AssetCountOrderByAggregateInput = {
    assetId?: SortOrder
    assetDescription?: SortOrder
    assetInfo?: SortOrder
    assetInfoType?: SortOrder
    assetMask?: SortOrder
    assetName?: SortOrder
    assetOwnerName?: SortOrder
    balanceAsOf?: SortOrder
    balanceCostBasis?: SortOrder
    balanceCostFrom?: SortOrder
    balanceCurrent?: SortOrder
    balanceFrom?: SortOrder
    balancePrice?: SortOrder
    balancePriceFrom?: SortOrder
    balanceQuantityCurrent?: SortOrder
    beneficiaryComposition?: SortOrder
    cognitoId?: SortOrder
    creationDate?: SortOrder
    currencyCode?: SortOrder
    deactivateBy?: SortOrder
    descriptionEstatePlan?: SortOrder
    hasInvestment?: SortOrder
    includeInNetWorth?: SortOrder
    institutionId?: SortOrder
    institutionName?: SortOrder
    integration?: SortOrder
    integrationAccountId?: SortOrder
    isActive?: SortOrder
    isAsset?: SortOrder
    isFavorite?: SortOrder
    isLinkedVendor?: SortOrder
    lastUpdate?: SortOrder
    lastUpdateAttempt?: SortOrder
    logoName?: SortOrder
    modificationDate?: SortOrder
    nextUpdate?: SortOrder
    nickname?: SortOrder
    note?: SortOrder
    noteDate?: SortOrder
    ownership?: SortOrder
    primaryAssetCategory?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    userInstitutionId?: SortOrder
    vendorAccountType?: SortOrder
    vendorContainer?: SortOrder
    vendorResponse?: SortOrder
    vendorResponseType?: SortOrder
    wealthAssetType?: SortOrder
    wid?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    balanceCostBasis?: SortOrder
    balanceCurrent?: SortOrder
    balancePrice?: SortOrder
    balanceQuantityCurrent?: SortOrder
    institutionId?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    assetId?: SortOrder
    assetDescription?: SortOrder
    assetInfoType?: SortOrder
    assetMask?: SortOrder
    assetName?: SortOrder
    assetOwnerName?: SortOrder
    balanceAsOf?: SortOrder
    balanceCostBasis?: SortOrder
    balanceCostFrom?: SortOrder
    balanceCurrent?: SortOrder
    balanceFrom?: SortOrder
    balancePrice?: SortOrder
    balancePriceFrom?: SortOrder
    balanceQuantityCurrent?: SortOrder
    cognitoId?: SortOrder
    creationDate?: SortOrder
    currencyCode?: SortOrder
    deactivateBy?: SortOrder
    descriptionEstatePlan?: SortOrder
    hasInvestment?: SortOrder
    includeInNetWorth?: SortOrder
    institutionId?: SortOrder
    institutionName?: SortOrder
    integrationAccountId?: SortOrder
    isActive?: SortOrder
    isAsset?: SortOrder
    isFavorite?: SortOrder
    isLinkedVendor?: SortOrder
    lastUpdate?: SortOrder
    lastUpdateAttempt?: SortOrder
    logoName?: SortOrder
    modificationDate?: SortOrder
    nextUpdate?: SortOrder
    nickname?: SortOrder
    note?: SortOrder
    noteDate?: SortOrder
    ownership?: SortOrder
    primaryAssetCategory?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    userInstitutionId?: SortOrder
    vendorAccountType?: SortOrder
    vendorContainer?: SortOrder
    vendorResponseType?: SortOrder
    wealthAssetType?: SortOrder
    wid?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    assetId?: SortOrder
    assetDescription?: SortOrder
    assetInfoType?: SortOrder
    assetMask?: SortOrder
    assetName?: SortOrder
    assetOwnerName?: SortOrder
    balanceAsOf?: SortOrder
    balanceCostBasis?: SortOrder
    balanceCostFrom?: SortOrder
    balanceCurrent?: SortOrder
    balanceFrom?: SortOrder
    balancePrice?: SortOrder
    balancePriceFrom?: SortOrder
    balanceQuantityCurrent?: SortOrder
    cognitoId?: SortOrder
    creationDate?: SortOrder
    currencyCode?: SortOrder
    deactivateBy?: SortOrder
    descriptionEstatePlan?: SortOrder
    hasInvestment?: SortOrder
    includeInNetWorth?: SortOrder
    institutionId?: SortOrder
    institutionName?: SortOrder
    integrationAccountId?: SortOrder
    isActive?: SortOrder
    isAsset?: SortOrder
    isFavorite?: SortOrder
    isLinkedVendor?: SortOrder
    lastUpdate?: SortOrder
    lastUpdateAttempt?: SortOrder
    logoName?: SortOrder
    modificationDate?: SortOrder
    nextUpdate?: SortOrder
    nickname?: SortOrder
    note?: SortOrder
    noteDate?: SortOrder
    ownership?: SortOrder
    primaryAssetCategory?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    userInstitutionId?: SortOrder
    vendorAccountType?: SortOrder
    vendorContainer?: SortOrder
    vendorResponseType?: SortOrder
    wealthAssetType?: SortOrder
    wid?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    balanceCostBasis?: SortOrder
    balanceCurrent?: SortOrder
    balancePrice?: SortOrder
    balanceQuantityCurrent?: SortOrder
    institutionId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type MajorAssetClassListRelationFilter = {
    every?: MajorAssetClassWhereInput
    some?: MajorAssetClassWhereInput
    none?: MajorAssetClassWhereInput
  }

  export type MajorAssetClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoldingsCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
  }

  export type HoldingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HoldingsMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
  }

  export type HoldingsMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
  }

  export type HoldingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HoldingsScalarRelationFilter = {
    is?: HoldingsWhereInput
    isNot?: HoldingsWhereInput
  }

  export type AssetClassListRelationFilter = {
    every?: AssetClassWhereInput
    some?: AssetClassWhereInput
    none?: AssetClassWhereInput
  }

  export type AssetClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorAssetClassCountOrderByAggregateInput = {
    id?: SortOrder
    holdingsId?: SortOrder
    majorClass?: SortOrder
  }

  export type MajorAssetClassAvgOrderByAggregateInput = {
    id?: SortOrder
    holdingsId?: SortOrder
  }

  export type MajorAssetClassMaxOrderByAggregateInput = {
    id?: SortOrder
    holdingsId?: SortOrder
    majorClass?: SortOrder
  }

  export type MajorAssetClassMinOrderByAggregateInput = {
    id?: SortOrder
    holdingsId?: SortOrder
    majorClass?: SortOrder
  }

  export type MajorAssetClassSumOrderByAggregateInput = {
    id?: SortOrder
    holdingsId?: SortOrder
  }

  export type MajorAssetClassScalarRelationFilter = {
    is?: MajorAssetClassWhereInput
    isNot?: MajorAssetClassWhereInput
  }

  export type AssetClassCountOrderByAggregateInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    minorAssetClass?: SortOrder
    value?: SortOrder
  }

  export type AssetClassAvgOrderByAggregateInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    value?: SortOrder
  }

  export type AssetClassMaxOrderByAggregateInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    minorAssetClass?: SortOrder
    value?: SortOrder
  }

  export type AssetClassMinOrderByAggregateInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    minorAssetClass?: SortOrder
    value?: SortOrder
  }

  export type AssetClassSumOrderByAggregateInput = {
    id?: SortOrder
    majorAssetClassId?: SortOrder
    value?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type HoldingsCreateNestedOneWithoutAssetInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput
    connect?: HoldingsWhereUniqueInput
  }

  export type HoldingsUncheckedCreateNestedOneWithoutAssetInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput
    connect?: HoldingsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type HoldingsUpdateOneWithoutAssetNestedInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput
    upsert?: HoldingsUpsertWithoutAssetInput
    disconnect?: HoldingsWhereInput | boolean
    delete?: HoldingsWhereInput | boolean
    connect?: HoldingsWhereUniqueInput
    update?: XOR<XOR<HoldingsUpdateToOneWithWhereWithoutAssetInput, HoldingsUpdateWithoutAssetInput>, HoldingsUncheckedUpdateWithoutAssetInput>
  }

  export type HoldingsUncheckedUpdateOneWithoutAssetNestedInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput
    upsert?: HoldingsUpsertWithoutAssetInput
    disconnect?: HoldingsWhereInput | boolean
    delete?: HoldingsWhereInput | boolean
    connect?: HoldingsWhereUniqueInput
    update?: XOR<XOR<HoldingsUpdateToOneWithWhereWithoutAssetInput, HoldingsUpdateWithoutAssetInput>, HoldingsUncheckedUpdateWithoutAssetInput>
  }

  export type AssetCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput
    connect?: AssetWhereUniqueInput
  }

  export type MajorAssetClassCreateNestedManyWithoutHoldingsInput = {
    create?: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput> | MajorAssetClassCreateWithoutHoldingsInput[] | MajorAssetClassUncheckedCreateWithoutHoldingsInput[]
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutHoldingsInput | MajorAssetClassCreateOrConnectWithoutHoldingsInput[]
    createMany?: MajorAssetClassCreateManyHoldingsInputEnvelope
    connect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
  }

  export type MajorAssetClassUncheckedCreateNestedManyWithoutHoldingsInput = {
    create?: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput> | MajorAssetClassCreateWithoutHoldingsInput[] | MajorAssetClassUncheckedCreateWithoutHoldingsInput[]
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutHoldingsInput | MajorAssetClassCreateOrConnectWithoutHoldingsInput[]
    createMany?: MajorAssetClassCreateManyHoldingsInputEnvelope
    connect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
  }

  export type AssetUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput
    upsert?: AssetUpsertWithoutHoldingsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutHoldingsInput, AssetUpdateWithoutHoldingsInput>, AssetUncheckedUpdateWithoutHoldingsInput>
  }

  export type MajorAssetClassUpdateManyWithoutHoldingsNestedInput = {
    create?: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput> | MajorAssetClassCreateWithoutHoldingsInput[] | MajorAssetClassUncheckedCreateWithoutHoldingsInput[]
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutHoldingsInput | MajorAssetClassCreateOrConnectWithoutHoldingsInput[]
    upsert?: MajorAssetClassUpsertWithWhereUniqueWithoutHoldingsInput | MajorAssetClassUpsertWithWhereUniqueWithoutHoldingsInput[]
    createMany?: MajorAssetClassCreateManyHoldingsInputEnvelope
    set?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    disconnect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    delete?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    connect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    update?: MajorAssetClassUpdateWithWhereUniqueWithoutHoldingsInput | MajorAssetClassUpdateWithWhereUniqueWithoutHoldingsInput[]
    updateMany?: MajorAssetClassUpdateManyWithWhereWithoutHoldingsInput | MajorAssetClassUpdateManyWithWhereWithoutHoldingsInput[]
    deleteMany?: MajorAssetClassScalarWhereInput | MajorAssetClassScalarWhereInput[]
  }

  export type MajorAssetClassUncheckedUpdateManyWithoutHoldingsNestedInput = {
    create?: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput> | MajorAssetClassCreateWithoutHoldingsInput[] | MajorAssetClassUncheckedCreateWithoutHoldingsInput[]
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutHoldingsInput | MajorAssetClassCreateOrConnectWithoutHoldingsInput[]
    upsert?: MajorAssetClassUpsertWithWhereUniqueWithoutHoldingsInput | MajorAssetClassUpsertWithWhereUniqueWithoutHoldingsInput[]
    createMany?: MajorAssetClassCreateManyHoldingsInputEnvelope
    set?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    disconnect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    delete?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    connect?: MajorAssetClassWhereUniqueInput | MajorAssetClassWhereUniqueInput[]
    update?: MajorAssetClassUpdateWithWhereUniqueWithoutHoldingsInput | MajorAssetClassUpdateWithWhereUniqueWithoutHoldingsInput[]
    updateMany?: MajorAssetClassUpdateManyWithWhereWithoutHoldingsInput | MajorAssetClassUpdateManyWithWhereWithoutHoldingsInput[]
    deleteMany?: MajorAssetClassScalarWhereInput | MajorAssetClassScalarWhereInput[]
  }

  export type HoldingsCreateNestedOneWithoutMajorAssetClassesInput = {
    create?: XOR<HoldingsCreateWithoutMajorAssetClassesInput, HoldingsUncheckedCreateWithoutMajorAssetClassesInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutMajorAssetClassesInput
    connect?: HoldingsWhereUniqueInput
  }

  export type AssetClassCreateNestedManyWithoutMajorAssetClassInput = {
    create?: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput> | AssetClassCreateWithoutMajorAssetClassInput[] | AssetClassUncheckedCreateWithoutMajorAssetClassInput[]
    connectOrCreate?: AssetClassCreateOrConnectWithoutMajorAssetClassInput | AssetClassCreateOrConnectWithoutMajorAssetClassInput[]
    createMany?: AssetClassCreateManyMajorAssetClassInputEnvelope
    connect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
  }

  export type AssetClassUncheckedCreateNestedManyWithoutMajorAssetClassInput = {
    create?: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput> | AssetClassCreateWithoutMajorAssetClassInput[] | AssetClassUncheckedCreateWithoutMajorAssetClassInput[]
    connectOrCreate?: AssetClassCreateOrConnectWithoutMajorAssetClassInput | AssetClassCreateOrConnectWithoutMajorAssetClassInput[]
    createMany?: AssetClassCreateManyMajorAssetClassInputEnvelope
    connect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
  }

  export type HoldingsUpdateOneRequiredWithoutMajorAssetClassesNestedInput = {
    create?: XOR<HoldingsCreateWithoutMajorAssetClassesInput, HoldingsUncheckedCreateWithoutMajorAssetClassesInput>
    connectOrCreate?: HoldingsCreateOrConnectWithoutMajorAssetClassesInput
    upsert?: HoldingsUpsertWithoutMajorAssetClassesInput
    connect?: HoldingsWhereUniqueInput
    update?: XOR<XOR<HoldingsUpdateToOneWithWhereWithoutMajorAssetClassesInput, HoldingsUpdateWithoutMajorAssetClassesInput>, HoldingsUncheckedUpdateWithoutMajorAssetClassesInput>
  }

  export type AssetClassUpdateManyWithoutMajorAssetClassNestedInput = {
    create?: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput> | AssetClassCreateWithoutMajorAssetClassInput[] | AssetClassUncheckedCreateWithoutMajorAssetClassInput[]
    connectOrCreate?: AssetClassCreateOrConnectWithoutMajorAssetClassInput | AssetClassCreateOrConnectWithoutMajorAssetClassInput[]
    upsert?: AssetClassUpsertWithWhereUniqueWithoutMajorAssetClassInput | AssetClassUpsertWithWhereUniqueWithoutMajorAssetClassInput[]
    createMany?: AssetClassCreateManyMajorAssetClassInputEnvelope
    set?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    disconnect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    delete?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    connect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    update?: AssetClassUpdateWithWhereUniqueWithoutMajorAssetClassInput | AssetClassUpdateWithWhereUniqueWithoutMajorAssetClassInput[]
    updateMany?: AssetClassUpdateManyWithWhereWithoutMajorAssetClassInput | AssetClassUpdateManyWithWhereWithoutMajorAssetClassInput[]
    deleteMany?: AssetClassScalarWhereInput | AssetClassScalarWhereInput[]
  }

  export type AssetClassUncheckedUpdateManyWithoutMajorAssetClassNestedInput = {
    create?: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput> | AssetClassCreateWithoutMajorAssetClassInput[] | AssetClassUncheckedCreateWithoutMajorAssetClassInput[]
    connectOrCreate?: AssetClassCreateOrConnectWithoutMajorAssetClassInput | AssetClassCreateOrConnectWithoutMajorAssetClassInput[]
    upsert?: AssetClassUpsertWithWhereUniqueWithoutMajorAssetClassInput | AssetClassUpsertWithWhereUniqueWithoutMajorAssetClassInput[]
    createMany?: AssetClassCreateManyMajorAssetClassInputEnvelope
    set?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    disconnect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    delete?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    connect?: AssetClassWhereUniqueInput | AssetClassWhereUniqueInput[]
    update?: AssetClassUpdateWithWhereUniqueWithoutMajorAssetClassInput | AssetClassUpdateWithWhereUniqueWithoutMajorAssetClassInput[]
    updateMany?: AssetClassUpdateManyWithWhereWithoutMajorAssetClassInput | AssetClassUpdateManyWithWhereWithoutMajorAssetClassInput[]
    deleteMany?: AssetClassScalarWhereInput | AssetClassScalarWhereInput[]
  }

  export type MajorAssetClassCreateNestedOneWithoutAssetClassesInput = {
    create?: XOR<MajorAssetClassCreateWithoutAssetClassesInput, MajorAssetClassUncheckedCreateWithoutAssetClassesInput>
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutAssetClassesInput
    connect?: MajorAssetClassWhereUniqueInput
  }

  export type MajorAssetClassUpdateOneRequiredWithoutAssetClassesNestedInput = {
    create?: XOR<MajorAssetClassCreateWithoutAssetClassesInput, MajorAssetClassUncheckedCreateWithoutAssetClassesInput>
    connectOrCreate?: MajorAssetClassCreateOrConnectWithoutAssetClassesInput
    upsert?: MajorAssetClassUpsertWithoutAssetClassesInput
    connect?: MajorAssetClassWhereUniqueInput
    update?: XOR<XOR<MajorAssetClassUpdateToOneWithWhereWithoutAssetClassesInput, MajorAssetClassUpdateWithoutAssetClassesInput>, MajorAssetClassUncheckedUpdateWithoutAssetClassesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HoldingsCreateWithoutAssetInput = {
    majorAssetClasses?: MajorAssetClassCreateNestedManyWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateWithoutAssetInput = {
    id?: number
    majorAssetClasses?: MajorAssetClassUncheckedCreateNestedManyWithoutHoldingsInput
  }

  export type HoldingsCreateOrConnectWithoutAssetInput = {
    where: HoldingsWhereUniqueInput
    create: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
  }

  export type HoldingsUpsertWithoutAssetInput = {
    update: XOR<HoldingsUpdateWithoutAssetInput, HoldingsUncheckedUpdateWithoutAssetInput>
    create: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
    where?: HoldingsWhereInput
  }

  export type HoldingsUpdateToOneWithWhereWithoutAssetInput = {
    where?: HoldingsWhereInput
    data: XOR<HoldingsUpdateWithoutAssetInput, HoldingsUncheckedUpdateWithoutAssetInput>
  }

  export type HoldingsUpdateWithoutAssetInput = {
    majorAssetClasses?: MajorAssetClassUpdateManyWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    majorAssetClasses?: MajorAssetClassUncheckedUpdateManyWithoutHoldingsNestedInput
  }

  export type AssetCreateWithoutHoldingsInput = {
    assetId: string
    assetDescription?: string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: string | null
    assetMask?: string | null
    assetName?: string | null
    assetOwnerName?: string | null
    balanceAsOf?: Date | string | null
    balanceCostBasis?: number | null
    balanceCostFrom?: string | null
    balanceCurrent?: number | null
    balanceFrom?: string | null
    balancePrice?: number | null
    balancePriceFrom?: string | null
    balanceQuantityCurrent?: number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: string | null
    creationDate?: Date | string | null
    currencyCode?: string | null
    deactivateBy?: Date | string | null
    descriptionEstatePlan?: string | null
    hasInvestment?: boolean | null
    includeInNetWorth?: boolean | null
    institutionId?: number | null
    institutionName?: string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: string | null
    isActive?: boolean | null
    isAsset?: boolean | null
    isFavorite?: boolean | null
    isLinkedVendor?: boolean | null
    lastUpdate?: Date | string | null
    lastUpdateAttempt?: Date | string | null
    logoName?: string | null
    modificationDate?: Date | string | null
    nextUpdate?: Date | string | null
    nickname?: string | null
    note?: string | null
    noteDate?: Date | string | null
    ownership?: string | null
    primaryAssetCategory?: string | null
    status?: string | null
    statusCode?: string | null
    userInstitutionId?: string | null
    vendorAccountType?: string | null
    vendorContainer?: string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: string | null
    wealthAssetType?: string | null
    wid?: string | null
  }

  export type AssetUncheckedCreateWithoutHoldingsInput = {
    assetId: string
    assetDescription?: string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: string | null
    assetMask?: string | null
    assetName?: string | null
    assetOwnerName?: string | null
    balanceAsOf?: Date | string | null
    balanceCostBasis?: number | null
    balanceCostFrom?: string | null
    balanceCurrent?: number | null
    balanceFrom?: string | null
    balancePrice?: number | null
    balancePriceFrom?: string | null
    balanceQuantityCurrent?: number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: string | null
    creationDate?: Date | string | null
    currencyCode?: string | null
    deactivateBy?: Date | string | null
    descriptionEstatePlan?: string | null
    hasInvestment?: boolean | null
    includeInNetWorth?: boolean | null
    institutionId?: number | null
    institutionName?: string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: string | null
    isActive?: boolean | null
    isAsset?: boolean | null
    isFavorite?: boolean | null
    isLinkedVendor?: boolean | null
    lastUpdate?: Date | string | null
    lastUpdateAttempt?: Date | string | null
    logoName?: string | null
    modificationDate?: Date | string | null
    nextUpdate?: Date | string | null
    nickname?: string | null
    note?: string | null
    noteDate?: Date | string | null
    ownership?: string | null
    primaryAssetCategory?: string | null
    status?: string | null
    statusCode?: string | null
    userInstitutionId?: string | null
    vendorAccountType?: string | null
    vendorContainer?: string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: string | null
    wealthAssetType?: string | null
    wid?: string | null
  }

  export type AssetCreateOrConnectWithoutHoldingsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
  }

  export type MajorAssetClassCreateWithoutHoldingsInput = {
    majorClass?: string | null
    assetClasses?: AssetClassCreateNestedManyWithoutMajorAssetClassInput
  }

  export type MajorAssetClassUncheckedCreateWithoutHoldingsInput = {
    id?: number
    majorClass?: string | null
    assetClasses?: AssetClassUncheckedCreateNestedManyWithoutMajorAssetClassInput
  }

  export type MajorAssetClassCreateOrConnectWithoutHoldingsInput = {
    where: MajorAssetClassWhereUniqueInput
    create: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput>
  }

  export type MajorAssetClassCreateManyHoldingsInputEnvelope = {
    data: MajorAssetClassCreateManyHoldingsInput | MajorAssetClassCreateManyHoldingsInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithoutHoldingsInput = {
    update: XOR<AssetUpdateWithoutHoldingsInput, AssetUncheckedUpdateWithoutHoldingsInput>
    create: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutHoldingsInput, AssetUncheckedUpdateWithoutHoldingsInput>
  }

  export type AssetUpdateWithoutHoldingsInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetUncheckedUpdateWithoutHoldingsInput = {
    assetId?: StringFieldUpdateOperationsInput | string
    assetDescription?: NullableStringFieldUpdateOperationsInput | string | null
    assetInfo?: NullableJsonNullValueInput | InputJsonValue
    assetInfoType?: NullableStringFieldUpdateOperationsInput | string | null
    assetMask?: NullableStringFieldUpdateOperationsInput | string | null
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    assetOwnerName?: NullableStringFieldUpdateOperationsInput | string | null
    balanceAsOf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balanceCostBasis?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceCostFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    balanceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balancePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    balancePriceFrom?: NullableStringFieldUpdateOperationsInput | string | null
    balanceQuantityCurrent?: NullableFloatFieldUpdateOperationsInput | number | null
    beneficiaryComposition?: NullableJsonNullValueInput | InputJsonValue
    cognitoId?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    deactivateBy?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descriptionEstatePlan?: NullableStringFieldUpdateOperationsInput | string | null
    hasInvestment?: NullableBoolFieldUpdateOperationsInput | boolean | null
    includeInNetWorth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: NullableJsonNullValueInput | InputJsonValue
    integrationAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAsset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFavorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isLinkedVendor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUpdateAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logoName?: NullableStringFieldUpdateOperationsInput | string | null
    modificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    noteDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownership?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAssetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableStringFieldUpdateOperationsInput | string | null
    userInstitutionId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorAccountType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorContainer?: NullableStringFieldUpdateOperationsInput | string | null
    vendorResponse?: NullableJsonNullValueInput | InputJsonValue
    vendorResponseType?: NullableStringFieldUpdateOperationsInput | string | null
    wealthAssetType?: NullableStringFieldUpdateOperationsInput | string | null
    wid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MajorAssetClassUpsertWithWhereUniqueWithoutHoldingsInput = {
    where: MajorAssetClassWhereUniqueInput
    update: XOR<MajorAssetClassUpdateWithoutHoldingsInput, MajorAssetClassUncheckedUpdateWithoutHoldingsInput>
    create: XOR<MajorAssetClassCreateWithoutHoldingsInput, MajorAssetClassUncheckedCreateWithoutHoldingsInput>
  }

  export type MajorAssetClassUpdateWithWhereUniqueWithoutHoldingsInput = {
    where: MajorAssetClassWhereUniqueInput
    data: XOR<MajorAssetClassUpdateWithoutHoldingsInput, MajorAssetClassUncheckedUpdateWithoutHoldingsInput>
  }

  export type MajorAssetClassUpdateManyWithWhereWithoutHoldingsInput = {
    where: MajorAssetClassScalarWhereInput
    data: XOR<MajorAssetClassUpdateManyMutationInput, MajorAssetClassUncheckedUpdateManyWithoutHoldingsInput>
  }

  export type MajorAssetClassScalarWhereInput = {
    AND?: MajorAssetClassScalarWhereInput | MajorAssetClassScalarWhereInput[]
    OR?: MajorAssetClassScalarWhereInput[]
    NOT?: MajorAssetClassScalarWhereInput | MajorAssetClassScalarWhereInput[]
    id?: IntFilter<"MajorAssetClass"> | number
    holdingsId?: IntFilter<"MajorAssetClass"> | number
    majorClass?: StringNullableFilter<"MajorAssetClass"> | string | null
  }

  export type HoldingsCreateWithoutMajorAssetClassesInput = {
    asset: AssetCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateWithoutMajorAssetClassesInput = {
    id?: number
    assetId: string
  }

  export type HoldingsCreateOrConnectWithoutMajorAssetClassesInput = {
    where: HoldingsWhereUniqueInput
    create: XOR<HoldingsCreateWithoutMajorAssetClassesInput, HoldingsUncheckedCreateWithoutMajorAssetClassesInput>
  }

  export type AssetClassCreateWithoutMajorAssetClassInput = {
    minorAssetClass?: string | null
    value?: number | null
  }

  export type AssetClassUncheckedCreateWithoutMajorAssetClassInput = {
    id?: number
    minorAssetClass?: string | null
    value?: number | null
  }

  export type AssetClassCreateOrConnectWithoutMajorAssetClassInput = {
    where: AssetClassWhereUniqueInput
    create: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput>
  }

  export type AssetClassCreateManyMajorAssetClassInputEnvelope = {
    data: AssetClassCreateManyMajorAssetClassInput | AssetClassCreateManyMajorAssetClassInput[]
    skipDuplicates?: boolean
  }

  export type HoldingsUpsertWithoutMajorAssetClassesInput = {
    update: XOR<HoldingsUpdateWithoutMajorAssetClassesInput, HoldingsUncheckedUpdateWithoutMajorAssetClassesInput>
    create: XOR<HoldingsCreateWithoutMajorAssetClassesInput, HoldingsUncheckedCreateWithoutMajorAssetClassesInput>
    where?: HoldingsWhereInput
  }

  export type HoldingsUpdateToOneWithWhereWithoutMajorAssetClassesInput = {
    where?: HoldingsWhereInput
    data: XOR<HoldingsUpdateWithoutMajorAssetClassesInput, HoldingsUncheckedUpdateWithoutMajorAssetClassesInput>
  }

  export type HoldingsUpdateWithoutMajorAssetClassesInput = {
    asset?: AssetUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateWithoutMajorAssetClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetId?: StringFieldUpdateOperationsInput | string
  }

  export type AssetClassUpsertWithWhereUniqueWithoutMajorAssetClassInput = {
    where: AssetClassWhereUniqueInput
    update: XOR<AssetClassUpdateWithoutMajorAssetClassInput, AssetClassUncheckedUpdateWithoutMajorAssetClassInput>
    create: XOR<AssetClassCreateWithoutMajorAssetClassInput, AssetClassUncheckedCreateWithoutMajorAssetClassInput>
  }

  export type AssetClassUpdateWithWhereUniqueWithoutMajorAssetClassInput = {
    where: AssetClassWhereUniqueInput
    data: XOR<AssetClassUpdateWithoutMajorAssetClassInput, AssetClassUncheckedUpdateWithoutMajorAssetClassInput>
  }

  export type AssetClassUpdateManyWithWhereWithoutMajorAssetClassInput = {
    where: AssetClassScalarWhereInput
    data: XOR<AssetClassUpdateManyMutationInput, AssetClassUncheckedUpdateManyWithoutMajorAssetClassInput>
  }

  export type AssetClassScalarWhereInput = {
    AND?: AssetClassScalarWhereInput | AssetClassScalarWhereInput[]
    OR?: AssetClassScalarWhereInput[]
    NOT?: AssetClassScalarWhereInput | AssetClassScalarWhereInput[]
    id?: IntFilter<"AssetClass"> | number
    majorAssetClassId?: IntFilter<"AssetClass"> | number
    minorAssetClass?: StringNullableFilter<"AssetClass"> | string | null
    value?: FloatNullableFilter<"AssetClass"> | number | null
  }

  export type MajorAssetClassCreateWithoutAssetClassesInput = {
    majorClass?: string | null
    holdings: HoldingsCreateNestedOneWithoutMajorAssetClassesInput
  }

  export type MajorAssetClassUncheckedCreateWithoutAssetClassesInput = {
    id?: number
    holdingsId: number
    majorClass?: string | null
  }

  export type MajorAssetClassCreateOrConnectWithoutAssetClassesInput = {
    where: MajorAssetClassWhereUniqueInput
    create: XOR<MajorAssetClassCreateWithoutAssetClassesInput, MajorAssetClassUncheckedCreateWithoutAssetClassesInput>
  }

  export type MajorAssetClassUpsertWithoutAssetClassesInput = {
    update: XOR<MajorAssetClassUpdateWithoutAssetClassesInput, MajorAssetClassUncheckedUpdateWithoutAssetClassesInput>
    create: XOR<MajorAssetClassCreateWithoutAssetClassesInput, MajorAssetClassUncheckedCreateWithoutAssetClassesInput>
    where?: MajorAssetClassWhereInput
  }

  export type MajorAssetClassUpdateToOneWithWhereWithoutAssetClassesInput = {
    where?: MajorAssetClassWhereInput
    data: XOR<MajorAssetClassUpdateWithoutAssetClassesInput, MajorAssetClassUncheckedUpdateWithoutAssetClassesInput>
  }

  export type MajorAssetClassUpdateWithoutAssetClassesInput = {
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
    holdings?: HoldingsUpdateOneRequiredWithoutMajorAssetClassesNestedInput
  }

  export type MajorAssetClassUncheckedUpdateWithoutAssetClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    holdingsId?: IntFieldUpdateOperationsInput | number
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorAssetClassCreateManyHoldingsInput = {
    id?: number
    majorClass?: string | null
  }

  export type MajorAssetClassUpdateWithoutHoldingsInput = {
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
    assetClasses?: AssetClassUpdateManyWithoutMajorAssetClassNestedInput
  }

  export type MajorAssetClassUncheckedUpdateWithoutHoldingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
    assetClasses?: AssetClassUncheckedUpdateManyWithoutMajorAssetClassNestedInput
  }

  export type MajorAssetClassUncheckedUpdateManyWithoutHoldingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    majorClass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetClassCreateManyMajorAssetClassInput = {
    id?: number
    minorAssetClass?: string | null
    value?: number | null
  }

  export type AssetClassUpdateWithoutMajorAssetClassInput = {
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AssetClassUncheckedUpdateWithoutMajorAssetClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AssetClassUncheckedUpdateManyWithoutMajorAssetClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    minorAssetClass?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}