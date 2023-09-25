const TagClass = {
        /// <summary>
        ///   The Universal tag class
        /// </summary>
        Universal : 0,

        /// <summary>
        ///   The Application tag class
        /// </summary>
        Application : 0b0100_0000,

        /// <summary>
        ///   The Context-Specific tag class
        /// </summary>
        ContextSpecific : 0b1000_0000,

        /// <summary>
        ///   The Private tag class
        /// </summary>
        Private : 0b1100_0000,
};
export default TagClass;